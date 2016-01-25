angular.module("mathApp",["ngRoute"]).config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'templates/math.html',
    controller: "MathController"
  })
})

