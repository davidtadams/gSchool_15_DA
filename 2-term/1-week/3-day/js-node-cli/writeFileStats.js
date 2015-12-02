var readline = require('readline')
var fs = require('fs')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is the filename? ", function(filename) {
  fs.stat(filename, function(err, stats) {
    if (!err) {
      getOutputFile(stats, filename);
    }
    else {
      console.log('File not found.');
    }
  });
});

function getOutputFile(stats, filename) {
  var prompt = "What is the output filename to save the stats to? ";
  rl.question(prompt, function(outputFilename) {
    writeOutputFile(stats, filename, outputFilename);
  });
}

function writeOutputFile(stats, filename, outputFilename) {
  var size = stats.size;
  var name = filename;
  var execStatus = stats.mode;
  var lastTimeModified = stats.mtime;
  var fileString = 'File size: ' + size + '\n';
  fileString += 'File name: ' + name + '\n';
  fileString += 'Executable status: ' + execStatus + '\n';
  fileString += 'Last time modified: ' + lastTimeModified + '\n';

  fs.writeFile(outputFilename, fileString, function(err) {
    if (err) {
      console.log('There was an error writing to file.');
      return false;
    }
  })

  rl.close();
}
