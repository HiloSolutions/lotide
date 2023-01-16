//IMPORT
const middle = require('../middle.js');
const assertArraysEqual = require('../assertArraysEqual.js');
const eqArrays = require('../eqArrays.js');


//TEST
// middle([1]); // => []
// middle([1, 2]); // => []
// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]
// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

assertArraysEqual(eqArrays(middle, [1, 2, 3]), false); // => pass

//EXPORT
module.exports = middle;
module.exports = assertArraysEqual;
module.exports = eqArrays;
