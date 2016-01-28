app.controller('HomeController', function($scope, CatalogData) {
  CatalogData.getAllItems()
    .then(function(data) {
      $scope.teas = data.data
    })



});

app.controller('AboutController', function($scope) {

});

app.controller('CheckoutController', function($scope) {

});
