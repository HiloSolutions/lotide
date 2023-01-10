const assertEqual = function(actual, expected) {
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
const eqArrays = function(arrOne, arrTwo) {
  return (JSON.stringify(arrOne) === JSON.stringify(arrTwo));
};
//TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false); // => fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS