const request = require('request');
const { describe, it } = require('mocha');
const expect = require('chai').expect;

describe('Index page', function () {
  const operatortions = {
    url: 'http://localhost:7865/',
    method: 'GET'
  };
  it('check status code', function (done) {
    request(operatortions, function (err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
    });
  });
  it('check correct content', function (done) {
    request(operatortions, function (err, res, body) {
	    expect(body).to.equal('Welcome to the payment system');
	    done();
    });
  });
});

describe('Cart page', function () {
  it('check correct status code for correct url', function (done) {
    request.get('http://localhost:7865/cart/12', function (err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
    });
  });
  it('check correct content for correct url', function (done) {
    request.get('http://localhost:7865/cart/12', function (err, res, body) {
	    expect(body).to.equal('Payment methods for cart 12');
	    done();
    });
  });
  it('check correct status code for incorrect url', function (done) {
    request.get('http://localhost:7865/cart/kim', function (err, res, body) {
	    expect(res.statusCode).to.equal(404);
	    done();
    });
  });
});

describe('Available_payments page', function () {
  it('check correct status for correct url', function () {
    request.get('http://localhost:7865/available_payments', (err, res, body) => {
	    if (err) {
        expect(res.statusCode).to.not.equal(200);
	    } else {
        expect(res.statusCode).to.equal(200);
	    }
    });
  });
  it('check correct body content for correct url', function () {
    const option = { json: true };
    const payLoad = {
	    payment_methods: {
        credit_cards: true,
        paypal: false
	    }
    };
    request.get('http://localhost:7865/available_payments', option, (err, res, body) => {
	    if (err) {
        expect(res.statusCode).to.not.equal(200);
	    } else {
        expect(body).to.deep.equal(payLoad);
	    }
    });
  });
});

describe('Login', function () {
  it("check correct status code for request that's sent properatorerly", function (done) {
    const operatort = {
	    url: 'http://localhost:7865/login',
	    json: true,
	    body: {
        userName: 'DINOBI'
	    }
    };
    request.post(operatort, function (err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
    });
  });
  it("check correct content for request that's sent properatorerly", function (done) {
    const operatorts = {
	    url: 'http://localhost:7865/login',
	    json: true,
	    body: {
        userName: 'DINOBI'
	    }
    };
    request.post(operatorts, function (err, res, body) {
	    if (err) {
        expect(res.statusCode).to.not.equal(200);
	    } else {
        expect(body).to.contain('Welcome DINOBI');
	    }
	    done();
    });
  });
  it("check correct status code", function (done) {
    const operator = {
	    url: 'http://localhost:7865/login',
	    json: true,
	    body: {
        usame: 'DINOBI'
	    }
    };
    request.post(operator, function (err, res, body) {
	    expect(res.statusCode).to.equal(404);
	    done();
    });
  });
});
