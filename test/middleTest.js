//IMPORT
const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("Returns [2] when given [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]),[2]);
  });
  it("Returns [] when given [1]", () => {
    assert.deepEqual(middle([1]),[]);
  });
  it("Returns [] when given []", () => {
    assert.deepEqual(middle([]),[]);
  });
  it("Returns [3] when given [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]),[3]);
  });
  it("Returns [2,3] when given [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  });
});

//TEST
// middle([1]); // => []
// middle([1, 2]); // => []
// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]
// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

//assertArraysEqual(eqArrays(middle, [1, 2, 3]), false); // => pass

//EXPORT
