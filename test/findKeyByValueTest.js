//IMPORT
const assertEquals = require('../assertEqual');
const eqObjects = require('../eqObjects');
const findKeyByValue = require('../findKeyByValue');


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


