require('dotenv').load();

var express = require("express");
var router = express.Router();

var knex = require("knex")({
  client: "pg",
  connection: {
    host:         process.env.DB_HOST,
    user:         process.env.DB_USER,
    password:     process.env.DB_PASSWORD,
    database:     process.env.DB_SCHEMA
  }
});

router.get("/", function(request, response) {
  knex("student").select().then(function(students) {
    response.send({students: students});
  });
});

router.get("/:id", function(request, response) {
  knex("student").select()
    .where("id", request.params.id)
    .then(function(students) {
      response.send({students: students});
    });
});

router.post("/", function(request, response) {
  knex("student").insert({
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    date_of_birth: request.body.date_of_birth,
    email: request.body.email
  }, "id").then(function(id) {
    request.body.id = id[0];
    response.status(201).send(request.body);
  });
});

module.exports = router;
