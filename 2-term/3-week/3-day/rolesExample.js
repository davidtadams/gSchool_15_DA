var pg = require('pg')
var connectionString = 'postgres://jim:secret@localhost/roleslesson'

pg.connect(connectionString, function(err, client, done) {
  //do something
  if (err) {
    console.log(err)
    done();
    return;
  }
  client.query('SELECT * FROM finance', function(err, results) {
    done();
    if (err) {
      console.log(err);
      return;
    }
    console.log(results);
  })
});

