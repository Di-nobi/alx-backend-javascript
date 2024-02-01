const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils.js');
const sinon = require('sinon');
const assert = require('assert');

describe('sendpaymentrequesttoapi', function () {
    it('Uses stub from sinon', function () {
        const getstub = sinon.stub(Utils, 'calculateNumber');
        getstub.returns(10);
        const getspy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);


        assert(getstub.withArgs('SUM', 100, 20).calledOnce);
        assert(getspy.withArgs('The total is: 10').calledOnce);
        getstub.restore();
        getspy.restore();
    });
});
