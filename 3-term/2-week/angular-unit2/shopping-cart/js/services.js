app.service('CatalogData', function($http) {
  return {
    getAllItems: function() {
      return $http.get('/data/catalog.json')
        .then(function(data) {
          return data
        })
    }
  }
})
