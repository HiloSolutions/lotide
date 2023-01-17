const assert = require('chai').assert;
const head = require('../head.js');

describe("#head", () => {
  it("(headTest) returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1,2,3]),1);
  });
  it("(headTest) returns 3 for [3]", () => {
    assert.strictEqual(head(['3']),'3');
  });
  it("(headTest) returns undefined for []", () => {
    assert.strictEqual(head([]),undefined);
  });
});
