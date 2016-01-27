angular.module('d').directive('pokemon', function () {
  return {
    controller: function ($scope, pokeapi) {
      pokeapi.get($scope.id)
      .then(function (data) {
        $scope.data = data.data
      })
      pokeapi.getImage($scope.id)
      .then(function (resourceUri) {
        $scope.spriteUri = resourceUri;
      })
    },
    restrict: 'E',
    scope: {
      id: '='
    },
    templateUrl: 'pokemon.html'
  }
})
