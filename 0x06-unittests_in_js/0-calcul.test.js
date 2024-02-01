const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber()', function () {
  it('tests if a number is rounded', function () {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });
});

describe('calculateNumber()', function () {
    it('test if number is rounded', function () {
        assert.strictEqual(calculateNumber(2, 3.2), 5);
    });
});

describe('calculateNumber()', function () {
    it('test if number is rounded', function () {
        assert.strictEqual(calculateNumber(-1, -2), -3);
    });
});

describe('calculateNumber()', function () {
    it('test if number is rounded', function () {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });
});
