const InventoryModel = function InventoryModel () {}

InventoryModel.prototype.add = (item) => {
  this[item.name] = this[item.name] || 0
  this[item.name] += item.quantity
  console.log(this) // TODO Remove
}

module.exports = InventoryModel
