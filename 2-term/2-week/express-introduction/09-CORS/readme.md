# CORS and Your API

In this exercise you're going to learn how to make two applications – your client application running HTML, CSS, & JS and your server side API – communicate with each other.

# Objectives

* Describe same origin policy and why it is enforced.
* Describe CORS and how it helps us work around the same origin policy.
* Configure an express application to accept requests from a client application.

## Server Setup

You should be getting more fluent with writing server side APIs in Express. Create a brand new API for a resource of your choice. Once that is complete, deploy to heroku and start setting up your client.

Note: For this exercise, you really only need a index route for any given resource, as your client will not perform full CRUD operations.

## Client setup

This application will just include a couple of files.

```
- index.html
- app.js
- axios.js
```

These should be in a completely separate directory with a completely separate github repo.

The app can use any XHR library of your choice, but I recommend using axios because it has great built in promise support.

Just cd into your client app and curl the axios library into your api-client directory. `curl https://github.com/mzabriskie/axios/blob/master/dist/axios.js > axios.js`

Finally, you'll need to add your axios.js and app.js script tags in `index.html` to use them. Once your directory is setup and axios is loaded, you should be able to use it in app.js like so:

```
axios.get('http://localhost:8008/api/items') // your API domain
  .then(function (response) {
    console.log(response);
  });
```

## An Error

`XMLHttpRequest cannot load http://localhost:8080/api/swords. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8081' is therefore not allowed access.`

This doesn't work because the browser forces a strict Same Origin Policy. Your request is being made from one domain to another and the browser just won't have that.

To understand the need for the Same Origin Policy and consequently for CORS, take the time to review all of the following material. After you dig into and digest the following material, you should be able to answer the following questions in your own words:

* Read: https://en.wikipedia.org/wiki/Same-origin_policy
* Read the question and first answer: http://security.stackexchange.com/questions/8264/why-is-the-same-origin-policy-so-important

#### What is the same origin policy? Why is it enforced?

```
Write your answer
```

#### What is JSONP?

```
Write your answer
```

Okay, so there are some hacks that enable cross site requests from the browser... While JSONP is an elegant hack, there must be a better way!

* Watch: https://www.youtube.com/watch?v=rlnhiwN8AnU
* Read: https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
* Read: https://en.wikipedia.org/wiki/JSONP

#### What is CORS? How is it useful?

```
Write your answer
```

#### Why is CORS preferred over JSONP? What advantages does it give us over JSONP?

```
Write your answer
```

## Rationalize

Phwew! That's a lot to take in. It's a lot to learn! You may be asking yourself why all of this is 100% needed to build apps. After all, you've been building fullstack applications without this information for a while now. Well, it all comes down to the need to separate our client from the server. It all comes from the need to build Single Page Applications (SPAs).

To review some of the benefits and rationalizations for SPAs, take a few minutes to watch this segment (just 10 min or so) of this conference talk on the YouTubes: https://www.youtube.com/watch?v=OrIFaWJ9Glo&feature=youtu.be&t=915

## Configure CORS

Alright, so CORS is needed to let us separate our client and server code.

## Setup

The good news is, the [cors](https://www.npmjs.com/package/cors) node module makes setting up CORS extremely simple. Once installed, it's as simple as including the middleware in your application.

```
var cors = require('cors')
app.use(cors())
```

Once this is installed, axios on the client will be able to communicate with the API as needed. You'll know it's configured correctly when axios is able to get data from the API. If you jump back over to your project making the axios request, the error should be gone and the data should be logged to the console. Success!

## Reflect

Setting that up was actually pretty simple with Express. It's just two lines of code, so we can assume it's doing a lot for us under the hood. Given what you know about CORS, consider the following:

* What `Access-Control-Allow-Origin:` header value must our application be using, given that we didn't specify any domain names.
* Review the npm cors module documentation. How would you configure CORS to only work with the client applications that you've approved of?

## Next Steps

Once you have your two applications communicating with each other, start using the API data in the client and display it in some way. Maybe you're serving a swords directory and want to display images of swords on the index page; or maybe your API is serving ATM locations in Boulder and needs to be rendered on a Google Map. How you display this data in the client is up to you today, so have fun with it.

Before you move on, take a moment to consider the objectives. How did you fare?

# Stretch

* Deploy the client application to heroku. You'll need to generate your own dynamic file server to host the static assets.

# Further Reading

* [Cors in Express](http://justindavis.co/2015/08/31/CORS-in-Express/)
