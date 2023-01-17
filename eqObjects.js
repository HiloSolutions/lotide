const eqArrays = require('./eqArrays');


//function
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
      if (!eqArrays(value1,value2)) {
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

//EXPORTS

module.exports = eqObjects;