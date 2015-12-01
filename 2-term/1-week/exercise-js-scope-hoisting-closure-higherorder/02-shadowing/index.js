// Without touching module.exports or hackSecret,
// Can you think of a way to hide your secret?
// Make sure that the secret remains "butts"
// and checkSecret checks against "secret"

var secret = 'butts'

function checkSecret () {
  if (secret === 'butts') {
    return true
  } else {
    return false;
  }
}

function hackSecret () {
  if (secret === 'butts') {
    return 'hacked'
  } else {
    return 'not hacked'
  }
}

module.exports = {
  checkSecret: checkSecret,
  hackSecret: hackSecret
}
