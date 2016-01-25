var app = angular.module("firstScope",[])


app.controller('ParentController', function($rootScope, $scope) {
  $rootScope.info = {fact:"awesome!"}
});

app.controller('ChildController', function($rootScope, $scope) {});