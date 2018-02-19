const FoodController = (function () {
  function FoodController () {}

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
