const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${String.fromCodePoint(0x1F7E2)} Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`${String.fromCodePoint(0x1F534)} Assertion Failed: ${actual} !== ${expected}`);
};


//takes in a sentence (str)
//return count of all letters in an object
const countLetters = function(sentence) {
  let letterCount = {};

  for (let letter of sentence) {
    if (letter !== " ") {
      if (letterCount[letter]) {
        //defined
        letterCount[letter]++;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  console.log(letterCount);
  return letterCount;
};


//TESTS
countLetters('Lauren');
countLetters('LHl j');
countLetters('Lauren-is_happy09');