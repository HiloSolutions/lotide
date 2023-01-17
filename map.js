
//MAP FUNCTION
const map = function(array, callback) {
  const results = []; //the new array

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;

