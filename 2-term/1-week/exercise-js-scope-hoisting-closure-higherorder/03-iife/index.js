// IIFE = Immediately Invoked Function Expression
// https://en.wikipedia.org/wiki/Immediately-invoked_function_expression
// Fix this for loop by converting the for body into an IIFE
// that takes i as an argument

function runner () {
  var callbacks = []
  for (var i=0; i<3; i++) {
    callbacks.push(function () {
      return i
    })
  }
  return callbacks
}

module.exports = runner
