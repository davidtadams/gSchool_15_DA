var readline = require('readline')
var fs = require('fs')
var moment = require('moment')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is the filename? ", function(filename) {
  fs.stat(filename, function(err, stats) {
    printStats(stats);
    rl.close();
  });
});

function printStats (stats) {
  var size = stats.size;
  console.log('size: ', size, 'bytes');
  var modified_time = moment(stats.mtime).format('YYYY MMM DD');
  console.log('modified time:', modified_time);
}


/* Danny's version with promises */
// var readline = require('readline')
// var fs = require('fs')
// var moment = require('moment')
​
statP('Danny.json')
.then(function (stats) {
  return writeP('test.txt', JSON.stringify(stats))
})
.then(function (filename) {
  console.log('written to', filename)
})
.catch(function (error) {
  console.log(error)
})
​
//Changing it from callback form to promise form
function statP (filename) {
  return new Promise(function (resolve, reject) {
    fs.stat(filename, function (err, stats) {
      if (err) {
        reject(err)
      } else {
        resolve(stats)
      }
    })
  })
}
​
function writeP (filename, content) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(filename, content, function (err) {
      if (err) {
        reject(err)
      } else {
        resolve(filename)
      }
    })
  })
}
