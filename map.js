//Takes in two arrays to test equality
const eqArrays = function(arrOne, arrTwo) {
  return JSON.stringify(arrOne) === JSON.stringify(arrTwo);
};

const assertArraysEqual = function(eqArrays, expected) {
  if (eqArrays === expected) {
    return console.log(`${String.fromCodePoint(0x1F7E2)} Assertion Passed: ${eqArrays} === ${expected}`);
  }
  return console.log(`${String.fromCodePoint(0x1F534)} Assertion Failed: ${eqArrays} !== ${expected}`);
};

//MAP FUNCTION
const map = function(array, callback) {
  const results = []; //the new array

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

//TEST
assertArraysEqual(eqArrays(map, map), true);//=>PASS
assertArraysEqual(eqArrays(words, map), false);//=>PASS
assertArraysEqual(eqArrays(words, results1), false);//=>PASS