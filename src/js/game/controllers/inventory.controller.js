const InventoryModel = require('../models/inventory.model')

const InventoryController = (function () {
  function InventoryController () {}

  InventoryController.prototype.add = function (item) {
    InventoryModel.add(item)
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
