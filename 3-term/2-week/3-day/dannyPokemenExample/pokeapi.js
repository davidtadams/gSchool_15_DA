angular.module('d').service('pokeapi', function ($http) {
  var baseUrl = "http://pokeapi.co/"
  var pokemonInfoPath = 'api/v1/pokemon/'
  var pokemonSpritePath = '/api/v1/sprite/'
  var pokemonCache = {}
  var imageCache = {}
  return {
    baseUrl: baseUrl,
    get: function (id) {
      if (pokemonCache[id]) {
        return pokemonCache[id]
      }
      return $http.get(baseUrl+pokemonInfoPath+id)
        .then(function (data) {
          pokemonCache[id] = data
          return data
        })
    },
    getImage: function (id) {
      return this.get(id).then(function (data) {
        if (data.data.sprites && data.data.sprites.length > 0) {
          var resourceUri = data.data.sprites[0].resource_uri
          if (imageCache[resourceUri]) {
            return imageCache[resourceUri]
          }
          return $http.get(baseUrl+resourceUri)
            .then(function (resourceUri) {
              return baseUrl + resourceUri.data.image
            })
        } else {
          return 'https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG';
        }
      })
    }
  }
})
