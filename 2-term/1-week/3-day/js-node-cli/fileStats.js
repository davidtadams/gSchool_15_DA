var readline = require('readline')
var fs = require('fs')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is the filename? ", function(filename) {
  fs.stat(filename, function(err, stats) {
    if (!err) {
      printStats(filename, stats);
    }
    else {
      console.log('File not found.');
    }
    rl.close();
  });
});

function printStats(name, stats) {
  var size = stats.size;
  console.log('File size:', size);
  console.log('File name:', name);
}
