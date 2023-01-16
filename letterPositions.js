const eqArrays = require('./eqArrays');

//test return of equality with the assert Equal argument
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`${String.fromCodePoint(0x1F7E2)} Assertion Passed: ${arr1} === ${arr2}`);
  }
  return console.log(`${String.fromCodePoint(0x1F534)} Assertion Failed: ${arr1} !== ${arr2}`);
};


const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  console.log('letter position',results);
  return results;
};

//TEST
letterPositions('lighthouses');
assertArraysEqual(letterPositions("hello").l, [2,3]);
