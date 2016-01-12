var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var bcrypt = require('bcrypt');
var passport = require('passport');
var validator = require('validator');

var LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var Users = function() {
  return knex('users');
}

require('dotenv').load();

passport.use(new LocalStrategy({
    usernameField: 'email'
  }, function(email, password, done) {
    console.log('Logging in...')
    Users().where('email',email).first()
    .then(function(user){
      if(user && bcrypt.compareSync(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, 'Invalid Email or Password');
      }
    }).catch(function(error){
      return done(error);
    });
}));

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.HOST + '/auth/google/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    var email = profile.emails[0].value;
    findUserByEmail(email).then(function(user) {
      console.log('Existing User...');
      console.log(user);
      done(null, user);
    }).catch(function(err) {
      if(err == 'User not found.') {
        console.log('Creating User...');
        createUser(email).then(function(id) {
          return id;
        }).then(function(id){
          return findUserByID(id);
        }).then(function(user){
          done(null, user);
        });
      } else {
        console.log('Error...');
        console.log(err);
        done(err);
      }
    });
  }
));
passport.serializeUser(function(user, done) {
  console.log('Serializing user...');
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log('Deserializing user...');
  findUserByID(id).then(function(user){
      if(user) {
        done(null, user);
      } else {
        done('User not found.');
      }
  }).catch(function(error){
    done(error);
  });
});


function findUserByID(id) {
  return Users().where('id', id).first()
  .then(function(user){
      if(user) {
        return user;
      } else {
        return Promise.reject('User not found.');
      }
  }).catch(function(err){
    return Promise.reject(err);
  });
}

function findUserByEmail(email) {
  return Users().where('email', email).first().then(function(user){
    if(user) {
      return user;
    } else {
      return Promise.reject('User not found.');
    }
  }).catch(function(err) {
    return Promise.reject(err);
  });
}

function createUser(email, password) {
  if(!validator.isEmail(email)) return Promise.reject('Invalid email');
  if(password == '') return Promise.reject('Password cannot be blank');

  var hash = !password ? null : bcrypt.hashSync(password, 8);
  return Users().insert({
    email: email,
    password: hash
  }, 'id').then(function(id) {
    return id[0];
  }).catch(function(err) {
    return Promise.reject(err);
  });
}

router.post('/signup', function(req, res, next) {
  findUserByEmail(req.body.email).then(function(user){
      next(new Error('Email is in use'));
  }).catch(function(err){
    if(err == 'User not found.') {
      createUser(req.body.email, req.body.password).then(function(id){
        res.json({id: id})
      }).catch(function(err){
        next(err);
      });;
    } else {
      next(err);
    }
  });
});

router.post('/login', function(req, res, next){
  passport.authenticate('local',
  function (err, user, info){
    if(err) {
      next(err);
    } else if(user) {
      req.logIn(user, function(err) {
        if (err) {
          next(err);
        }
        else {
          delete user.password;
          res.json(user);
        }
      });
    } else if (info) {
      next(info);
    }
  })(req, res, next);
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});

router.get('/google',
  passport.authenticate('google', { scope: 'email https://www.googleapis.com/auth/plus.login' }));

router.get('/google/callback', function(req, res, next) {
  passport.authenticate('google', function(err, user, info){
    if(err) {
      next(err);
    } else if(user) {
      req.logIn(user, function(err) {
        if (err) {
          next(err);
        }
        else {
          res.redirect(process.env.CLIENT_CALLBACK + '?userID=' + user.id);
        }
      });
    } else if (info) {
      next(info);
    }
  })(req, res, next);
});

module.exports = {
  router: router,
  passport: passport
};
