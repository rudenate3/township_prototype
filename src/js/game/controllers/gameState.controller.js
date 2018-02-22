const GameState = (function () {
  function GameState () {}

  var instance
  return {
    getInstance: function () {
      if (instance == null) {
        instance = new GameState()
        instance.constructor = null
      }
      return instance
    }
  }
})()

module.exports = GameState
