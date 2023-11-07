const api = require('./api');
const chai = require('chai');
const expect = chai.expect;
const request = require('request');
const {describe, it} = require("mocha");

describe('api', function () {
    const datas = {
        url: 'http://localhost:7865',
        method: 'GET'
    }
    it('Tests the api', function (done) {

        request(datas, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
    it('checks for the correct content', function(done) {
        request(datas, (err, res, body) => {
            expect(body).to.contain("Welcome to the payment system");
            done();
        });
    });
    it('checks for the content length', function(done) {
        request(datas, (err, res, body) => {
            expect(res.headers['content-length']).to.equal('29');
            done();
        });
    });
});