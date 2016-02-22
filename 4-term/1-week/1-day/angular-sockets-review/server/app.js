var Express = require("express")
var Socket = require("socket.io")
var http = require("http")

var app = Express()
var server = http.Server(app)
var io = Socket(server)

io.on("connection", function (socket) {
  function createBid () {
    socket.emit("bid", {
      amount: Math.random() * 120000 + 400000,
      time: new Date()
    })
    setTimeout(createBid, Math.random() * 5000 + 5000)
  }
  createBid()
})

app.use(Express.static("../client"))

app.get('/api/homes', function (request, response) {
  response.json([{
      id: 1,
      address: "123 Sesame St",
      photoURL: "http://photos3.zillowstatic.com/p_c/IS5uam958t2d1z0000000000.jpg",
      beds: 3,
      baths: 1,
      sqfeet: 1000
    }, {
      id: 1000,
      address: "2740 N Clay St",
      photoURL: "http://photos3.zillowstatic.com/p_h/IS9d0a1r37jtyq1000000000.jpg",
      beds: 3,
      baths: 2,
      sqfeet: 1000
    }, {
      id: 202,
      address: "3238 Quivas St",
      photoURL: "http://photos3.zillowstatic.com/p_h/IS5mse54sm7fjd1000000000.jpg",
      beds: 3,
      baths: 2,
      sqfeet: 1500
    }])
})

server.listen(8080, function () {
  console.log("listening on 8080")
})
