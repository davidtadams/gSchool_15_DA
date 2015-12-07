# Consuming APIs

## Objectives

* Sequence diagram an express / API integration flow
* Get data from a site that uses a key via the URL using unirest
* Render data from an API in an express view

## Guiding questions
* What is an API and why is it useful?
* How do APIs use a key via the URL to provide access to their data?
* Why can't you use XMLHttpRequest in node?


## Success

Through this lesson you will build an express app that consumes the NYT API. You can see an example of the working app here: https://dry-shelf-2130.herokuapp.com/books

Note: The styles don't have to match, but take note of the attributes we are displaying here: the title, the author, and the image.

## APIs

At the very basic level, APIs are URL endpoints that return structured data. We're using the New York Times API here, but there are all sorts of APIs out there. Take a few minutes to get a sense of what's out there at any of the following sites:

* [Public APIs](https://www.publicapis.com/)
* [APIs.io](http://apis.io/)
* [Programmable Web](http://www.programmableweb.com/)

# Activity

## Building a Book Browsing App

For this exercise, we're going to build a delightful user interface that displays hardcover, fiction books from the New York Time's API. You can read more about the NYT API here: http://developer.nytimes.com/

#### Make an app folder and initialize git

You know the drill. Get an express app going and deploy it to heroku.

1) create an express app with the handlebars and git flags

2) create a repo on Github and connect it

3) deploy to Heroku

If you need a refresher on the steps involved, check out [project setup](setup.md).

`Note: Make sure you add your heroku app to a readme.md file so you can find it later.`

## Flow Diagram of Express Consuming an API

![Imgur](http://i.imgur.com/SrqNGDG.jpg)

Image Key:

1) A client (browser) sends an incoming HTTP request to your application.

2) Your application sends an HTTP request to the NYT API using a valid `key`.

2.1) The NYT API determines if the key is associated with a registered application.

2.2) The API reads the request, finds the appropriate data in a database, and prepares a response.

3) The API sends a response back to the application.

4) The express app processes the data (likely by manipulating it, reducing it, and merging it with a view) and sends a response back to the client.

Let's see that in action. In app.js:

```
app.get('/books', function(req, res) {
	unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + NYT_API_KEY)
	  .end(function (response) {
	    console.log(response.body);
	  })
})
```

Here we defined a `/books` route where `unirest` is used to send an API call. We can test this out by opening up `http://localhost:3000/books/`, but before you do, what errors do you anticipate seeing? Take a few minutes to review the above code and write down all of the errors you think you will need to work through.

... Go ahead. I'll wait. :)

### Errors
1. unirest is not defined

Okay, unirest is obviously not a part of the Node environment, so we need to include it in our application... How do we include other libraries in Node? ...We should require it!

```
var unirest = require('unirest');
```

2. Cannot find module 'unirest'

How do we tell our application about the unirest module? Go ahead and Google unirest to make sure you install the right module from NPM.

3. NYT_API_KEY is not defined

Hopefully you expected this one. When you see all caps variables like this, your mind should start to consider environment variables. That's exactly what we need to do next, but what value do you give it? To get an API key, we'll need to register an application with the NYT API.

> Wait! Before you move on, we're about to change contexts. Write down on a notecard "Configure dotenv and include NYT_API_KEY for unirest."

## Register NYT App

1. Visit [Developers NYT](http://developer.nytimes.com/) and click "Request an API key".
2. You may need to create an account. This process may take you away from the documentation linked above, so be sure to revisit [Developers NYT](http://developer.nytimes.com/) after you sign up. This time, you should be able to request an API key.
3. Fill in the Name field and select "Issue a new key for Books API". (CMND+F books)
4. Agree to the terms of service and click "Register Application"
5. At long last, you have the beloved API [key](https://www.youtube.com/watch?v=HM3ldqDfXOY&feature=youtu.be&t=279)! It should look something like this: "b57aF92347d15bx87ff406a1exa811a6be0:7:7253590299". Copy the entire thing (colons and all) to your clipboard.

Alright, where were we? Let's check the notecard. "Configure dotenv and include NYT_API_KEY for unirest." Oh! It looks like we have everything we need.

## Configure API key with dotenv

You may be comfortable doing this on your own, but if not, check out the following resources: https://students.galvanize.com/redirects/learning_experiences/8

## Log the request

Go ahead and send another get request to the `/books` route from your browser...

It just hangs there. Notice the browser tab just spinning, waiting... What happened? Where should you look first? Take a few min to determine what's happening...

Look! There in the console. There's a ton of JSON just sitting there. Reference the unirest code to determine the following:

1. Where is the JSON in the server console coming from?
2. Why is the server just hanging after we visit the `/books` route.

After you determine the answer to each question above then fix the code (just make sure the browser isn't left waiting), give someone nearby a high five, and commit this progress to github.

```
git add -A
git commit -am "Include env variable for NYT API and log API response to the console."
```

We don't have much to show yet, so don't worry about deploying to heroku just yet. Instead, write down on your notecard "Logged API response in console. Do something with the response when you get back to coding.". Now review the following guiding questions and take a 10 - 15 min break.

## Guiding questions:
* Why doesn't the NYT API just get out of the way? Wouldn't it be more efficient if we had unrestricted access to the NYT database?
* How does the NYT API know that the key you sent is a valid key?
* What kind of database is the NYT using? Does it matter to us?

## URL Resources and API Key

Before you start developing the app further, lets take a minute to examine the URL we passed to unirest before.

`http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=b57ff23d900b78s7f406a1e9a811a6be0:1:7245932`

Before you answer these questions, copy and paste your own URL in the browser.

**Note: Use your own URL! Not the one I pasted above (because the one above uses a fake key and doesn't work.)**

* Where is the `resource` in this URL?
* What part of this URL is a query string?
* What do you think `v3` means? What happens when you change it to `v2`?
* How does the API know to respond with JSON?
* What happens if you change `.json` to `.xml`?

To answer some of these questions, it's a good time to research a bit more about the NYT API. Visit the [NYT API docs](http://developer.nytimes.com/docs) and go to the section on books (CMND+F books). Click on the "[Best Sellers](http://developer.nytimes.com/docs/books_api/Books_API_Best_Sellers)" link because that's the part of this API that we are using. Before you dive in, quickly scan this document for a few moments (mentally note section headers, different types of content, etc.)

The most useful information here is the first table that describes parts of the API at a high level. After you take some time reading that table, jump down to the **Request** table. Examine this table and cross reference if to answer some of the questions above.

Finally, before we jump back into the code, check out the **Examples** section down at the bottom.

Notice what happens when you copy / paste the example URLs into the browser. It sends a GET request, but the response just says `"<h1>Developer Inactive</h1>"`. What's missing from the URL?

## Back in action

Where did we leave off? Check your notecard! We left off with the API's response body just logged in the console. You should have determined that the browser was hanging because we didn't end the response. Given that, your code should look something like this:

```
app.get('/books', function(req, res) {
	unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + process.end.NYT_API_KEY)
	  .end(function (response) {
	    console.log(res.body);
		res.end('Done')
	  })
})
```

And the console should display some data that looks like this:

```
{ status: 'OK',
  copyright: 'Copyright (c) 2015 The New York Times Company.  All Rights Reserved.',
  num_results: 20,
  last_modified: '2015-07-16T18:00:06-04:00',
  results:
   { list_name: 'Hardcover Fiction',
     bestsellers_date: '2015-07-11',
     published_date: '2015-07-26',
     display_name: 'Hardcover Fiction',
     normal_list_ends_at: 15,
     updated: 'WEEKLY',
     books:
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ],
     corrections: [] } }
```

This is just regular JSON. Given the object shown above, how do you access the books array? Try it yourself, then move on to the next section "Rendering the data".

## Rendering the data

You can narrow in on the books array using dot notation like so:

`response.body.results.books`

Inside of the `end` Lets assign that to a variable and pass it to the render method!

```
var NYTBooks = res.body.results.books;
res.render('index', {books: NYTBooks});
```

This defined a local 'books' variable for the index template. Lets crack open that template and use handlebars to render some books.

## Guiding questions:
1. How do you iterate through and render an array of items in Handlebars?
2. How then, do you figure out what properties each book has available?

## Answers:
1. `{{#books}} ... {{/books}}`
2. `console.log(NYTBooks)`

Given those answers, you should be able to use handlebars to render HTML that looks like this:

```
<article>
	<h2>THE GIRL ON THE TRAIN</h2>
	by <strong>Don Winslow</strong>
	<img src="http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9781101874998.jpg">
</article>
```

Get that working? If so, it's time for a high five, git commit, and push to heroku.

```
git add -A
git commit -m "Render books from NYT API"
git push origin master
git push heroku master
```

## On your own

You have the keys to the kingdom (er, well, NYT API) and the knowledge to accomplish great things (or at least impress potential employers). Use what you've learned to do any of the following:

A. Add a new route to the app we built. Access and render data from another part of the [NYT API](http://developer.nytimes.com/).
B. Use the links at the top to find and use another API for a brand new application. 

## Reflect: New Questions

What new questions do you have, now that you've gone through this exercise? List at least four of them.

1.  
1.  
1.  
1.  

Spend some time this evening diving deeper into these questions. Don't worry if you don't find the exact answers, but keep these questions in mind.

## Self assess
* Have you completed the objectives?
* Are you coming up with answers to the guiding questions? Consider sharing your answers with another student in class.
