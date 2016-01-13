var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var validator = require('validator');

var LocalStrategy = require('passport-local').Strategy;
var BearerStrategy = require('passport-http-bearer').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

require('dotenv').load();

var Users = function() {
  return knex('users');
}

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

passport.use(new BearerStrategy(function(token, done){
  jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded){
    if (err) return done(err);
    done(null, decoded.user);
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
      done(null, {
        user: user,
        accessToken: accessToken
      });
    }).catch(function(err) {
      if(err.notFound) {
        console.log('Creating User...');
        createUser({
          email: email,
          google: true
        }).then(function(user) {
          done(null, {
            user: user,
            accessToken: accessToken
          });
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

function findUserByID(id) {
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
  return Users().where('email', email).first()
  .then(function(user){
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

function createToken(user, accessToken) {
  return new Promise(function(resolve, reject){
    delete user.password;
    var data = {
      user: user
    }

    if(accessToken) data.accessToken = accessToken;

    jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '1d' },
      function(token) {
        resolve(token);
      });
  });
}

router.post('/signup', function(req, res, next) {
  findUserByEmail(req.body.email).then(function(user){
    next(new Error('Email is in use'));
  }).catch(function(err){
    if(err.notFound) {
      createUser({
        email: req.body.email,
        password: req.body.password,
        google: false
      }).then(function(user){
        createToken(user).then(function(token) {
          res.json({
            token: token
          });
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
    if(err) return next(err);
    if(user) {
      createToken(user).then(function(token) {
        res.json({
          token: token
        });
      });
    } else {
      next('Invalid Login');
    }
  })(req, res, next);
});

router.get('/google',
  passport.authenticate('google', { scope: 'email' }));

router.get('/google/callback', function(req, res, next) {
  passport.authenticate('google', function(err, userAndToken){
    console.log('user', userAndToken.user);
    createToken(userAndToken.user, userAndToken.accessToken).then(function(token){
      res.redirect(process.env.CLIENT_CALLBACK + '?token=' + token);
    });
  })(req, res, next);
});

module.exports = {
  router: router,
  passport: passport,
  authenticate: function(req, res, next) {
    passport.authenticate('bearer', function(err, user, info) {
      req.user = user;
      next();
    })(req, res, next);
  }
};
