const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', function() {
    let spy;
    beforeEach(function () {
        spy = sinon.spy(console, 'log');
    });
    afterEach(function () {
        spy.restore();
    });
    it('Checks for the right argument in the console', function () {
        sendPaymentRequestToApi(100, 20);
        expect(spy.withArgs("The total is: 120").calledOnce).to.be.true;
        // expect(spy.calledWith)
    });
    it('Checks for the right argument in the console', function () {
        sendPaymentRequestToApi(10, 10);
        expect(spy.withArgs("The total is: 20").calledOnce).to.be.true;
        // expect(spy.calledWith)
    });

});
