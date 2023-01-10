//2 array inputs: 1 intake source 1 intake remove items list
//remove unwanted items
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
/*
function takes in 2 inputs and returns a new array
 */
const without = function(sourceArr, removeArr) {
  let arr = [];
  //check contents of source array
  for (let element of sourceArr) {
    //compare to each content of remove ARR
    if (!removeArr.includes(element)) {
      arr.push(element);
    }
  }
  return console.log(arr);
};

//test code
without([1, 2, 3], [1]);  // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(["1", "2", "3"],["1", "2", "3"]); // => []
//test case to ensure that the array is unmodified
assertEqual(eqArrays(without, [1, 2, 3]), false); // => pass