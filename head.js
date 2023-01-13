//function returns first item in the array
const head = function(array) {
  return array[0];
};

//write test cases for various scenarios.
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};


// TEST CODE
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);