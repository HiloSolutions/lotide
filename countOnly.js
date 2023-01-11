const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${String.fromCodePoint(0x1F7E2)} Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`${String.fromCodePoint(0x1F534)} Assertion Failed: ${actual} !== ${expected}`);
};

/*
1) intakes an array of items(str) and on object (list) of items(keys) with the counts (values) that we need
* INPUT: need a function with two parameters (DONE)
* FOR OUTPUT: since we are returning an object, reports the instances of the elements listed in

2) finds subset of these items (str)
* need to iterate through the object first and stop on any TRUE value
** is that value in the array (truthy)?
*** false: next key
*** true: count how many times does it appear in the array? Push that to OUTPUT

3)returns object containing count of all inputs(n)
*/

const countOnly = function(inventory, itemsNeeded) {
  let countInventory = {};

  //itemsNeeded returns object:  name returns name (ex "jason"): itemsNeeded[name] returns T/F;
  for (let name in itemsNeeded) {
    if (itemsNeeded[name]) { //is the item needed true? We need to look for it in the inventory!
      const nameCount = inventory.filter(item => item === name).length;
      if (nameCount > 0) {
        countInventory[name] = nameCount;
      }
    }
  }
  return countInventory;
};

//TEST
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false
});
console.log(result1);
assertEqual(result1["Jason"], 1); //PASS Jason should appear once
assertEqual(result1["Karima"], undefined); //PASS not in array
assertEqual(result1["Fang"], 2); //PASS fang should show up twice
assertEqual(result1["Agouhanna"], undefined); //pPASS should not be in list