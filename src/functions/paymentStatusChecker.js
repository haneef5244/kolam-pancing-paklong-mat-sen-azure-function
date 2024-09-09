const { app } = require('@azure/functions');
const { default: axios } = require('axios');

// Time-triggered function that runs every 15 minutes
app.timer('paymentStatusChecker', {
    schedule: '0 */1 * * * *',  // Cron expression for every 15 minutes
    handler: async (myTimer, context) => {
        const timeStamp = new Date().toISOString();

        context.log('Timer trigger function executed at: ', timeStamp);

        try {
            const resp = await axios.get(`${process.env.APPLICATION_URL}/api/booking/payment/checker`).catch(e => {
                throw e
            })
            context.log('Payment status checked successfully:', resp.data);
        } catch (error) {
            context.log.error('Error checking payment status:', error);
        }
    }
});