const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');



//TEST
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

assertArraysEqual(eqArrays(map, map), true);//=>PASS
assertArraysEqual(eqArrays(words, map), false);//=>PASS
assertArraysEqual(eqArrays(words, results1), false);//=>PASS