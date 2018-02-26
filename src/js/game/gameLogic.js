const ticks = 5
let gameActive = false

module.exports.startGame = function () {
  gameActive = true
  setInterval(() => {
    if (gameActive) {
      console.log('tick')
    } else {
    }
  }, 1000 / ticks)
}
