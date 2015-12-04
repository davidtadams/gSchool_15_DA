var http = require('http');

var server = null;

function handleRequest(req, res) {  
  res.end("This is where you'll be experimenting");
};

server = http.createServer(handleRequest);

server.listen(8000, function() {
	console.log("Listening on PORT 8000...");
});
