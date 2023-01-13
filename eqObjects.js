const eqArrays = function(arr1, arr2) {
  
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    const element1 = arr1[i];
    const element2 = arr2[i];

    if (element1 !== element2) {
      return false;
    }

    return true;
  }
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
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
      if (!eqArrays([value1], [value2])) {
        return false;
      }
      continue;
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
assertEquals(eqObjects(shirtObject , anotherShirtObject), true); //=>true


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false); //=>true


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "green"] };

assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false); //=> FALSE

const result = eqObjects(multiColorShirtObject , anotherMultiColorShirtObject);
console.log(result); //=>FALSE





