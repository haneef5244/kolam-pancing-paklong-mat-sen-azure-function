const { app } = require('@azure/functions');
const { default: axios } = require('axios');

const generateEmailSubject = type => {
    switch (type) {
        case 'registration-verification':
            return '[Kolam Pancing Paklong Mat Sen] Verifikasi Email';
        default:
            return ''
    }
}

app.storageQueue('createBookingTrigger', {
    queueName: 'booking',
    connection: 'kolammatsin_STORAGE',
    handler: async (queueItem, context) => {
        try {
            context.log('Storage queue function processed work item:', queueItem);
            const {
                bookingId,
                pancangs,
                tarikh,
                kolamId,
            } = queueItem?.data;

            context.log(`Start - contextId = ${context.invocationId} at ${new Date()}`);
            //'https://kolam-pancing-paklong-mat-sen-a3anbpcfh3f3fgbq.southeastasia-01.azurewebsites.net/api/booking/save'
            const resp = await axios.post(`${process.env.APPLICATION_URL}/api/booking/save`, {
                ...queueItem?.data,
            }).catch(e => {
                console.log(e)
            })

            context.log(`End - contextId = ${context?.invocationId} - Queue executed successfully for booking id = ${bookingId} at ${new Date()}`)
        } catch (e) {
            context.log('Error processing message:', e.message);
            throw e;
        }
    }
});
