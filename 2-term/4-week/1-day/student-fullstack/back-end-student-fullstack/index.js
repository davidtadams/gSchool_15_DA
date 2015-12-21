var express = require("express");
var cors = require("cors");
var knex = require("knex")({
  client: "pg",
  connection: {
    host:         "127.0.0.1",
    user:         "regly_app",
    password:     "regly_password",
    database:     "regly"
  }
});

var app = express();
app.use(cors());

// var students = [{
//   id: 1,
//   first_name: "David",
//   last_name: "Adams",
//   date_of_birth: "02/19/1988",
//   email: "myemail@gmail.com"
// },{
//   id: 2,
//   first_name: "Kyle",
//   last_name: "Coberly",
//   date_of_birth: "01/01/2901",
//   email: "danny@gmail.com"
// },{
//   id: 3,
//   first_name: "CJ",
//   last_name: "Reynolds",
//   date_of_birth: "02/03/3000",
//   email: "cj@gmail.com"
// }];

app.get("/students", function(request, response) {
  knex("student").select().then(function(students) {
    response.send({students: students});
  });
  // response.send({students: students});
});

app.get("/students/:id", function(request, response) {
  knex("student").select()
    .where("id", request.params.id)
    .then(function(students) {
      response.send({students: students});
    });
  // response.send({students: students[request.params.id - 1]});
});

app.listen(8000, function() {
  console.log("Runing on port: 8000");
});
