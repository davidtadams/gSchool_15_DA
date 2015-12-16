var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Farms() {
  return knex('farms')
}

router.get('/', function(req, res, next) {
  Farms().select().then(function (farms) {
    res.json(farms);
  }).catch(function (err) {
    res.json(err);
  });
});


router.post('/', function (req, res, next) {
  Farms().insert({
    name: req.body.name,
  }, 'id')
  .then(function (farmid) {
    res.json(farmid)
  }).catch(function (err) {
    res.json(err);
  });
})


module.exports = router;
