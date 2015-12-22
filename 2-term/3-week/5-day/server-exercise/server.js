var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var llamasRoute = require('./routes/llamas')

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/llamas', llamasRoute);

app.listen(8080, function() {
  console.log("Running on port 8080!");
});
