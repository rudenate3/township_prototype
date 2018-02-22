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
  if (!this.resources[key]) this.resources[key] = true
}
module.exports = GameStateModel
