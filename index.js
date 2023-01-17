const head = require('./head');//DONE
const tail = require('./tail');//DONE
const middle = require('./middle');//DONE
const assertArraysEqual = require('./assertArraysEqual');//DONE
const assertEqual = require('./assertEqual');//DONE
const assertObjectsEqual = require('./assertObjectsEqual');//DONE
const closures = require('./closures');//NOT NEEDED
const countLetters = require('./countLetters');//DONE
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');//DONE
const eqObjects = require('./eqObjects');//DONE
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');//done
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  closures,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey: findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without
};