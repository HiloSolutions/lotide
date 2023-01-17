//IMPORTS
const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');



//TESTS
assertObjectsEqual(eqObjects({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3}), true); // => pass
assertObjectsEqual(eqObjects({a: 1, b: 2, c: 3}, {a: 3, b: 2, c: 1}), false); // => pass
//assertObjectsEqual(eqObjects({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3}), false); // => fail
//assertObjectsEqual(eqObjects({a: 1, b: 2, c: 3}, {a: 3, b: 2, c: 1}), true); // => fail
assertObjectsEqual(eqObjects({a: [1, 2], b: 2, c: 3}, {a: [1, 2], b: 2, c: 3}), true); // => should PASS

//ADDITIONAL TESTING
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject , anotherShirtObject); //=>true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject , longSleeveShirtObject); //=>false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject , anotherMultiColorShirtObject);



//EXPORTS
module.exports = {
  assertObjectsEqual,
  eqObjects
};