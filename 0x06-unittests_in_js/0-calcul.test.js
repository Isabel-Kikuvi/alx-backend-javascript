const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('calculateNumber', () => {
    it('rounding of a', () => {
        assert.equal(calculateNumber(16.78, 1), 18);
        assert.equal(calculateNumber(3.2, 0), 3);
        assert.equal(calculateNumber(2.5, 2), 5);
    });

    it('rounding of b', () => {
        assert.equal(calculateNumber(1, 15.68), 17);
        assert.equal(calculateNumber(0, 5.2), 5);
        assert.equal(calculateNumber(2, 1.5), 4);
    });

    it('suming of a and b', () => {
        assert.equal(calculateNumber(13.78, 2.5), 16);
        assert.equal(calculateNumber(1.2, 0.2), 1);
        assert.equal(calculateNumber(3.5, 2.7), 6);
    });
})
