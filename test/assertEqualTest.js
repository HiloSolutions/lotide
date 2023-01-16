// IMPORT
const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Bootcamp", "Bootcamp"); //=>pass
assertEqual(2, 1); //=> fail

//EXPORT
module.exports = assertEqual;