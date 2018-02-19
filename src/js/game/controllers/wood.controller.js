const WoodController = (function () {
  function WoodController () {}

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
