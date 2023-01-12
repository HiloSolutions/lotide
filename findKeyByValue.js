const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${String.fromCodePoint(0x1F7E2)} Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`${String.fromCodePoint(0x1F534)} Assertion Failed: ${actual} !== ${expected}`);
};

//intakes an object AND a value
const findKeyByValue = function(showsList, showToFind) {
  for (const show in showsList) {
    if (showsList[show] === showToFind) {
      console.log(show);
      return show;
    }
  }
};

//scan object
//return first key which contains the given value

//TEST
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"),"drama");//=>function returns dramaa
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70's Show"), undefined)
