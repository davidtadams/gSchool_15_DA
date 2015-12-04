# A basic HTTP Server

An important exercise in understanding Node.js as a platform is to build a basic HTTP server. One thing you should observe is that this exercise will again rely on npm modules, in particular `fs` and `http`. Later in the course Express will be explored; try to remember that under the covers Express is using npm modules like `fs` and `http` to do all of the heavy lifting.

The concepts in this exercise are _fundamental_. Make sure you are able in the code where the HTTP response and request are.

## Setup steps

1. Fork and clone this repository, `cd` into the directory you cloned it to.
1. Create an `index.html` file with valid HTML inside of it in the same directory you cloned the repository to. Feel free to make the `index.html` page fun.

A skeleton server has been defined for you in `server.js` and should serve as the basis for your application. First, run your application with `node server.js` at the command line, then visit it at `localhost:1337` in chrome. Whats is going on? Since there is no code in the `handleRequest` function, nothing! Ask yourself, where does `1337` come in to the picture? How is that port number (which is obviously a joke, `8000` and `3000` are standard choices) declared and how is that tied to starting up the server? (_Hint:_ Examine `server.js`)

### Goals

1. Visit `http://localhost:1337/index.html` and have the `index.html` file that you created be served. In the code in [`server.js`](server.js), `req` is the Node.js HTTP request object and `res` is the Node.js HTTP response object. These names, `req` and `res` are conventional choices in the Node.js community.

The [simplest thing to do](http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation) to understand `req` and `res` is just to make a HTTP request by visiting `localhost:1337/anything` in the browser and then `console.log`-ing the `req` and `res` objects inside of the `handleRequest` function.

After that, experiment with the following inside of the `handleRequest` function:

* [`res.writeHead`](https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers)
* [`res.write`](https://nodejs.org/api/http.html#http_response_write_chunk_encoding_callback)
* [`res.end`](https://nodejs.org/api/http.html#http_response_end_data_encoding_callback)

Use the documentation to figure out how each one works and use them in the order listed here using the examples in the docs. Does the order matter? Construct an experiment and figure out a rule for the ordering of these method calls.

Next,

1. Repeat what you did with `index.html` and create another file, `about.html`. Again, make it fun, the content does not matter.
1. Figure out how to get `server.js` to server `about.html` in addition to `index.html`.
1. Use what you've done with `index.html` and `about.html` to figure out a general way to handle requests for files in this directory.

There are some additional methods that are useful to know about:

* [`req.url`](https://nodejs.org/api/http.html#http_message_url) - allows you to see the relative part of the URL the user hit (e.g. `/foo` in `http://google.com/foo`)
* [`fs.readFile`](https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback)

#### Testing

To test that you have completed this exercise successfully, create an arbitrarily named file in this directory, like `cats_are_cool.html` with any content you want (e.g. `<html><body><h1>Cats are cool</h1></body></html>`) and make sure it works when you request it via `localhost:1337/cars_are_cool.html`.

## Next levels (#LevelUp)

1. Add links between the pages you have added locally.

1. Add CSS to this project.

### Challenges

1. If a user provides [query string](http://en.wikipedia.org/wiki/Query_string) as part of the URL make the response a page consisting just of the query params (fields and values). [`url.parse`](https://nodejs.org/docs/latest/api/url.html#url_url_parse_urlstr_parsequerystring_slashesdenotehost) may be helpful.

1. Generally, if a user requests a page that does not exist, a `404 Not Found` response will be issued by the server and a fun page will be rendered. For a good example of this checkout [Github's 404 page](https://github.com/asdhasdasd). Add this functionality to your server, so that any arbitrary request to a non-existant resource returns a [404 HTTP status code](https://www.flickr.com/photos/girliemac/6508022985), regardless of if it has a query string or not.

#### Reflection Questions

1. Which npm module enables the easy setup of an HTTP server?
1. What are `req` and `res` in `server.js` and how do they related to the concept of an HTTP Request and Response?
1. How does the Node.js event loop factor in to the code you wrote for this exercise?
