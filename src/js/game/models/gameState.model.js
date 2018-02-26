const GameStateModel = function GameStateModel () {
  return {
    resources: {
      rawMeat: false,
      sticks: false,
      stone: false,
      cookedMeat: false
    },
    tech: {
      fire: false,
      cookedMeat: false
    }
  }
}

GameStateModel.prototype.toggleResourcesTrue = key => {
  console.log(this)
  if (!this.resources[key]) this.resources[key] = true
}

GameStateModel.prototype.isUnlocked = gameStateObject => {
  console.log(this[gameStateObject.category[gameStateObject.item]])
  return this[gameStateObject.category[gameStateObject.item]]
}

module.exports = GameStateModel
