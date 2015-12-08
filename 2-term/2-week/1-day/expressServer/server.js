var http = require('http')
var Express = require('express')
var serveStatic = require('serve-static')
var cors = require('cors')
var morgan = require('morgan')

//https://www.npmjs.com/package/request
var request = require('request')

var app = Express()

app.set('view engine', 'jade');

app.use(cors())
app.use(morgan('combined'))

app.use(serveStatic('./public', {'index': ['index.html', 'index.htm']}))

app.get('/chris', function(req, res) {
  //make http get request to chris' server
  request('http://10.6.81.24:3000/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
      res.send(body)
    }
    res.send('error')
  })
})

app.get('/mike', function(req, res) {
  //make http get request to chris' server
  request('http://10.6.82.192:3333/info', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
      var data = JSON.parse(body);
      // var html = "<!DOCTYPE html><html><head><meta charset='utf-8'><title>David Server</title></head>";
      // html += '<body><ul><li>Name: ' + data.name + '</li>';
      // html += '<li>Age: ' + data.age + '</li>';
      // html += '<li>Height: ' + data.height + '</li></ul></body>'
      // html += '</html>';
      // res.send(html);

      res.render('index', {name: data.name, age: data.age, height: data.height});
      return;
    }
    res.send('error')
  })
})

var me = {
  name: 'David',
  age: 27,
  height: '5-10'
}

app.get('/info', function(req, res) {
  res.send(me);
})

app.listen(3000, function(){
  console.log('Starting a server on localhost:3000');
})
