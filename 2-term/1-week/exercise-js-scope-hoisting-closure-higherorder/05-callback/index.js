// Fix this async function by adding a callback
// http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
// The function MUST remain async with setImmediate
// And you must consume the value 1337 using a callback

function doLater () {
  setImmediate(function () {
    return 1337
  })
}

module.exports = doLater
