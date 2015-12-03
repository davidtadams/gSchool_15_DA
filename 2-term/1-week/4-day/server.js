/* code notes from Nodejs Server lesson */
var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')
var port = 8080

function handler (req, res) {
  var parsedUrl = url.parse(req.url)
  var pathname = parsedUrl.pathname
  fs.readFile(path.join('.', pathname), 'utf8', function(err, contents) {
    if (err) {
      res.statusCode = 404
      res.end('404')
      return;
    }
    response.setHeader('Content-Type', 'text/plain')
    if (pathname.endsWith('html')) {
      response.setHeader('Content-Type', 'text/html')
    }
    else if (pathname.endsWith('js')) {
      response.setHeader('Content-Type', 'text/javascript')
    }
    res.statusCode = 200
    res.end(contents)
  })
}

var server = http.createServer(handler)

server.listen(port, function() {
  console.log('Started listening on port:', port)
})
