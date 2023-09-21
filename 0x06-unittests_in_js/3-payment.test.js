const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils.js');
const sinon = require('sinon');
const assert = require('assert');

describe('sendpaymentrequesttoapi', function () {
    it('Uses Spy from sinon', function () {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(34, 22.3);
        assert(spy.calledOnce);
        spy.restore()
    })
})