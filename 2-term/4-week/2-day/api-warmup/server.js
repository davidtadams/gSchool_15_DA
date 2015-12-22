var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

var dogsRoute = require('./routes/dogs')
var humansRoute = require('./routes/humans')

var app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/dogs', dogsRoute)
app.use('/humans', humansRoute)

app.listen(8080, function() {
  console.log('Server running on port 8080')
})
