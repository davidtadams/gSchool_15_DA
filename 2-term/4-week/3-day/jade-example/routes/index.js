var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/login', function(req, res, next) {
  //check with database - login credentials

  //redirect if incorrect
  res.redirect('/signup')
});

module.exports = router;
