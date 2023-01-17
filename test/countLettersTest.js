const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');

//TESTS

assertEqual(countLetters('LHL j').L,2);
assertEqual(countLetters('LHL j').H,1);
assertEqual(countLetters('LHL j').j,1);
assertEqual(countLetters('').L,undefined);


//EXPORT

