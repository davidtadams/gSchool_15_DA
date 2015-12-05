/*
Mini Project

Create a Node HTTP server that serves up the requested file
The server accepts 2 query parameters: from and to
Before sending out the file, change all instance of from in the file to to
Example: http://localhost:1337/index.html?from=hello&to=bye
will change all instances of hello in index.html to bye

*/
var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')
var querystring = require('querystring')
var port = 8080

//create response handler
function handler(request, response) {
  //parse query string url
  var parsedUrl = url.parse(request.url)
  var pathname = path.join('.', parsedUrl.pathname)
  var parsedQueryString = querystring.parse(parsedUrl.query)

  //get file
  fs.readFile(pathname, 'utf8', function(err, contents) {
    if (err) {
      response.statusCode = 404
      response.end('Error: 404')
      return
    }

    //modify file
    var regex = new RegExp(parsedQueryString.from, 'ig')
    var replaceString = '<strong>' + parsedQueryString.to + '</strong>'
    contents = contents.replace(regex, replaceString)

    //return file
    response.setHeader('Content-Type', 'text/html')
    response.statusCode = 200
    response.end(contents)
  })
}

//create server
var server = http.createServer(handler)

//start server
server.listen(port, function() {
  console.log('Started listening on port:', port)
})
