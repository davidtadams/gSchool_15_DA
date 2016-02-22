var Express = require("express")
var Socket = require("socket.io")
var http = require("http")

var app = Express()
var server = http.createServer(app)
var io = Socket(server)

app.use(Express.static("../client"))

server.listen(8080, function() {
  console.log('listening on 8080');
})
