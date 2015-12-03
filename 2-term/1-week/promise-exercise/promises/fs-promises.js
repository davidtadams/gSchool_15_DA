var fs = require('fs')

module.exports = {
  readFile: function(path, type) {
    return new Promise(function (resolve, reject) {
      fs.readFile(path, type, function (err, data) {
        if (err) {
          reject(err)
        }
        resolve(data);
      })
    })
  },
  writeFile: function(path, message, type) {
    return new Promise(function (resolve, reject) {
      fs.writeFile(path, message, type, function (err, data) {
        if (err) {
          reject(err)
        }
        resolve(message);
      })
    })
  }
}
