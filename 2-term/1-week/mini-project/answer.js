var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var app = http.createServer(function(request, response) {
  var parsedURL = url.parse(request.url, true);
  console.log(parsedURL);
  fs.readFile(path.join('.', parsedURL.pathname), 'utf8', function(err, contents) {
    if (err) {
      response.statusCode = 404;
      response.end('404');
      return;
    } else {
      response.statusCode = 200;
      var regex = new RegExp(parsedURL.query.from, 'gi')
      response.end(contents.replace(regex, parsedURL.query.to));
    }
  });
});

app.listen(8080, function() {
  console.log('Server is listening on 8080');
});
