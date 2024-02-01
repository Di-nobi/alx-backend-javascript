const Utils = require('./utils.js')
function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const data = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log("The total is:" + data);
}

module.exports = sendPaymentRequestToApi;
