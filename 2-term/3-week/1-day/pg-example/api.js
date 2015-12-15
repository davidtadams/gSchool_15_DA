var pg = require('pg')
var connectionString = 'postgres://postgres@localhost/pg'

function runQuery (query, parameters) {
  return new Promise(function (resolve, reject) {
    pg.connect(connectionString, function (err, client, done) {
      if (err) {
        reject(err)
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
  cities: {
    read: function () {
      return runQuery('SELECT * FROM cities;')
    }
  },
  city: {
    create: function (parameters) {
      return runQuery('INSERT INTO cities VALUES (default, $1, $2)',
        [parameters.city, parameters.location])
    },
    read: function (id) {
      return runQuery('SELECT * FROM cities WHERE id=$1', [id])
        .then(function (results) {
          return results.rows[0]
        })
    },
    update: function (id, parameters) {
      return runQuery('UPDATE cities SET city=$2, location=$3 WHERE id=$1 ',
        [id, parameters.city, parameters.location])
    },
    delete: function (id) {
      return runQuery('DELETE FROM cities WHERE id=$1', [id])
    }
  }
}
