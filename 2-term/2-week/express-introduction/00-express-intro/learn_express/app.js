var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var vegetables = [
  "Carrots",
  "Cucumber",
  "Peas"
];

// app.get("/", function(req, res) {
//   res.send("Hello World");
// });

app.get("/vegetables", function(req, res) {
  res.send(vegetables.join(", "));
})

app.get("/meaning-of-life", function(req, res) {
  res.send("42");
});

app.get("/hello/:name", function(req, res) {
  res.send("Hello, " + req.params.name);
});

app.get("/companies/:company/products/:productName", function(req, res) {
  res.send(req.params.company + " makes the " + req.params.productName);
});

app.get("/hi", function(req, res) {
  var name = req.query.name;
  res.send("Hello, " + name);
});

app.get("/greeting", function(req, res) {
  res.send("Hello, " + [req.query.first, req.query.last].join(" "));
})

/* now using ejs */
app.get('/', function(req, res) {
  res.render('index', {name: "David"});
});

app.listen(3000, function() {
  console.log("Starting a server on localhost:3000");
});
