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
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

//take in an array
const middle = function(array) {
  let middle = [];
  if (array.length > 2 && array.length % 2 === 0) {
    middle.push(array[array.length / 2 - 1]);
    middle.push(array[array.length / 2 + 1]);
  }
  if (array.length > 2 && array.length % 2 !== 0) {
    let middleIndex = array[Math.round((array.length - 1) / 2)];
    middle.push(array[middleIndex]);
  }
  return console.log(middle);
};
//find middle elements
//EDGE: Arrays with 1 or 2 elements return empty array
//EDGE: Arrays with odd elements return 1 element
//EDGE: Arrays with even elements return 2 elements
//return middle elements in new array

//TEST
middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
assertEqual(eqArrays(middle, [1, 2, 3]), false); // => pass
