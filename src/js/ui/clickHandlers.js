// Require pageObject buttons
const pageObjectButtons = require('./pageObject').buttons

// Controllers
const foodController = require('../game/controllers/food.controller').getInstance()
const woodController = require('../game/controllers/wood.controller').getInstance()

const createClickHandler = function (button, callback) {
  button.on('click', callback)
}

createClickHandler(pageObjectButtons.huntButton, foodController.onHuntButtonClicked)
createClickHandler(pageObjectButtons.gatherSticksButton, woodController.onGatherSticksButtonClicked)
