var app = angular.module('CommentsApp', ['ngRoute'])

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/comments.html',
        controller: 'CommentsController'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutController'
      }).
      otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true)
  }]);
