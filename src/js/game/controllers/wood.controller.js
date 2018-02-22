const inventoryController = require('../controllers/inventory.controller').getInstance()

const WoodController = (function () {
  function WoodController () {}

  WoodController.prototype.onGatherSticksButtonClicked = () => {
    inventoryController.add({
      'name': 'sticks',
      'quantity': 1
    })
  }

  var instance
  return {
    getInstance: function () {
      if (instance == null) {
        instance = new WoodController()
        instance.constructor = null
      }
      return instance
    }
  }
})()

module.exports = WoodController
