var express = require('express');
var router = express.Router();
var mongodb = require('mongodb')
var url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/boardgames'

router.get('/', function(req, res, next) {
  mongodb.MongoClient.connect(url, function(err, db) {
    var games = db.collection('games');
    games.find().toArray(function (err, games) {
      res.json({ games: games });
    })
  })
});

router.post('/', function(req, res, next) {
  mongodb.MongoClient.connect(url, function(err, db) {
    var games = db.collection('games');
    games.insert({name: req.body.name}, function (err, data) {
      res.json({ data: data });
    })
  })
});

router.put('/:id', function(req, res, next) {
  var newName = req.body.name
  var id = req.params.id
  mongodb.MongoClient.connect(url, function(err, db) {
    var games = db.collection('games');
    var ID = mongodb.ObjectId(id)
    games.updateOne({_id: ID}, {$set: {name: newName}}, function (err, data) {
      res.json({ data: data });
    })
  })
});

router.delete('/:id', function(req, res, next) {
  var id = req.params.id
  mongodb.MongoClient.connect(url, function(err, db) {
    var games = db.collection('games');
    var ID = mongodb.ObjectId(id)
    games.remove({_id: ID}, function (err, data) {
      res.json({ data: data });
    })
  })
});

module.exports = router;
