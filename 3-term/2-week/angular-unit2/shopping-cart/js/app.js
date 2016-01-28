var app = angular.module("meanTea", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: 'partials/about.html',
      controller: 'AboutController'
    })
    .when('/checkout', {
      templateUrl: 'partials/checkout.html',
      controller: 'CheckoutController'
    })
    .otherwise({
      redirectTo: '/'
    })
});
