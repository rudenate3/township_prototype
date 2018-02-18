// Require pageObject
const pageObject = require('./pageObject')

// Controllers
const foodController = require('./game/controllers/food.controller')
const woodController = require('./game/controllers/wood.controller')

pageObject.huntButton.on('click', foodController.onHuntButtonClicked)
pageObject.gatherSticksButton.on('click', woodController.onGatherSticksButtonClicked)
