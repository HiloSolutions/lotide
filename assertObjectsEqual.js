//IMPORT
const eqObjects = require('./eqObjects');

//CODE
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;//modify our function to use the util library's inspect function


  if (eqObjects(actual, expected)) {
    console.log(`${String.fromCodePoint(0x1F7E2)} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return true;
  }
  console.log(`${String.fromCodePoint(0x1F534)} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  return false;
};

//EXPORT
module.exports = assertObjectsEqual;

