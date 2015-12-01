// There is a 1 letter typo in this file.\
// Fix it by only changing 1 character!
var a = 'correct'

function runner () {
  return a
}

function changeBToWrong (b) {
  a = 'wrong'
  return b
}

module.exports = runner

changeBToWrong('hi')
