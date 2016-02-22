angular.module('realEstate')
  .controller('HomeController', HomeController)

HomeController.$inject = ['$scope', 'RealEstateService']

function HomeController($scope, RealEstateService) {
  $scope.homes = RealEstateService.getHomes() //.then(function(homes) {
  // do this if service returns a promise, which it should do
  //   $scope.homes = homes
  // })
}
