const chai = require('chai');
const calculateNumber = require('./2-calcul_chai.js')
const expect = chai.expect;

describe('calculateNumber()', function () {
    it('Tests SUM with chai', function () {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
});

describe('calculateNumber()', function () {
    it('Tests SUBTRACT with chai', function () {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
});

describe('calculateNumber()', function () {
    it('Tests DIVIDE with chai', function () {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
});
describe('calculateNumber()', function () {
    it('Tests DIVIDE with chai', function () {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});
