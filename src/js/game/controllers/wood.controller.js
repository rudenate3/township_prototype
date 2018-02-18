const inventory = require('./inventory.controller')

module.exports.onGatherSticksButtonClicked = () => {
  console.log('clicked')
  inventory.add('sticks', 1)
}
