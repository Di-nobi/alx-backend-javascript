const getPaymentTokenFromAPI = require('./6-payment_token')
const chai = require('chai');
const expect = chai.expect;

describe("getPaymentTokenFromAPI", function() {
    it("testing Asynchronously", function (done) {
        getPaymentTokenFromAPI(true)
        .then((data) => {
           expect(data).to.have.own.property('data');
           done();
        })
    })
})