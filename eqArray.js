const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
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
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};
//TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false); // => fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS