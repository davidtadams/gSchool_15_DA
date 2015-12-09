# Objectives

* Use supertest to TDD your API
* Write passing tests for existing API resource
* Write failing tests (test drive) a new API resource

## What
You should be familiar with writing tests. Today you're going to discover how to apply TDD to Express APIs.

## Why
The surface area of our applications will increase significantly when we start building thick clients for our APIs and it's important to have good test coverage to ensure everything is always running as expected.

## Setup

Install [Supertest](https://github.com/visionmedia/supertest) as an npm module and save it to your package.json file as a development dependency:

`npm install supertest --save-dev`

Note: What's the differnece between `--save` and `--save-dev`?

Now install [Mocha](http://mochajs.org/) globally via npm.


Watch this video to get a quick overview of supertest and mocha working together. https://www.youtube.com/watch?v=gQD0KiD36h8

This video uses the `should` library for its assertions. We're going to use the built in `assert` module instead, but you're more than welcome to explore using one or the other.

Notice how request accepts `app` as an argument? You will need to export your app from `app.js` and require it in your test files.

```
// at the bottom of app.js

modules.exports = app
```

## Test config

Now that your app is being exposed via modules.exports, you can create a test file and pull it (along with other modules) in as a dependency.

```
take tests
touch tests/items.js
```
```
// require the app we exported from app.js
var app = require('./../app.js');

// connect to the local database (this won't need to run in production)
var db = require('monk')('localhost/items')
var items = db.get('items');


// We're using the built in assert module for our tests.
// https://nodejs.org/api/assert.html
var assert = require('assert');

// And supertest to run our app and send it requests.
var request = require('supertest');
```

## Before each test

Mocha has the ability to run a specific function before each test. This lets us set the stage for our tests to be successful. Below we are wiping the database and inserting a new document with a specific ID. That way we can use it in our PUT, GET, and DELETE tests later.

```
before(function(done) {
  items.remove({}, function() {
    items.insert({title: 'Master Sword', _id: 55c050595ae876b6b79ad318'}, function() {
      done()
    });
  });
});
```

Notice the `done()` function and how it is provided as a parameter inside of the `before` callback. This is how mocha keeps track of async code. It needs some way to know *when* async code completes, so it waits for the `done` function to be invoked before moving onto other tests.

Be sure to take a few minutes to read through the [Mocha docs](http://mochajs.org/) before you go much further.

## POST

This is when we get to define our first test. The `describe` and `it` blocks should look familiar from earlier TDD exercises.

```
describe('POST api/items', function () {
  it('creates a new resource', function (done) {
    request(app)
      .post('/api/items')
      .send({title: 'from test'})
      .expect(201)
      .end(function(err, res) {
        if (err) {
          throw err;
        } else {
          done()
        }
      })
  });
});
```

This code sends a POST request to the `api/items` route with some form data as JSON in the send method. Since our API responds with a 201 created status code, we `expect` that and conclude the test with the end method.

Give that a shot! Run the test with `mocha items.js`.

Note: If your app is already running, you will need to shut it down for the test to run. Alternatively, provide a node ENV variable from the command line to use a different port.

`PORT=8081 mocha items.js`

## PUT

You may use any and all semantic HTTP verbs in the request methods: notice how `post` is changed to `put` in this test.

```
describe('PUT api/items/:id', function () {
  it('updates a resource', function (done) {
    request(app)
      .put('/api/items/55c050595ae876b6b79ad318')
      .send({title: 'from test'})
      .expect(200)
      .end(function(err, res) {
        if (err) {
          throw err;
        } else {
          assert.equal(res.body.title, 'from test')
          done()
        }
      })
  });
});
```

You may be wondering where the id came from in the PUT request above. Recall that in the `before` block above we specified that specific ID when inserting a new document.

You should also note that the test above only works because the API is responding with the created resource. If your API is set up differently (maybe it returns a message, or something else) then you will want to assert that behavior instead.

## GET and DELETE

The GET and DELETE tests are left here for you to complete on your own. Start experimenting in your own source code to determine how you would test these endpoints. Once you have it figured out, fork, clone and send a pull request with your test code for those endpoints below.

### 1) GET /api/items/:id

```
// your code here
```

### 2) DELETE /api/items/:id

```
// your code here
```

### 3) GET /api/items/

```
// your code here
```

## Next Steps

Once you've completed testing all of the CRUD apps for this resource, write failing tests for a resource that doesn't exist yet; then, one by one, write the code to pass each test.

When you write the application code for the new test, you should be able to do much of it from memory. Try not to reference existing code. Here's a chart of the routes you will need.

| Route               | HTTP Verb | Description                  |
|---------------------|-----------|------------------------------|
| /api/items          | POST      | Create a resource.               |
| /api/items/:item_id | GET       | Get a single resource.           |
| /api/items/:item_id | PUT       | Update a resource with new info. |
| /api/items/:item_id | DELETE    | Delete a resource.              |
