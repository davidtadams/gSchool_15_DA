# HTTP Service

Angular services are simply objects that contain some code that can be shared across your app.  Like most things we've discussed, Angular comes with some services already, but we can also write our own custom services too.  

You can see a list of the built-in Angular services [here](https://docs.angularjs.org/api/ng/service).  Some of the most important ones are:

* $http
* $location
* $rootScope
* $q
* $animate
* $routeParams

According to the docs, the `$http` service:

>facilitates communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP.

It's **Angular's wrapper for AJAX calls.**  It's the easiest way of communicating with a server from an Angular app. Let's try it out!

**In order to use the `$http` service in a controller, we need to first add it as a dependency**.  Like this:

```js
app.controller('someControllerName', function($scope, $http){
});
```

Now we can access all of the methods defined on the `$http` service. They are:

* $http.get
* $http.head
* $http.post
* $http.put
* $http.delete
* $http.jsonp
* $http.patch


We're going to start by using `$http.get()` to retrieve some very simple data from Github's Zen API located here: `https://api.github.com/zen` and then display the resulting data on the page. It's an extremely simple API; all that it does is respond with a single piece of zen programming wisdom.  Try visiting the api in your browser.

Don't forget that `$http.get()` returns a promise!

```js
$http.get('https://api.github.com/zen').then(function(data){
	$scope.zenData = data;
});
```

In your template, display the value of `zenData`.  You'll see that it's JSON with a few different properties:

```json
{
	"data":"Keep it logically awesome.",
	"status":200,
	"config": {
		"method":"GET",
		"transformRequest":[null],
		"transformResponse":[null],
		"url":"https://api.github.com/zen",
		"headers":{
			"Accept":"application/json, text/plain, */*"
		}
	},
	"statusText":"OK"
}
```

Most of time, we just want the actual response data, so let's change our code slightly:

```js
$http.get('https://api.github.com/zen').then(function(data){
	$scope.zenData = data.data;
});
```

NOTE: If you have trouble sending GET requests to 'https://api.github.com/zen' ,
create a new zen.json file in your application and send get requests to retrieve data from 
that newly created file.

PS: sometimes the api reaches it's daily limit of calls and shuts down for the day

**EXERCISE:** Read about [the same origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) ([wikipedia has some good info too](https://en.wikipedia.org/wiki/Same-origin_policy)) and [Cross-Origin Resource Sharing or CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).  Describe what both the same origin policy and CORS are.

**EXERCISE:** Try using `$http.get()` to make a request to `https://itunes.apple.com/search?term=jack+johnson` and display the title of every post on your template. You should get an error. What was the error?  Why did the api.github.com domain work and not the itunes.com domain?

**EXERCISE:** Since making a request to `https://itunes.apple.com/search?term=jack+johnson` didn't work, go to the url in your browser and copy all the json that gets returned.  Save the json data into a file in your app called `itunes.json`.  Use the `$http.get()` service to make a request to get the `itunes.json` file.  Display the title of every post on your template.  Why does this method for getting the json data work?

**EXERCISE:** Try making a request to an invalid URL.  Write code to properly handle a request that fails.  **Does Angular have any built-in functionality that could help you?**


**EXERCISE:** Use `$http.get()` and `$http.post()` to interact with this [Rails API that we've made for you](https://still-tundra-8387.herokuapp.com/).  It's a simple collaborative chat app.  The API has two endpoints:

The app is one Rails model, Message, which has two attributes: name and content.

* GET `/messages` - responds with a list of all messages
* POST `/messages` - creates a new message with the data you send to it

Create a simple app that displays a list of all the messages coming from the API.  Also display a form that allows a user to submit a new message to the database.

Remember that most Rails apps expect your data for a given model to be nested inside of a single object with the name of the model.  So the data you send should follow this format:

```js
{message: {
  name: "Mary",
  content: "This is such a cool API!"
}}
```

## Questions

* What is a service?  Is there a Ruby or JavaScript equivalent to Angular services?
* Explain in as much detail as possible what happens under the hood of `$http.get()`
* What is `$q` and how does it relate to `$http`?
