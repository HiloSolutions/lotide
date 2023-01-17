//IMPORT
const assertEquals = require('../assertEqual');
const eqObjects = require('../eqObjects');


//TESTS
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEquals(eqObjects(shirtObject , anotherShirtObject), true); //=>true


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false); //=>true


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "green"] };

assertEquals(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), false); //=> FALSE


//EXPORTS
module.exports = {
  assertEquals,
  eqObjects
};