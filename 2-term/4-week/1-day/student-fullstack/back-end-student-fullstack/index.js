var express = require("express");
var app = express();

var students = [{
  id: 1,
  first_name: "David",
  last_name: "Adams",
  date_of_birth: "02/19/1988",
  email: "myemail@gmail.com"
},{
  id: 2,
  first_name: "Kyle",
  last_name: "Coberly",
  date_of_birth: "01/01/2901",
  email: "danny@gmail.com"
}];

app.get("/students", function(request, response) {
  response.send({students: students});
});

app.get("/students/:id", function(request, response) {
  response.send({students: students[request.params.id - 1]});
});

app.listen(8000, function() {
  console.log("Runing on port: 8000");
});
