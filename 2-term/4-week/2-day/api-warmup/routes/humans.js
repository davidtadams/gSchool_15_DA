var express = require('express')
var router = express.Router()

var api = require('../api')

function handleQuery(queryPromise, res) {
  if (!res) {
    console.log('No response object passed into handleQuery!')
    return
  }
  queryPromise
  .then(function (results) {
    res.json(results)
  })
  .catch(function (err) {
    res.statusCode = 503
    res.json(err)
  })
}

router.get("/", function(req, res) {
  handleQuery(api.humans.list(), res)
})

router.get("/:id", function(req, res) {
  handleQuery(api.human.read(req.params.id), res)
})

router.post("/", function(req, res) {
  handleQuery(api.human.create(req.body), res)
})

router.put("/:id", function(req, res) {
  handleQuery(api.human.update(req.params.id, req.body), res)
})

router.delete("/:id", function(req, res) {
  handleQuery(api.human.delete(req.params.id), res)
})

module.exports = router
