/*
  Promise Daily Warmup
  Start with a callback hell example and then promisify it
*/

/*      BEFORE      */
// Callback Hell / Pyramid of Doom
getUserData(function (userData) {
  getUserMessages(userData.id, function (userMessages) {
    getUserLocation(userData.id, function (userLocation) {
      renderData(userData, userMessages, userLocation)
    })
  })
})

function getUserData (callback) {
  var data = {name: "Danny", Age: 26, id: 1211}
  //setTimeout roughly simulates an HTTP request.
  setTimeout(function () {
    callback(data)
  }, 0);
}

function getUserMessages (userId, callback) {
  var data = [{text: 'hello'}, {text: 'Do you like music?'}, {text: 'Numbers are cool.'}]
  //setTimeout roughly simulates an HTTP request.
  setTimeout(function () {
    callback(data)
  }, 0)
}

function getUserLocation (userId, callback) {
  var data = {state: 'CO', city: 'Denver'}
  //setTimeout roughly simulates an HTTP request.
  setTimeout(function () {
    callback(data)
  }, 0)
}

function renderData (user, messages, location) {
  console.log(user, messages, location)
}

/* ------------------------------------------------------------------------- */
/*      After      */
getUserData()
  .then(function (userData) {
    return getUserMessages(userData.id)
  .then(function(userMessages){
    return { userData: userData, userMessages: userMessages }
  });
})
.then(function (result) {
  getUserLocation(result.userData.id, function (userLocation) {
    renderData(result.userData, result.userMessages, userLocation)
  })
});

function getUserData() {
  return new Promise(function(resolve, reject) {
    var data = {name: "Danny", Age: 26, id: 1211}
    //setTimeout roughly simulates an HTTP request.
    setTimeout(function () {
      resolve(data)
    }, 0);
  })
}

function getUserData () {
  return new Promise(function(resolve, reject) {
    var data = {name: "Danny", Age: 26, id: 1211}
    //setTimeout roughly simulates an HTTP request.
    setTimeout(function () {
      resolve(data)
    }, 0);
  })
}

function getUserMessages (userId) {
  return new Promise(function(resolve, reject) {
    var data = [{text: 'hello'}, {text: 'Do you like music?'}, {text: 'Numbers are cool.'}]
    //setTimeout roughly simulates an HTTP request.
    setTimeout(function () {
      resolve(data)
    }, 0)
  })
}

function getUserLocation (userId) {
  return new Promise(function(resolve, reject) {
    var data = {state: 'CO', city: 'Denver'}
    //setTimeout roughly simulates an HTTP request.
    setTimeout(function () {
      resolve(data)
    }, 0)
  })
}

function renderData (user, messages, location) {
  console.log(user, messages, location)
}
