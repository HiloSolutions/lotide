const eqArrays = function(arrOne, arrTwo) {
  return (JSON.stringify(arrOne) === JSON.stringify(arrTwo));
};

const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F7E2)} Assertion Passed: ${actual} === ${expected}`);
    return true;
  }
  console.log(`${String.fromCodePoint(0x1F534)} Assertion Failed: ${actual} !== ${expected}`);
  return false;
};



//false means not a perfect match and true means perfect match
const eqObjects = function(object1, object2) {
  //check if all the same keys are present
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  //check if all keys have the same value
  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) || Array.isArray(value2)) {
      if (assertEquals(eqArrays([value1], [value2]),false)) {
        return false;
      }
    }

    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

//test
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEquals(eqObjects(shirtObject , anotherShirtObject), true); //=>true


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false); //=>true


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "green"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false); //=> true





