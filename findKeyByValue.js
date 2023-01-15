const assertEquals = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const eqObjects = function(object1, object2) {
  //check if all the same keys are present
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  const eqArrays = function(arr1, arr2) {
  
    if (arr1.length !== arr2.length) {
      return false;
    }
    
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  
    return true;
  };
  
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
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEquals(eqObjects(shirtObject , anotherShirtObject), false); //=>true


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false); //=>true


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "green"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false); //=> true

assertEquals(findKeyByValue(bestTVShowsByGenre, "The Wire"),"drama");//=>function returns dramaa
assertEquals(findKeyByValue(bestTVShowsByGenre, "That '70's Show"), undefined);
