//take in array and callback
const takeUntil = (arr, callback) => {
  const result = [];

  for (const item of arr) {
  
    if (callback(item)) {
      return result;
    }

    result.push(item);
  }

  return result;
};

const test = x => x < 0;
//INVOKE
const data1 = [1, -2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, test);
console.log(results1); //[ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);//[ 'I\'ve', 'been', 'to', 'Hollywood' ]
