const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${String.fromCodePoint(0x1F7E2)} Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`${String.fromCodePoint(0x1F534)} Assertion Failed: ${actual} !== ${expected}`);
};

/*
1. Function
2. Takes in two arrays
3. tests whether they are equal
4. returns true or false
*/

//CODE GOES HERE
const eqArrays = function(arr1, arr2) {
  
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    const element1 = arr1[i];
    const element2 = arr2[i];

    if (element1 !== element2) {
      return false;
    }

    return true;
  }
};
//TEST CODE
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => pass
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => pass
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false); // => fail
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => fail
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS