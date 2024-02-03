const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber()', () => {
  it('rounds positive integers correctly', () => {
    assert.strictEqual(calculateNumber(1.5, 2.5), 4);
    assert.strictEqual(calculateNumber(12.345, 5.678), 18);
  });

  it('rounds negative integers correctly', () => {
    assert.strictEqual(calculateNumber(-1.5, -2.5), -4);
    assert.strictEqual(calculateNumber(-12.345, -5.678), -18);
  });

  it('rounds decimals correctly', () => {
    assert.strictEqual(calculateNumber(3.14159, 2.71828), 5.86);
    assert.strictEqual(calculateNumber(0.4999, 0.5001), 1);
  });

  it('rounds mixed number types correctly', () => {
    assert.strictEqual(calculateNumber(1.5, 2.71828), 4.22);
    assert.strictEqual(calculateNumber(-3.14159, 5.678), 2.54);
  });

  it('handles special cases', () => {
    assert.strictEqual(calculateNumber(Infinity, Infinity), Infinity);
    assert.strictEqual(calculateNumber(-Infinity, -Infinity), -Infinity);
    assert.strictEqual(calculateNumber(NaN, NaN), NaN);
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('throws an error for non-numeric inputs', () => {
    assert.throws(() => calculateNumber('a', 'b'));
    assert.throws(() => calculateNumber(true, false));
    assert.throws(() => calculateNumber(null, undefined));
  });
});

