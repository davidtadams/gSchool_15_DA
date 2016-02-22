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

BidService.$inject = []

function BidService () {
  var socket = io()
  var callbacks = []
  socket.on('bid', function (data) {
    callbacks.forEach(function (callback) {
      callback(data)
    })
  })
  return {
    on: function (callback) {
      callbacks.push(callback)
    }
  }
}
