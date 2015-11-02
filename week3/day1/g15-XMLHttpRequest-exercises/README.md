# XMLHttpRequest

In this assignment, we want you to asynchronously request data from servers.
This task will provide you with a few learning opportunities so you'll:

1. Get to write more JS
1. Get better with consuming third-party API's
1. Learn how to make dynamic requests with JS to other servers

You'll be using [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#XMLHttpRequest%28%29) and [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) to accomplish these exercises.

Here's an example:
```js
// Create a new XMLHttpRequest object to start
var request = new XMLHttpRequest();

// Create a function that is called when the request status has changed
request.onreadystatechange = function () {
  // When the readyState is 4 that means the request has completed
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
}

// Tell the XMLHttpRequest where you want it to go and how
request.open('GET', '/');

// Send it off! Good luck little XMLHttpRequest! :D
request.send();
```

## Instructions

### 1 of 5: Setup

To properly use XMLHttpRequest you need to be running an HTTP Server.
You can easily get one running with [http-server](https://www.npmjs.com/package/http-server):
Install it with `npm install -g http-server`. Or if you need to `sudo npm install -g http-server`.
Then to start a server run `http-server` in the directory you cloned the repo. It will be where the `index.html` file is.
It will tell you the hostname to navigate to in order to see your site.
It will be something similar to `http://localhost:8080`.

Make sure you see the `index.html` file when you hit your `http-server` URL in Chrome.

### 2 of 5: Request `index.html`

Edit the JavaScript file `script.js` to print out the contents of `index.html` in the Chrome JavaScript console.
Make sure you are using `XMLHttpRequest` to do it!

### 3 of 5: Request JSON data

Create a new `XMLHttpRequest` to request the `data.json` file in this repo. Parse the JSON to JS and print the Object to the console.

### 4 of 5: Pull in third-party API data

Make even another `XMLHttpRequest` to now consume the Reddit JSON API.
You can add `.json` to a subreddit URL to create a JSON endpoint.
For example: `http://www.reddit.com/r/aww.json`

Print to the console 3 things of each post returned:

1. The title
1. The thumbnail URL
1. Anything else

### 5 of 5: Submission

Do a pull request when you are done.
