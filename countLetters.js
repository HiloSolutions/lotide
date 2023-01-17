const countLetters = function(str) {
  let result = {};

  for (const letter of str) {
    if (letter === " ") {
      continue;
    }

    if (!result[letter]) {
      result[letter] = 0;
    }

    result[letter]++;
  }

  console.log(result);
  return result;
};

module.exports = countLetters;


countLetters('LA');
countLetters('LHL j');
countLetters('');