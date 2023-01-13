const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};


//takes in a sentence (str)
//return count of all letters in an object
const countLetters = function(str) {
  let result = {};

  for (const letter of str) {
    if (letter === " ") {
      continue;
    }

    if (!result[letter]) {
      result[letter] = 0;
    }

    result[letter]++;
  }
  console.log(result);
};



//TESTS
countLetters('Lauren');
countLetters('LHl j');
countLetters('Lauren-is_happy09');