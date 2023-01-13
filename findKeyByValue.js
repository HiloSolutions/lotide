const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
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

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"),"drama");//=>function returns dramaa
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70's Show"), undefined);
