const InventoryModel = require('../models/inventory.model')

const InventoryController = (function () {
  function InventoryController () {
    this.inventoryModel = new InventoryModel()
  }

  InventoryController.prototype.add = function (item) {
    this.inventoryModel.add(item)
  }
  var instance
  return {
    getInstance: function () {
      if (instance == null) {
        instance = new InventoryController()
        instance.constructor = null
      }
      return instance
    }
  }
})()

module.exports = InventoryController
