//Without modifying the function runner or module.exports
// get it to return "outer"

function runner () {
  return outer
}

module.exports = runner
