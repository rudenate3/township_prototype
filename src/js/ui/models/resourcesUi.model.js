const resourcesUi = require('../../pageObject').resourcesUi
const gameState = require('../../game/controllers/gameState.controller').getInstance()

const ResourcesUiModel = function ResourcesUiModel () {

}

const ResourceRow = function (name, quantity, max, rate) {
  return `<tr>
    <td>${name}</td>
    <td>${quantity}</td>
    <td>${max}</td>
    <td>${rate}</td>
  </tr>`
}

ResourcesUiModel.prototype.redrawResourcesUi = function () {
  let resourcesUiString = ''
  if (gameState.rawMeatUnlocked()) resourcesUiString += ResourceRow('raw-meat')
  resourcesUi.resourcesUiDiv.html(resourcesUiString)
}

module.exports = ResourcesUiModel
