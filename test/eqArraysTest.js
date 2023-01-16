//IMPORTS
const assertEqual = require('../assertEqual.js');
const eqArrays = require('../eqArrays.js');


//BODY
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

//EXPORTS
module.exports = eqArrays;
module.exports = assertEqual;