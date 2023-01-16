//IMPORT
const head = require('../head.js');
const assertEqual = require('../assertEqual.js');

//BODY
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);

//EXPORT
module.exports = head;
module.exports = assertEqual;