//Takes in two arrays to test equality
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

//test return of equality with the assert Equal argument
const assertArraysEqual = function(eqArrays, expected) {
  if (eqArrays === expected) {
    return console.log(`${String.fromCodePoint(0x1F7E2)} Assertion Passed: ${eqArrays} === ${expected}`);
  }
  return console.log(`${String.fromCodePoint(0x1F534)} Assertion Failed: ${eqArrays} !== ${expected}`);
};

const flatten = function(arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) { //Loop through each item
    if (Array.isArray(arr[i])) { //is it an array?
      flattened = flattened.concat(flatten(arr[i]));// true - merge current array to empty array then call the function again. This will keep going until the element is no longer an array
    } else {
      flattened.push(arr[i]); //FALSE we can push the element to our new array as is
    }
  }
  console.log(flattened);
  return flattened;
};

//TEST

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), true); // => pass
