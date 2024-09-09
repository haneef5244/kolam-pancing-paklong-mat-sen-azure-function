const { app } = require('@azure/functions');
const { registerConfirmation, forgotPassword, bookingSuccessful } = require('../templates/register');
const { EmailClient } = require('@azure/communication-email');

const generateEmailSubject = (type) => {
    switch (type) {
        case 'registration-verification':
            return '[Kolam Pancing Paklong Mat Sen] Verifikasi Email';
        case 'forgot-password':
            return '[Kolam Pancing Paklong Mat Sen] Reset Katalaluan';
        case 'booking-successful':
            return '[Kolam Pancing Paklong Mat Sen] Booking Berjaya!';
        default:
            return ''
    }
}

const generateEmailHtml = (type, props, extraProps) => {
    switch (type) {
        case 'registration-verification':
            return registerConfirmation(props?.namaPertama, props?.verificationUrl)
        case 'forgot-password':
            return forgotPassword(props?.namaPertama, props?.verificationUrl);
        case 'booking-successful':
            let paymentHtml = ''
            for (let i of extraProps?.paymentInfo) {
                paymentHtml += `<tr>
                    <td>${i?.item}</td>
                    <td>${i?.bilangan}</td>
                    <td>${i?.nota ?? ''}</td>
                    <td>${i?.amaun}</td>
                </tr>`
            }
            return bookingSuccessful({
                tarikhPancing: extraProps?.tarikhPancing,
                kolamId: extraProps?.kolamId,
                paymentHtml,
                namaPertama: extraProps?.namaPertama,
                qrCodeImage: extraProps?.qrCodeImage
            })
        default:
            return ''
    }
}

app.storageQueue('emailTrigger', {
    queueName: 'email',
    connection: 'kolammatsin_STORAGE',
    handler: (queueItem, context) => {
        try {
            context.log('Storage queue function processed work item:', queueItem);
            const {
                senderAddress,
                recipients,
                plainText = '',
                verificationUrl,
                namaPertama,
                type,
                props = {}
            } = queueItem?.data;

            const message = {
                senderAddress,
                recipients,
                content: {
                    subject: generateEmailSubject(type, { namaPertama, verificationUrl }),
                    plainText,
                    html: generateEmailHtml(type, { namaPertama, verificationUrl }, props)
                },
            }

            context.log(`email con string = `, process.env.AZURE_EMAIL_COMMUNICATION_CONNECTION_STRING)
            const client = new EmailClient(process.env.AZURE_EMAIL_COMMUNICATION_CONNECTION_STRING);
            client.beginSend(message);
            return;
        } catch (e) {
            context.log('Error processing message:', e.message);
            throw e;
        }
    }
});
