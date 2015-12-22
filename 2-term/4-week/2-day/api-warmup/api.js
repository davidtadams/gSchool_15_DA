var pg = require('pg')
var connectionString = 'postgres://dadams@localhost/dogs_owners'

function runQuery (query, parameters) {
  return new Promise(function (resolve, reject) {
    pg.connect(connectionString, function (err, client, done) {
      if (err) {
        reject(err)
        console.log('error connecting');
        done()
        return
      }
      client.query(query, parameters, function (err, results) {
        done()
        if (err) {
          reject(err)
          return
        }
        resolve(results)
      })
    })
  })
}

module.exports = {
  humans: {
    list: function() {
      return runQuery('SELECT humans.id AS human_id,\
                              humans.name AS human_name,\
                              humans.location,\
                              dogs.id AS dog_id,\
                              dogs.name AS dog_name,\
                              dogs.breed,\
                              dogs.age\
                              FROM humans INNER JOIN dogs ON dogs.owner_id=humans.id;')
        .then(function(results) {
          console.log(results);
          return results.rows
        })
    }
  },
  human: {
    read: function(id) {
      return runQuery('SELECT humans.id AS human_id,\
                              humans.name AS human_name,\
                              humans.location,\
                              dogs.id AS dog_id,\
                              dogs.name AS dog_name,\
                              dogs.breed,\
                              dogs.age\
                              FROM humans INNER JOIN dogs ON dogs.owner_id=humans.id\
                              WHERE humans.id=$1;', [id])
        .then(function(results) {
          return results.rows
        })
    },
    create: function(parameters) {
      return runQuery('INSERT INTO humans VALUES (default, $1)',
            [parameters.name])
    },
    update: function(id, parameters) {
      return runQuery('UPDATE humans SET name=$2 WHERE id=$1',
          [id, parameters.name])
    },
    delete: function(id) {
      return runQuery('DELETE FROM humans WHERE id=$1', [id])
    }
  },
  dogs: {
    list: function() {
      return runQuery('SELECT * FROM dogs;')
        .then(function(results) {
          return results.rows
        })
    }
  },
  dog: {
    read: function(id) {
      return runQuery('SELECT * FROM dogs WHERE id=$1', [id])
        .then(function(results) {
          return results.rows[0]
        })
    },
    create: function(parameters) {
      return runQuery('INSERT INTO dogs VALUES (default, $1, $2, $3)',
            [parameters.name, parameters.breed, parameters.age])
    },
    update: function(id, parameters) {
      return runQuery('UPDATE dogs SET name=$2 WHERE id=$1',
          [id, parameters.name])
    },
    delete: function(id) {
      return runQuery('DELETE FROM dogs WHERE id=$1', [id])
    }
  }
}
