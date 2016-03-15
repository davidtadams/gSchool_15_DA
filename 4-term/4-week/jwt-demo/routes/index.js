var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/secret', function(req, res){
  if(req.user.name == "CJ") {
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
