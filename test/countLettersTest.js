const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');

//TESTS
n
assertEqual(countLetters('LHL j'),{L: 2, H: 1, j: 1});
assertEqual(countLetters(''),{});

//EXPORT
module.exports = {
  assertEqual,
  countLetters
};
