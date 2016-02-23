var Express = require("express")
var Socket = require("socket.io")
var http = require("http")
var unirest = require('unirest')
var db = require('monk')('localhost/realState')

var app = Express()
var server = http.Server(app)
var io = Socket(server)

// TODO: practice with itunes api - https://itunes.apple.com/search?term=u2

function reduceFindAverage(houses) {
  var list = houses.reduce(function (houseIndex, house, i, arr) {
    houseIndex[house.id] = houseIndex[house.id] || {id: house.id, bids: [], average: 0 }
    houseIndex[house.id].bids.push(house.currentBid);
    var sum = 0;
    for (var i = 0; i < houseIndex[house.id].bids.length; i++) {
      sum += houseIndex[house.id].bids[i]
    }
    houseIndex[house.id].average = sum/houseIndex[house.id].bids.length
    return houseIndex
  }, {});
  return list
}

function findAverage(houses) {
  var houseIndex = {};
  for (var i = 0; i < houses.length; i++) {
    var id = houses[i].id;
    if (!houseIndex[id]) {
      houseIndex[id] = {id: id, bids: [], average: 0 }
    }
    houseIndex[id].bids.push(houses[i].currentBid);
    var sum = 0;
    var numberOfBids = houseIndex[id].bids.length;
    for (var j = 0 ; j < numberOfBids; j++) {
      sum += houseIndex[id].bids[j]
    }
    houseIndex[id].average = sum/numberOfBids;
  }
  return houseIndex;
}

io.on("connection", function (socket) {
  setInterval(function () {
    unirest.get('https://still-journey-81768.herokuapp.com/')
      .end(function (data) {
        db.get('houses').find().then(function (houses) {
          // var average = reduceFindAverage(houses);
          var average = findAverage(houses);
          socket.emit("bid", {
            body: data.body,
            average: average,
            time: new Date()
          })
        })
      })
  }, 3000)
})

app.use(Express.static("./client"))

app.get('/api/homes', function (request, response) {
  unirest.get('https://still-journey-81768.herokuapp.com/')
    .end(function (data) {
      Promise.all(
        data.body.map(function (house) {
          return db.get('houses').insert(house)
        })
      ).then(function (result) {
        response.json(data.body)
      })
    })
})

server.listen(8080, function () {
  console.log("listening on 8080")
})
