var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.get('/', function(request, response){
  response.render('index', { title: 'Hey', message: 'Bye World'})
  // var options = {
  //   root: __dirname,
  //   dotfiles: 'deny',
  //   headers: {
  //       'x-timestamp': Date.now(),
  //       'x-sent': true
  //   }
  // };
  // response.sendFile('index.html', options, function(err){
  //   if (err) {
  //     console.log(err);
  //     response.status(err.status).end();
  //   }
  //   else {
  //     console.log('Sent:', fileName);
  //   }
  // });
})

app.get('/name/:name', function(request, response){
  console.log(request);
  response.send('Hello ' + request.params.name)
});

app.get('/cohorts/:id/daily_plans/:date', function(request, response){
  console.log(request);
  response.send(request.params.id + ' ' + request.params.date);
});

app.listen(8080);
