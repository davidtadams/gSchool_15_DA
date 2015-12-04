# Building a HTTP File Server

Please read through this entire document first, then return to the beginning to complete the exercise.

## Setting the stage (What and Why)

The goal of this exercise is to write a simple, HTTP file server that serves files in the directory that it is run in.

This task is meant to integrate an understanding of `fs` with `http`. In order to serve static files from a machine, access to the file system is required, in order to do it over the web, HTTP is required. The why behind this activity is that building the server yourself and spending time "in the dirt" with `req` and `res` will help strengthen your understanding of their usage in the context of Express.

## Educational Objectives

- List and explain common HTTP status codes
- Describe that HTTP requests are not encrypted
- Explain that HTTP requests are strings sent across a network
- Describe that HTTP responses are strings sent across a network
- Start a simple server using the `http` module
- Use the `http` module to interact with the Web using the HTTP protocol

## Key terms:

- `http` npm module
- server
- client
- path

## Educational Activities

This [guide](http://geekexplains.blogspot.com/2008/06/whats-http-explain-http-request-and.html) provides a simple and concise rundown of HTTP. The appropriate level to understand is:

  1. An HTTP request contains a [URI](https://danielmiessler.com/study/url_vs_uri/), headers, and body.
  1. An HTTP response contains a [status code](https://www.flickr.com/photos/girliemac/sets/72157628409467125/), headers, and body.

These concepts will be revisited in more detail. For now if you would like to see what this looks like in reality, open up Chrome's inspector panel, click on the "Network" tab, and refresh the page, click on any request that shows up and you will be shown the shared ("General" section) information, Response Headers, and Request Headers.

Recall the generic model we are taking for [client and server](http://www.logicalposition.com/couch/uploads/image/blog-articles/how-the-web-works/http.png) with respect to HTTP requests and responses. In our case, the server will not be a separate physical machine (for now), but will instead be your laptop, `localhost`.

Complete the [Coding Tasks](coding_tasks.md) for this lesson.

## Reflect: Self-asses

Go to the "Objectives" section of this README. Go through each one and ask yourself:

- Have I completed this objective?
- What concrete evidence do I have that I've completed the objective?

Go to the "Key Terms" section of this README. For each word, ask yourself:

- What is my explanation for this term?

If you haven't completed an objective, or you can't define a term, take a few minutes to try to fill in any gaps.

## Reflect: Ask new questions

What new questions do you have now that you've gone through this exercise?

List at least 4 here:

1. 
1. 
1. 
1. 