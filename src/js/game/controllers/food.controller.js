const inventory = require('./inventory.controller');

module.exports.onHuntButtonClicked = () => {
  console.log('clicked')
  inventory.add('rawMeat', 1);
}