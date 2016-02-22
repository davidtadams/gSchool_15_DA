angular.module('realEstate')
  .controller('HomeController', HomeController)
  .controller('DetailController', DetailController);

HomeController.$inject = ['$scope', 'RealEstateService'];

function HomeController($scope, RealEstateService) {
  console.log("Hello from Home Controller")
  RealEstateService.getHomes()
    .then(function(homes){
      $scope.homes = homes;
    });
}

DetailController.$inject = ['$scope', 'RealEstateService', '$stateParams', 'BidService']

function DetailController($scope, RealEstateService, $stateParams, BidService) {
  RealEstateService.getHome($stateParams.id)
    .then((home) => {
      $scope.home = home
    })
  $scope.bids = []
  BidService.on(function (data) {
    $scope.bids.push(data)
    console.log($scope.bids)
    $scope.$apply()
  })
}
