//IMPORT
const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

//TESTS
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions(""), undefined);