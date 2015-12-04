# node-url-parsing
Parsing URLs is a fundamental process of web servers. In regards to Node.js, you have the option to manually parse a URL with the `req.url` property or require [`Node's url module`](https://www.npmjs.com/package/url). To gain an appreciation and understanding of the `url` module, which offers many conveniences, we're going to use `req.url`re-implement two of its most common properties:

- pathname
- query

## Setup
This exercise will involve your HTTP server to be frequently restarted. Rather than manually doing this, we're going to automate this process using [`nodemon`](https://www.npmjs.com/package/nodemon).

To install nodemon, type the following command into your terminal:

```bash
npm install -g nodemon
```

## Instructions
A lot of experimentation will be performed during this exercise. Since the focus of the exercise is URLs and not creating an HTTP server, the code for a basic server has been written for you in [`server.js`](server.js). To start the server, type the following command: 

```bash
nodemon server.js
```

As you complete each of the following steps, add and commit your work to Github.

#### Step 1: `pathname`
The first step is to experiment with the path of a URL. In [`server.js`](server.js), pass an argument of [`req.url`](https://nodejs.org/api/http.html#http_message_url) to `res.end()`.

- Open a browser and navigate to `localhost:8000`. Notice the output.
- Change the URL in the address bar of your web browser to a different URL, such as `localhost:8000/foo`. View the output displayed in your browser.
- Notice that adding a query string will display the path and the query string.
- Create an object named `url-two`; then  add a property named `pathname`. 
- Replace `res.end(req.url)` with `res.end(url-two.pathname)`
- If your browser displays the path of a url, then everything works. `localhost:8000/bar?name=batman`, for instance, would return "/bar"
- Add and commit to Github your changes in `server.js`.

#### Step 2: `query`
The second step is to experiment with the [query string](https://en.wikipedia.org/wiki/Query_string) of a URL.

- Open a browser and navigate to `localhost:8000/report?happy=yes`. Your browser will display the string `/?happy=yes`
- Inside of `server.js`, replace `res.end(url-two.pathname)` with `res.end(url-two.query)`
- The property `queryString` doesn't exist, and you'll have to implement it to return an object with the parameter name as a key and its value as the corresponding value. In other words, we want to view `{happy: yes}`.
- Once you've solved this problem, re-implement your solution to handle a query string with more than one parameter and value, such as `?city=philly&state=pa`.
- Add and commit your work.

#### Step 3: `query` with encoded URL 
The third step is to experiment with an encoded URL and query strings. 

- Open a browser and navigate to `localhost:8000/test?testingIsFun=Sometimes not always&skiingIsFun=Always`. Notice how the URL changed in the address bar.
- Modify `url-two.query` to output `{testingIsFun: "Sometimes not always", skiingIsFun: "Always"}`
- Add and commit your work.

#### Step 4: `url.parse`
The fourth step is refactor your work and [`url.parse`](https://nodejs.org/api/url.html#url_url_parse_urlstr_parsequerystring_slashesdenotehost).
