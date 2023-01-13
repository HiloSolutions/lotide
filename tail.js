//funtion to return the tail of the array. Function does not modify the array
const tail = function(arr) {
  return arr.slice(1); //will return shallow portion of array excluding head
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: ensure that the original array is not modified
const original = ["Hello", "Lighthouse", "Labs"];
tail(original);
assertEqual(original.length, 3);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: edge cases
const oneElementInArray = tail([1]);
assertEqual(oneElementInArray.length, 0);

const emptyArray = tail([]);
assertEqual(emptyArray.length, 0);
