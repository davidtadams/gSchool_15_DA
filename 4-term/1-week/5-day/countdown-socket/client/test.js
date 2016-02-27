var socket = io()

socket.emit("echo", "echo")

socket.on("echoed", function (data) {
  console.log(data)
})

socket.on("players", function (players) {
  players.forEach((player) => console.log(player))
})

socket.on("start", function (time) {
  console.log("START! " + time)
})

socket.on("end", function (triggers) {
  console.log(`${triggers.winner.player} WINS!`)
  console.log(triggers)
})
