var express = require('express');
var router = express.Router();

router.get('/secret', function(req, res){
  if(req.user && req.user.name == "CJ") {
    res.json({
      secret: 42
    });
  } else {
    res.status(401);
    res.json({
      message: "UnAuthorized"
    });
  }
});

module.exports = router;
