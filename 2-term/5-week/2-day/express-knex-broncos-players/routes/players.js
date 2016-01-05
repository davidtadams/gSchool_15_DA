var express = require('express');
var knex = require('../db/knex');
var router = express.Router();

function Players() {
  return knex('player');
}

router.get('/', function(req, res) {
  Players().select().then(function(players){
    res.render('players', {
      title: 'Broncos Players',
      players: players,
      user: req.user
    });
  });
});

router.get('/:id', function(req, res){
  Players().select().where('id', req.params.id).first().then(function(player){
    res.render('player', {
      title: player.first_name,
      player: player,
      user: req.user
    })
  });
});

module.exports = router;
