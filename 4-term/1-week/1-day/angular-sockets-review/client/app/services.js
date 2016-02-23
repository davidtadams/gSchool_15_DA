angular.module('realEstate')
  .factory('RealEstateService', RealEstateService)
  .factory('BidService', BidService);

RealEstateService.$inject = ['$http']

function RealEstateService($http) {
  console.log("Hello from Real Estate Service")
  return {
    getHomes: function() {
      return $http.get('/api/homes')
        .then((response) => response.data);
    },
    getHome: function (id) {
      return this.getHomes()
        .then((homes) => homes.find((home) => parseInt(home.id) === parseInt(id)))
    }
  }
}

BidService.$inject = ['$stateParams']

function BidService ($stateParams) {
  var socket = io()
  var callbacks = []
  console.log($stateParams.id);
  socket.on('bid', function (data) {
    callbacks.forEach(function (callback) {
      var amount, average;
      data.body.forEach(function (house, index) {
        if (house.id == $stateParams.id) {
          amount = house.currentBid;
          average = data.average[house.id].average
        }
      })
      callback({amount: amount, time: data.time, average: average})
    })
  })
  return {
    on: function (callback) {
      callbacks.push(callback)
    }
  }
}
