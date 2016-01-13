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
    findUserByEmail(email).then(function(user){
      if(user && user.password !== null &&  bcrypt.compareSync(password, user.password)) {
        return done(null, user);
      } else if (user && user.password == null){
        return done(new Error('Please login with Google'));
      } else {
        return done(new Error('Invalid Email or Password'));
      }
    }).catch(function(err){
      return done(err);
    })
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
      if(err.notFound) {
        console.log('Creating User...');
        createUser({
          email: email,
          google: true
        }).then(function(user) {
          done(null, user);
        }).catch(function(err){
          done(err);
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
  console.log('find user by id', id)
  return Users().where('id', id).first()
  .then(function(user){
      if(user) {
        return user;
      } else {
        return Promise.reject({notFound:true});
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
      return Promise.reject({notFound:true});
    }
  }).catch(function(err) {
    return Promise.reject(err);
  });
}

function validPassword(p) {
  return typeof p !== 'undefined' && p !== null && typeof p == 'string' &&  p.trim() !== '';
}

function createUser(user) {
  if(!validator.isEmail(user.email)) return Promise.reject('Invalid email');
  if(user.google) {
    user = {email:user.email,password:null};
  } else {
    if(!validPassword(user.password)) return Promise.reject('Password cannot be blank');

    var hash = bcrypt.hashSync(user.password, 8);
    user = {email:user.email,password:hash};
  }

  return Users().insert(user, 'id').then(function(id) {
    user.id = id[0];
    return user;
  }).catch(function(err) {
    return Promise.reject(err);
  });
}

router.post('/signup', function(req, res, next) {
  findUserByEmail(req.body.email).then(function(user){
      next(new Error('Email is in use'));
  }).catch(function(err){
    if(err.notFound) {
      createUser({
        email: req.body.email,
        password: req.body.password
      }).then(function(user){
        req.login(user, function(err){
          if(err) return next(err);
          res.json({id: user.id})
        });
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
