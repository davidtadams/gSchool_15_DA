var express = require('express');
var knex = require('../db/knex');
var bcrypt = require('bcrypt');
var router = express.Router();
var passport = require('passport');
LocalStrategy = require('passport-local').Strategy;

function Users() {
  return knex('user');
}

passport.use(new LocalStrategy({
    usernameField: 'email'
  }, function(email, password, done) {
    Users().where('email',email).first()
    .then(function(user){
      if(user && bcrypt.compareSync(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Invalid Username or Password' });
      }
    }).catch(function(error){
      return done(error);
    });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Users().where('id', id).first()
  .then(function(user){
      if(user) {
        done(null, user);
      } else {
        done('User not found.');
      }
  }).catch(function(error){
    done(error);
  });
});

router.get('/login', function(req, res){
  if(req.user) {
    res.redirect('/players');
  } else {
    res.render('login', { error: req.query.error || req.flash('error')[0] });
  }
});

router.post('/login',
  passport.authenticate('local', {
    failureRedirect: '/auth/login',
    failureFlash: true
  }),
  function(req, res){
    res.redirect('/players');
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/auth/login');
});

router.get('/signup', function(req, res){
  if(req.user) {
    res.redirect('/players');
  } else {
    res.render('signup');
  }
});

router.post('/signup', function(req, res){
  Users().where('email', req.body.email).first()
  .then(function(user){
    if(user) {
      res.redirect('/auth/login?error=' + encodeURIComponent('That email is in use.'));
    } else {
      Users().insert({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
      }, 'id').then(function(id){
        res.redirect('/auth/login');
      });
    }
  });
});

module.exports = {
  router: router,
  passport: passport,
  isAuthenticated: function(req, res, next) {
    if(req.isAuthenticated()) {
      next();
    } else {
      res.status(401);
      res.render('error', {
        message: 'Not Allowed'
      });
    }
  }
};
