var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

require('dotenv').load();

var user = {
  name: "CJ",
  password: 123
}

router.post('/login', function(req, res) {
  console.log(req.body);

  if(req.body.name == "CJ"
    && req.body.password == "123") {
      //YAY

      // jwt.sign accepts the payload, secret, options and a callback
      // We set the token to expire in 1 day.
      // After 1 day, the token will no longer be verifiable, and a new token will need to be obtained
      jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1d' }, function(token) {
        console.log(token);
        res.json({
          token: token
        });
      });
    } else {
      res.status(401);
      res.json({
        message: "UnAuthorized"
      })
    }
});

module.exports = router;
