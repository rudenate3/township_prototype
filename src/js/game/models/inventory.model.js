const gameState = require('../../gameState')

const InventoryModel = function InventoryModel () {}

InventoryModel.prototype.add = (item) => {
  gameState.toggleResourcesTrue(item)
  this[item.name] = this[item.name] || 0
  this[item.name] += item.quantity
}

module.exports = InventoryModel
