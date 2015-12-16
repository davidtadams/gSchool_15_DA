var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Alpacas() {
  return knex('alpacas')
}

function farmsAlpacas() {
  return knex('farms_alpacas');
}

router.get('/', function(req, res, next) {
  Alpacas().select().then(function (alpacas) {
    res.json(alpacas);
  }).catch(function (err) {
    res.json(err);
  });
});


router.post('/', function (req, res, next) {
  knex.transaction(function (trx) {
    return Alpacas().insert({
      name: req.body.name,
    }, 'id')
    .transacting(trx)
    .then(function (alpaca) {
      return farmsAlpacas().insert({
        alpaca_id: alpaca[0],
        farm_id: req.body.farm_id
      }, 'id')
      .transacting(trx)
    })
    .then(trx.commit)
    .catch(trx.rollback)
  }).then(function (result) {
    res.json(result)
  }).catch(function (err) {
    res.json(err);
  });
})

module.exports = router;
