
//CODE GOES HERE

const findKey = (obj, callback) => {

  const keys = Object.keys(obj);

  for (const key of keys) {
    const value = obj[key];

    if (callback(value)) {
      return key;
    }

  }

};

//EXPORT
module.exports = findKey;


