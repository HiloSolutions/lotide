const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

// TEST CODE
assertEqual("Bootcamp", "Bootcamp"); //=>pass
assertEqual(2, 1); //=> fail