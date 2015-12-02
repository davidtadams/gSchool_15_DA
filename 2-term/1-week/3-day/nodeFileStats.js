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
