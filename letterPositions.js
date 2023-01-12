//Takes in two arrays to test equality
const eqArrays = function(arrOne, arrTwo) {
  return JSON.stringify(arrOne) === JSON.stringify(arrTwo);
};

//test return of equality with the assert Equal argument
const assertArraysEqual = function(eqArrays, expected) {
  if (eqArrays === expected) {
    return console.log(`${String.fromCodePoint(0x1F7E2)} Assertion Passed: ${eqArrays} === ${expected}`);
  }
  return console.log(`${String.fromCodePoint(0x1F534)} Assertion Failed: ${eqArrays} !== ${expected}`);
};


const letterPositions = function(sentence) {
  let positions = {};
  // iterate through the sentence
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      const letter = sentence[i];
      if (positions[letter]) {
        positions[letter].push(i);
      } else {
        positions[letter] = [i];
      }
    }
  }
  console.log(positions);
};

//TEST
letterPositions('lighthouses');
assertArraysEqual(letterPositions("hello").e, [1]);