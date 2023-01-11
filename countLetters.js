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
  const lowerCase = sentence.toLowerCase(); //lowercase for comparison (ex. 1*H + 1*h = 2)
  const noSpaces = lowerCase.replace(/ /g,''); //remove spaces
  const onlyLetters = noSpaces.replace(/[^A-Za-z]/g,''); //remove non-letters
  
  //code goes here
  
  //return
  return letterCount;
};


//TESTS
countLetters('Lauren');
countLetters('LHL j');
countLetters('Lauren-is_happy09');