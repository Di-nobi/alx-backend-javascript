const request = require('request');
const { expect } = require('chai');

describe('Testing', () => {
    describe('get', () => {
        it('should test the body', function(done) {
            const datas = {
                url: 'http://localhost:7865',
                method: 'GET'
            };

            request(datas, (err, res, body) => {
               expect(res.statusCode).to.equal(200);
               expect(body).to.equal(200);
               expect(body).to.equal('Welcome to the payment system');
               done();
            });
        });
    });

    describe('GET /cart/12', () => {
        it('should respond with 200', function(done) {
            const datas = {
                url: 'http://localhost:7865/cart/12',
                method: 'GET',
            };

            request(datas, (err, res, body) => {
                expect(res.statusCode).to.equal(200);
                expect(body).to.equal('Payment methods for cart 12');
                done();
            });
        });
    });

    describe('GET /cart/mama', () => {
        it('Should respond with 404', function(done) {
            const datas = {
                url: 'http://localhost:7865/cart/mama',
                method: 'GET',
            };
            request(datas, (err, res, body) => {
                expect(res.statusCode).to.equal(404);
                done();
            });
        });
    });
})