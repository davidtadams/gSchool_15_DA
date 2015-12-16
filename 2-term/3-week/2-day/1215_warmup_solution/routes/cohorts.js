var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var handleError = require('../handleError')

function Cohorts() {
  return knex('cohorts');
}

router.get('/', function(req, res){
  Cohorts().select().then(function(result){
    res.json(result);
  }).catch(function(error){
    handleError(error, res);
  });
});

router.get('/:id', function(req, res){
  Cohorts().where('cohorts.id',req.params.id).first()
  // .join('students', 'students.cohort_id', 'cohorts.id')
  // .select('students.id', 'students.name')
  .then(function(result){
    res.json(result);
  }).catch(function(error){
    handleError(error, res);
  });
});

router.post('/', function(req, res){
  Cohorts().insert({
    name: req.body.name
  }, 'id').then(function(result){
    res.json(result);
  }).catch(function(error){
    handleError(error, res);
  });

})

router.put('/:id', function(req, res){
  var updates = {};

  if(req.body.name) {
    updates.name = req.body.name;
  }

  Cohorts().where('id', req.params.id)
  .update(updates).then(function(result){
    res.json(result);
  }).catch(function(error){
    handleError(error, res);
  });
});

router.delete('/:id', function(req, res){
  Cohorts().where('id', req.params.id)
  .del().then(function(result){
    res.json(result);
  }).catch(function(error){
    handleError(error, res);
  });
});


module.exports = router;
