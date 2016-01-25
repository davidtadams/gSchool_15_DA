angular.module('firstFormValidation', []).controller('mainController', function($scope) {
  $scope.submitForm = function(isValid) {
  $scope.users = $scope.users || []
    event.preventDefault()
    if (isValid) {
      $scope.users.push($scope.user)
      $scope.user = {}
      $scope.userForm.$setPristine()
    }
  };
});