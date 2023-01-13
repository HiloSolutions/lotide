const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${String.fromCodePoint(0x1F7E2)} Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`${String.fromCodePoint(0x1F534)} Assertion Failed: ${actual} !== ${expected}`);
};



//CODE GOES HERE
const findKey = (obj, callback) => {
  for (const item in obj) {
    if (callback(obj[item])) {
      return true;
    }
  }
  return true;
};



//call the anonymous function
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

//TEST

assertEqual(findKey(),true);// => pass
assertEqual(findKey(),false);// => fail