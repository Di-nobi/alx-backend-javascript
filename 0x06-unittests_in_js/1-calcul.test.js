const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('calculateNumber()', function () {
    it('Rounds up a number with the given name (SUM)', function () {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
});

describe('calculateNumber()', function () {
    it('Rounds up a number with the given name (SUBTRACT)', function () {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
});

describe('calculateNumber()', function () {
    it('Rounds up a number with the given name (DIVIDE)', function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
});

describe('calculateNumber()', function () {
    it('Rounds up a number with the given name (DIVIDE)', function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
});