const gameState = {
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

gameState.toggleResourcesTrue = key => {
  if (!gameState.resources[key]) gameState.resources[key] = true
}

module.exports = gameState
