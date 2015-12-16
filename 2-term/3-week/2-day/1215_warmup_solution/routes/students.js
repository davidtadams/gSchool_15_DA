var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var handleError = require('../handleError')
function Students() {
  return knex('students');
}

router.get('/', function(req, res){
  Students().select().then(function(result){
    res.json(result);
  }).catch(function(error){
    handleError(error, res);
  });
});

router.get('/:id', function(req, res){
  Students().where('students.id',req.params.id).first()
    .join('cohorts', 'cohorts.id',  'students.cohort_id')
    .select('students.id', 'students.name', 'cohorts.name as cohort')
    .then(function(result){
    res.json(result);
  }).catch(function(error){
    handleError(error, res);
  });
});

router.post('/', function(req, res){
  Students().insert({
    name: req.body.name,
    cohort_id: req.body.cohort_id
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

  if(req.body.cohort_id) {
    updates.cohort_id = req.body.cohort_id;
  }

  Students().where('id', req.params.id)
  .update(updates).then(function(result){
    res.json(result);
  }).catch(function(error){
    handleError(error, res);
  });
});

router.delete('/:id', function(req, res){
  Students().where('id', req.params.id)
  .del().then(function(result){
    res.json(result);
  }).catch(function(error){
    handleError(error, res);
  });
});


module.exports = router;
