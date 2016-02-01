router.get('/http', function(req, res, next) {

  var options = {
    host: 'www.reddit.com',
    path: '/.json',
    // method: "POST",
    // headers: {
    //   'User-Agent': 'request'
    // }
  };

  http.request(options, function(response) {
    var str = '';

    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (data) {
      str += data;
    });

    //the whole response has been recieved, so we just print it out here
    response.on('end', function (hello) {
      res.json({ title: JSON.parse(str) });
    });

  }).end();
});

router.get('/request', function(req, res, next) {

  var options = {
    url: 'https://www.reddit.com/.json',
    // method: "POST",
    // headers: {
    //   'User-Agent': 'request'
    // }
  };

  request(options, function (error, response, body) {
      res.json({ title: JSON.parse(body) });
  });

});

router.get('/unirest', function(req, res, next) {
  unirest.get('https://reddit.com/.json')
  // .header('Accept', 'application/json')
  // .send({ "parameter": 23, "foo": "bar" })
  .end(function (response) {
    res.json({ title: response.body });
  });
});
