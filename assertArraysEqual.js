//Takes in two arrays to test equality
const eqArrays = function(arrOne, arrTwo) {
  return JSON.stringify(arrOne) === JSON.stringify(arrTwo);
};

//test return of equality with the assert Equal argument
const assertEqual = function(eqArrays, expected) {
  if (eqArrays === expected) {
    return console.log(`${String.fromCodePoint(0x1F7E2)} Assertion Passed: ${eqArrays} === ${expected}`);
  }
  return console.log(`${String.fromCodePoint(0x1F534)} Assertion Failed: ${eqArrays} !== ${expected}`);
};

//TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false); // => fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS