## Intro to Express.js

Objectives:

- Start a simple express app and review `require`  
- Apply routing knowledge to serve dynamic content

## ESSENTIAL Pre-reading

* [HTTP Intro](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)

## Express

### Create a directory

Let's start with a simple **Express** application.

Make a directory and create a file named `app.js`.

```
mkdir learn_express
cd learn_express
touch app.js
npm init
git init
echo "node_modules" > .gitignore
git add -A
git commit -m "initial commit"
```

**STOP!** - before you move on, take a moment to look back at those command.  What does each line do?  Why do you need it?

### Install Express

```
npm install express --save
```

Open your project up in your text editor (Atom, Sublime etc...) and take a look - `npm install` downloaded a number of javascript files and placed them in your `node_modules` directory.

### Write a basic app

Now we need write some code for our simple application.  Add the following code into `app.js`:

```js
var express = require('express'),
  app = express();

// WHEN a user visits the homepage (like http://localhost:3000)
app.get("/", function (req, res) {
  // THEN send back the response: 'Hello World'
  res.send("Hello World");
});

// Start the server and make our web app available on http://localhost:3000
app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});
```

Now run your file from the command line with:

```
node app.js
```

Sweet!!  You just built a basic web app in Express!  Time for another route:

Add another route, this time at `/meaning-of-life`

```js
app.get("/meaning-of-life", function (req, res) {
  res.send("42");
});
```

How would you visit that route in your browser?  How about http://localhost:3000/meaning-of-life

Hmm....  that didn't work.

When you start a `node` process, and then make changes to the files, it doesn't automatically load those changes in.  So every time you make a change to a running node program, you have to stop the server (with CTL+C) and restart it (by using the up arrow in your Terminal and re-running the command).

So stop the server and re-start it.  Now go to http://localhost:3000/meaning-of-life

### Let's keep that server running with nodemon!

Stopping and restarting a server is lame.  It makes development slow, and it's a lot of wasted keyboard motion.  Luckily, there's a tool to help you - it's called `nodemon`, and it will detect changes to your files, and restart your server for you.

First, install `nodemon` globally like so:

```
npm install -g nodemon
```

If you get permission errors, see an instructor.  You shouldn't have to type `sudo` when installing node modules, even global ones.

Now stop your server, and instead of typing `node app.js` to start it, run `nodemon app.js`.  Make some changes to `app.js` and refresh your browser and you'll see your changes reflected immediately.  Noice!

### Routing

Building an application will require us to have a firm grasp of something we call **routing**.  Each **route** is a combination of a **Request Type** and **Path**.

Let's build these into our application:

`app.js`

```js
var express = require('express'),
  app = express();

var vegetables = [
        "Carrots",
        "Cucumber",
        "Peas"
         ];

// WHEN a user goes to the homepage
app.get("/", function (req, res) {
  // THEN send back a response with "Hello World"
  res.send("Hello World");
});

// WHEN a user goes to http://localhost:3000/vegetables
app.get("/vegetables", function (req, res) {
  //THEN send back a response with the veggies
  res.send(vegetables.join(", "));
});

// WHEN a users goes to the /meaning-of-life path
app.get("/meaning-of-life", function (req, res) {
  // THEN send down a response with "42"
  res.send("42");
});

app.listen(3000, function () {
  console.log("Go to localhost:3000/");
});
```

### Passing data into your app

There are multiple ways to pass data to an Express app, and two of them are:

- URL Parameters
- Query Parameters

**URL Parameters**

What if we want to create an app that can dynamically say hello to anyone?

* Using **url parameters** add a dynamic route to the application, indicated by `:` and the variable name you want to use, we'll use `:name` for the example below.

```js
// WHEN someone visits /hello/john
// THEN set req.params to an object that looks like this: {name: "john"}
//
// WHEN someone visits /hello/sue
// THEN set req.params to an object that looks like this: {name: "sue"}
app.get("/hello/:name", function (req, res) {
  res.send( "Hello, " + req.params.name );
});

// WHEN someone visits /companies/apple/products/iphone
// THEN set req.params to an object that looks like this:
//    {company: "apple", productName: "iphone"}
app.get("/companies/:company/products/:productName", function (req, res) {
  res.send( req.params.company + " makes the " + req.params.productName );
});
```

Here we are seeing the first introduction to parameters that the application can identify. In the following route `:name` is consider a route parameter. We can access it using `req.params.name`.

**Query Parameters**

Generally, you don't want to cram everything into a route. Just imagine when there are multiple parameters in route. Maybe we don't care about getting the order of the parameters correct. To solve this problem, we use **query parameters** with each request.

Let's see query params in action. Go to [https://google.com/search?q=puppies](https://google.com/search?q=puppies)

* `?` denotes the beginning of the query parameters
* `=` indicates an assignment; anything to the left is the key, while the right represents the value
* `&` allows for the input of multiple parameters, separating each

Let's add our first route to practice query params.

```js
// WHEN someone visits /greeting?name=Sue
// THEN set req.query to an object that looks like {name: "Sue"}
app.get("/hi", function (req, res) {
  var name = req.query.name;
  res.send("Hello, " + name);
});
```

Now visit [localhost:3000/hi?name=elie](localhost:3000/hi?name=elie). Note that we define parameters in the url after a `?`.  You can set as many as you like:

```js
// WHEN someone visits /greeting?first=Joe&last=Jones
// THEN set req.query to an object that looks like {first: "Joe", last: "Jones"}
app.get("/greeting", function (req, res) {
  res.send("Hello, " + [req.query.first, req.query.last].join(" "));
});
```

## Sending dynamic files

Sometimes there are static HTML files you want to send as a response. There are ways to send files using Express including `res.sendFile`, but if we want to send dynamic content, we will need to use something different.

Until now we have been using `res.send` to display information to our user, but if we want to render a dynamic page we will use `res.render`. Not only will we use this method, we will render templates using an engine called `ejs`. This requires us to install another package, as well as including the line `app.set("view engine", "ejs")` inside of our `app.js`.

```
npm install --save ejs
```

Then in `app.js`...

```js
var express = require('express'),
app = express();

// WHEN the app loads for the first time, register "ejs" as the templating language
// http://www.embeddedjs.com/
app.set('view engine', 'ejs');

// WHEN a user visits the homepage
app.get('/', function(req, res){
  // THEN read the file named index.ejs, and do some text replacing
  // such that <%= name %> becomes "Elie"
  res.render('index', {name: "Elie"});
});
```

Now inside of a views folder, we can create an `index.ejs` file and include:

```
mkdir views
touch views/index.ejs
```

Then add the following content:

```html
<!DOCTYPE HTML>

<html>
  <head>
  </head>
  <body>
    Hello, <%= name %>!
  </body>
</html>
```

Alright!  You are up and running with a basic express app!
