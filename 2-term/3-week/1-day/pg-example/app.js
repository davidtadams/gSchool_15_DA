var Express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var api = require('./api')
var app = Express()

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({extended: false}))

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

app.get('/cities', function (req, res) {
  handleQuery(api.cities.read(), res)
})

app.post('/cities', function (req, res) {
  handleQuery(api.city.create(req.body), res)
})

app.get('/cities/:id', function (req, res) {
  handleQuery(api.city.read(req.params.id), res)
})

app.put('/cities/:id', function (req, res) {
  handleQuery(api.city.update(req.params.id, req.body), res)
})

app.delete('/cities/:id', function (req, res) {
  handleQuery(api.city.delete(req.params.id), res)
})

app.listen(8080, function () {
  console.log('server listening on port 8080')
})
