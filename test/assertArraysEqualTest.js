//IMPORT
const assertArraysEqual = require('../assertArraysEqual.js');
const eqArrays = require('../eqArrays.js');

//TEST CODE

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => pass
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => pass
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => pass
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => pass
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

//EXPORT
module.exports = assertArraysEqual;
module.exports = eqArrays;