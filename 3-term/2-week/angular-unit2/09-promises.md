# Deferreds and Promises

In jQuery you saw promises often.  The most common use case was an ajax call.  For example, you might have some code like this in jQuery:

```js
$.get("/puppies").done(function() {
  // do something here
}).fail(function() {
  // do something here
});
```

The object returned from the `$.get` method is jQuery's version of a promise.  A promise is an object that represents an action that is being executed asynchronously.  The promise can either be fulfilled (the asynchronous action completed successfully) or rejected (the asychronous action failed for some reason).  In the example above, if the ajax request to get puppies succeeds, the function specified by done will be called, otherwise, the fail function will be called.

So what is the advantage of a promise over a plain old callback? Well, you can think of a promise as something like a callback, but the great advantage of the promises is that we can decouple the actions that need to be taken after some asynchronous task.  In other words, a promise allows the implementer to chain methods together in a flat, more readable way.

Promises are native to the browser.  The implementation for promises in the browser is not 100% complete, but progress is being made. Take a look at the [MDN docs for promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

**EXERCISE**: What does Promise.all do?  When would that be useful?

In angular, the promise library that is used is [q](https://github.com/kriskowal/q).  (Another popular promise library that you may run into is [bluebird](http://bluebirdjs.com/docs/getting-started.html)).

**EXERCISE:** Read the docs for [the q promise library](https://github.com/kriskowal/q).  Why would you prefer to use a promise over a callback?  What advantage does it have?

Next, we'll look at an example in angular that uses promises.  Let's create a service to catch a specific pokemon using the [pokemon api](http://pokeapi.co/docs/).

The example below is a possible way to implement a service that
gets the first move for a pokemon and the first ability.  **THERE IS A MUCH BETTER WAY TO IMPLEMENT THE FOLLOWING CODE**.

```js
app.service("Pokemon", ['$http', function($http) {

  var baseUrl = 'http://pokeapi.co/';

  // A number for the pokemon id needs to be added to the
  // this path.
  var pokemonInfoPath = 'api/v1/pokemon/';
  return {
    catchEm: function(pokemonId) {
      var pokeData;
      var fullUrl = baseUrl + pokemonInfoPath + pokemonId + '/';
      $http.get(fullUrl).then(function(baseData) {
        pokeData = baseData.data;
        var uri = pokeData.abilities[0].resource_uri;
        $http.get(baseUrl + uri).then(function(abilityData) {
          pokeData.abilities[0] = abilityData.data;
          // Notice that this get request doesn't depend on the
          // get request it is nested inside of.

          var uri = pokeData.moves[0].resource_uri;
          $http.get(baseUrl + uri).then(function(moveData) {
            pokeData.moves[0] = moveData.data;

            // Now we have a problem.  How do we signal that this
            // data is done?
          })
        });
      });
    }
  };
}]);
```

This deeply nested code is very hard to maintain and it doesn't really provide much benefit over normal callbacks.  The code above also has the problem that client of the service doesn't have a good way of knowing when all of the data has been loaded.  How can we make this better?

**EXERCISE**: Take a look at [this link about flattening promise chains](http://solutionoptimist.com/2013/12/27/javascript-promise-chains-2/).  Apply your newly found promise knowledge to improving the pokemon service.  Make the promise chain in the service not deeply nested.  Also, return a promise to the client so that the client can use `.then` to figure out when all of the data is done loading.  Also keep in mind that the get request for moves and the get request for abilities are not dependent on each other.

**EXERCISE** Now that we have a better idea of how to use promises, improve the code so that all move data, all ability data, and all sprite data gets returned by the service.  Create a page to display the results.

### Using Deferred Objects

A deferred object is a way of creating your own promise from scratch.  You will not be creating deferreds too much in the code you write, but it's good to get an idea of what it does in case you run into the code somewhere.

In the example below, a deferred object is created.  The deferred gets resovled by providing the result of getting the movie data from our movie cache or from an ajax request. The code demonstrates a good way to allow controllers to fetch data from services that may (or may not) need to fetch that data from an external source. In the following example, we'll cache the OMDB response for a search term, and avoid making calls to the API for the same data more than once. Our controller can treat the response the same way in both cases, it doesn't care where the data comes from, only that the search function will return a promise.

```js
app.controller('OmdbController', ['$scope', 'omdbapi', function($scope, omdbapi) {
  $scope.term = '';
  
  $scope.queryOmdb = function() {
    omdbapi.search($scope.term).then(function(data) {
      $scope.results = data;
    })
  }
}]);

app.factory('omdbapi', ["$http", "$q", function($http, $q) {
  var omdbservice = {};
  var baseUrl = "http://www.omdbapi.com/?r=json&plot=long&s=";

  var cachedMovies = {};

  omdbservice.search = function(term) {
    var url = baseUrl + encodeURIComponent(term);

    var deferred = $q.defer();

    if (cachedMovies[term]) {
      deferred.resolve(cachedMovies[term]);
    } else {
      $http.get(url).success(function(data) {
        cachedMovies[term] = data.Search;
        deferred.resolve(cachedMovies[term]);
      }).error(function() {
        deferred.reject("Error!")
      });
    }

    return deferred.promise;
  }

  return omdbservice;
}]);
```
