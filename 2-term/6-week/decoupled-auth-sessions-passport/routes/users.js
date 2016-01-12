var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

var Users = function () {
  return knex('users');
}

router.get('/', function(req, res, next) {
  if(req.user) {
    Users().select().then(function(users){
      for (var i = 0; i < users.length; i++) {
        delete users[i]['password'];
      }
      res.json(users);
    })
  } else {
    res.status(401);
    res.json({ message: 'not allowed' })
  }
});

router.get('/:id', function(req, res){
  console.log('user', req.user);
  if(req.user && req.user.id == req.params.id) {
    delete req.user.password;
    res.json(req.user);
  } else {
    res.status(401);
    res.json({ message: 'not allowed' });
  }
})

module.exports = router;
