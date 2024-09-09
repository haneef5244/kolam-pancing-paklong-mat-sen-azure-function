const { app } = require('@azure/functions');
const { default: axios } = require('axios');

app.storageQueue('paymentTrigger', {
    queueName: 'payment',
    connection: 'kolammatsin_STORAGE',
    handler: async (queueItem, context) => {

        const resp = await axios.post('https://kolam-pancing-paklong-mat-sen-a3anbpcfh3f3fgbq.southeastasia-01.azurewebsites.net/api/booking/payment/process', {
            ...queueItem?.data,
        }).catch(e => {
            throw e
        })
        context.log(`Successfully processed payment queue`)
    }
});
