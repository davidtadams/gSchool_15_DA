var fs = require('fs')

module.exports = {
  readFile: function(path, type) {
    console.log('read');
    return new Promise(function (resolve, reject) {
      fs.readFile(path, type, function (err, data) {
        if (err) {
          reject(err)
        }
        console.log(err, data);
        resolve(data);
      })
    })
  },
  writeFile: function(path, message, type) {
    console.log('write');
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
