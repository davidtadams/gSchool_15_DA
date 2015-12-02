var items = ["cereal", "lightbulbs", "paper towels"]
var now = new Date
var utils = {
  encode: function (string) {
    return string.toUpperCase()
  },
  decode: function (string) {
    return string.toLowerCase()
  }
}
var encode = utils.encode
var decode = utils.encode
var flipIt = function (string) {
  return string.split('').reverse().join('')
}
