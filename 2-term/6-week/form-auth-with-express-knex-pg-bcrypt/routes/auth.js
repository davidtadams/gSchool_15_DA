var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var bcrypt = require('bcrypt')
var Users = function() {
  return knex('users');
}

router.post('/signup', function(req, res, next) {
  Users().where('email', req.body.email).first().then(function(user){
    if(!user) {
      var hash = bcrypt.hashSync(req.body.password, 8);
      Users().insert({
        email: req.body.email,
        password: hash
      }, 'id').then(function(id) {
        res.cookie('userID', id[0], { signed: true });
        res.redirect('/loggedin.html?userID=' + id[0]);
      });
    } else {
      res.status(409);
      res.redirect('/login.html?error=You have already signed up. Please login.');
    }
  });
});

router.post('/login', function(req, res, next){
  Users().where({
    email: req.body.email,
  }).first().then(function(user){
    if(user) {
      //bcrypt.compareSync will hash the plain text password and compare
      if(bcrypt.compareSync(req.body.password, user.password)) {
        res.cookie('userID', user.id, { signed: true });
        res.redirect('/loggedin.html?userID=' + user.id);
      } else {
        res.redirect('/login.html?error=Invalid Email or Password.');
      }
    } else {
      res.redirect('/signup.html?error=Invalid Email or Password.');
    }
  });
});

router.get('/logout', function(req, res){
  res.clearCookie('userID');
  res.redirect('/');
});

module.exports = router;
