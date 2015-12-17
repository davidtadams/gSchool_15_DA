var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

var Users = function () {
  return knex('users');
}

router.get('/', function(req, res, next) {
  if(req.signedCookies.userID) {
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
  if(req.signedCookies.userID === req.params.id) {
    Users().where('id', req.params.id).first().then(function(user){
      if(user) {
        delete user.password;
        res.json(user);
      } else {
        res.status(404);
        res.json({ message: 'not found' });
      }
    }).catch(function(error){
      res.status(404);
      res.json({ message: error.message });
    })
  } else {
    res.status(401);
    res.json({ message: 'not allowed' });
  }
})

module.exports = router;
