var express = require('express');
var router = express.Router();
var knex = require('./../db/knex');

function Students() {
  return knex('students');
}

router.get('/', function(req, res, next) {
  Students().select().then(function (students) {
    res.render('index', { students: students });
  })
});

router.get('/enroll', function (req, res, next) {
  res.render('enroll')
})

router.get('/:id', function(req, res, next) {
  Students().where({
    id: req.params.id,
  }).then(function (student) {
    res.render('show', { student: student[0] });
  })
});

router.get('/edit/:id', function(req, res, next) {
  Students().where({
    id: req.params.id,
  }).then(function (student) {
    res.render('edit', { student: student[0] });
  })
});

router.post('/', function (req, res) {
  Students().insert({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    date_of_birth: req.body.date_of_birth,
  }, "id").then(function (id) {
    res.redirect('/')
  })
})

router.post('/edit/:id', function (req, res) {
  Students().where({
    id: req.params.id
  }).update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    date_of_birth: req.body.date_of_birth,
  }, "id").then(function (id) {
    res.redirect('/' + req.params.id)
  })
})

router.post('/delete/:id', function (req, res) {
  Students().where({
    id: req.params.id
  }).del().then(function (result) {
    res.redirect('/')
  })
})

module.exports = router;
