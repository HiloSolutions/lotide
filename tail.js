//funtion to return the tail of the array. Function does not modify the array
const tail = function(arr) {
  return arr.slice(1); //will return shallow portion of array excluding head
};

//EXPORT
module.exports = tail;
