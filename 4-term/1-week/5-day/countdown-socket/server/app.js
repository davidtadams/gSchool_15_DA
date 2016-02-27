var Express = require("express")
var http = require("http")
var SocketIo = require("socket.io")

var app = Express()
var server = http.Server(app)
var io = SocketIo(server)

app.use(Express.static("./client"))


// GAME LOGIC
// var players = []
var triggers = []

var time = 0

function findWinner () {
  return triggers[triggers.length - 1]
}

function findLosers () {
  return triggers.slice(0, triggers.length-1)
}

function endGame () {
  var winner = findWinner()
  var losers = findLosers()
  io.emit("end", {winner, losers})
  triggers = []
}

// SOCKET LOGIC
io.on("connection", function (socket) {
  console.log("You are connected!")
  socket.on("echo", function (data) {
    console.log("Echoing")
    //Send to everyone but initiator
    //  socket.broadcast.emit()
    //Send to only initiator
    //  socket.emit()
    //Send to everybody including initiator
    io.emit("echoed", data + " " + data + "...")
  })

  // socket.on("join", function (name) {
  //   players.push({name, id: socket.id})
  //   io.emit("players", players)
  // })

  socket.on("start", function () {
    time = 10
    io.emit("start", time)
    setTimeout(endGame, time * 1000)
  })

  socket.on("trigger", function (player) {
    var currentTime = new Date().getMilliseconds()
    triggers.push({player, currentTime})
  })
})

server.listen(8080, function () {
  console.log("Listening on port 8080...")
})
