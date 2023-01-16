//FUNCTION
const middle = function(array) {
  let middle = [];
  if (array.length > 2 && array.length % 2 === 0) {
    middle.push(array[array.length / 2 - 1]);
    middle.push(array[array.length / 2 + 1]);
  }
  if (array.length > 2 && array.length % 2 !== 0) {
    let middleIndex = array[Math.round((array.length - 1) / 2)];
    middle.push(array[middleIndex]);
  }
  return console.log(middle);
};

//EXPORT
module.exports = middle;