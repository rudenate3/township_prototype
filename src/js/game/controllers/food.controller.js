const inventoryController = require('../controllers/inventory.controller').getInstance()

const FoodController = (function () {
  function FoodController () {}

  // Callbacks
  FoodController.prototype.onHuntButtonClicked = () => {
    inventoryController.add({
      'name': 'rawMeat',
      'quantity': 1
    })
  }

  var instance
  return {
    getInstance: function () {
      if (instance == null) {
        instance = new FoodController()
        instance.constructor = null
      }
      return instance
    }
  }
})()

module.exports = FoodController
