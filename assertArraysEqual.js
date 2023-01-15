//Takes in two arrays to test equality
const eqArrays = function(arr1, arr2) {
  
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

//test return of equality with the assert Equal argument
const assertArraysEqual = function(eqArrays, expected) {
  if (eqArrays === expected) {
    return console.log(`${String.fromCodePoint(0x1F7E2)} Assertion Passed: ${eqArrays} === ${expected}`);
  }
  return console.log(`${String.fromCodePoint(0x1F534)} Assertion Failed: ${eqArrays} !== ${expected}`);
};

//TEST CODE

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => pass
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false); // => fail
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => pass
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => fail
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS