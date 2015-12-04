var http = require('http');
var fs   = require('fs');

var server = null;

function handleRequest(req, res) {

};

server = http.createServer(handleRequest);

server.listen(8000, function() {
	console.log("I'm listening on port 8000...")
});
