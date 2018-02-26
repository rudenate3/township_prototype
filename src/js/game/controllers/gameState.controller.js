const GameStateModel = require('../models/gameState.model')

const GameState = (function () {
  function GameState () {
    this.gameState = new GameStateModel()
  }

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
