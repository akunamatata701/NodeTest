const assert = require('assert');
const equals = require('array-equal');
const matrix = require('./../matrix.js');

/* eslint-env mocha */
describe('Matrix Test', () => {
  it('Rotate', () => {
    const original = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];
    const result = matrix.rotate(original);
    for (let i = 0; i < result.length; i += 1) {
      assert.equal(equals(result[i], expected[i]), true);
    }
  });
});
