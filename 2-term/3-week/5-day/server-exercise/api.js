var pg = require('pg')
var connectionString = 'postgres://dadams@localhost/llama_farm'

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
  llamas: {
    read: function() {
      return runQuery('SELECT * FROM llamas;')
        .then(function(results) {
          return results.rows
        })
    }
  },
  llama: {
    create: function(parameters) {
      return runQuery('INSERT INTO llamas VALUES (default, $1, $2)',
          [parameters.name, parameters.image])
    },
    update: function(id, parameters) {
      return runQuery('UPDATE llamas SET name=$2 WHERE id=$1',
          [id, parameters.name])
    },
    delete: function(id) {
      return runQuery('DELETE FROM llamas WHERE id=$1', [id])
    }
  }
}
