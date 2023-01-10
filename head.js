//function returns first item in the array
const head = function(array) {
  return array[0];
};

//write test cases for various scenarios.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${String.fromCodePoint(0x1F7E2)} Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`${String.fromCodePoint(0x1F534)} Assertion Failed: ${actual} !== ${expected}`);
};


// TEST CODE
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);