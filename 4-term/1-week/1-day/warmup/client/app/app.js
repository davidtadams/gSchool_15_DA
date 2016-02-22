angular.module("realEstate", ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home')
    $stateProvider.state('home', {
      templateUrl: 'templates/home.html',
      controller: 'HomeController',
      url: '/home'
    })
  })
