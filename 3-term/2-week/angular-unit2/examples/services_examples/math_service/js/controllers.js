angular.module("mathApp").controller("MathController", ["$scope", "mathService", function($scope, mathService){

  $scope.operations = Object.keys(mathService)
  $scope.calculation = "add"

  // these are all binary operations, so we only need two parameters
  $scope.calculate = function(operation, a,b){
    $scope.value = mathService[operation](a,b)
    $scope.data = {}
  }
}])
