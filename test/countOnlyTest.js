//IMPORT
const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');
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

assertEqual(result1["Jason"], 1); //PASS Jason should appear once
assertEqual(result1["Karima"], undefined); //PASS not in array
assertEqual(result1["Fang"], 2); //PASS fang should show up twice
assertEqual(result1["Agouhanna"], undefined); //pPASS should not be in list