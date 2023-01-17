
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

//EXPPORT
module.exports = countOnly;
