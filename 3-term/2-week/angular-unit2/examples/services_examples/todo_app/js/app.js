angular.module("todoApp", ["ngRoute"]).config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'templates/todos.html',
    controller: 'TodoController'
  })
})

