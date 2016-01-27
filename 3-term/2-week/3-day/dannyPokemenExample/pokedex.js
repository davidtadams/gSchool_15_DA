angular.module('d').directive('pokedex', function() {
  return {
    controller: function ($scope) {
      $scope.pokemons = [1,2,3,4,5,6,7,8,9,10,11,12,13,150,151]
    },
    restrict: 'E',
    templateUrl: 'pokedex.html'
  }
})
