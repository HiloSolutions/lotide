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

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};


//false means not a perfect match and true means perfect match
const eqObjects = function(object1, object2) {
  //check if all the same keys are present
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  //check if all keys have the same value
  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    console.log(value1);

    if (Array.isArray(value1) || Array.isArray(value2)) {
      if (!eqArrays([value1], [value2])) {
        return false;
      }
      continue;
    }

    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

//code goes here
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;//modify our function to use the util library's inspect function


  if (eqObjects(actual, expected)) {
    console.log(`${String.fromCodePoint(0x1F7E2)} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return true;
  }
  console.log(`${String.fromCodePoint(0x1F534)} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  return false;
};

//EXPORT
module.exports = assertObjectsEqual;

