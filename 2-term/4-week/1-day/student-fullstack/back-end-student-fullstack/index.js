var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

var studentsRoute = require("./routes/students");

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/students", studentsRoute);

app.listen(8000, function() {
  console.log("Runing on port: 8000");
});
