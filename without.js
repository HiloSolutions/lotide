//2 array inputs: 1 intake source 1 intake remove items list
//remove unwanted items
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
/*
function takes in 2 inputs and returns a new array
 */

const without = function(sourceArr, removeArr) {
  let resultArray = [];
  //check contents of source array
  sourceArr.forEach((element) => {
    //compare to each content of remove ARR
    if (!removeArr.includes(element)) {
      resultArray.push(element);
    }
  });
  return resultArray;
};

//test code
without([1, 2, 3], [1]);  // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(["1", "2", "3"],["1", "2", "3"]); // => []
//test case to ensure that the array is unmodified
assertArraysEqual(eqArrays(without, [1, 2, 3]), false); // => pass