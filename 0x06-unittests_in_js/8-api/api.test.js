const api = require('./api');
const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('api', function () {
    it('Tests the api', function (done) {
        const datas = {
            url: 'http://localhost:7865',
            method: 'GET',
        };

        request(datas, (err, res, body) => {
            expect(body).to.equal('Welcome to the payment system');
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
});
