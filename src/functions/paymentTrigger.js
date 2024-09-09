const { app } = require('@azure/functions');
const { default: axios } = require('axios');

app.storageQueue('paymentTrigger', {
    queueName: 'payment',
    connection: 'kolammatsin_STORAGE',
    handler: async (queueItem, context) => {

        const resp = await axios.post(`${process.env.APPLICATION_URL}/api/booking/payment/process`, {
            ...queueItem?.data,
        }).catch(e => {
            throw e
        })
        context.log(`Successfully processed payment queue`)
    }
});
