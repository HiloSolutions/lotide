

//intakes an object AND a value
const findKeyByValue = function(showsList, showToFind) {
  for (const show in showsList) {
    if (showsList[show] === showToFind) {
      console.log(show);
      return show;
    }
  }
};

module.exports = findKeyByValue;