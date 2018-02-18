const gameState = require('../../gameState')

const inventory = {
  add: (item, quantity) => {
    gameState.toggleResourcesTrue(item)
    inventory[item] = inventory[item] || 0
    inventory[item] += quantity
  }
}

module.exports = inventory
