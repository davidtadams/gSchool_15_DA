var fs = require('fs');

fs.readFile('../main.js', 'utf8', function (err, file) {
  fs.writeFile('../build/app.js', file, 'utf8', function (err, result) {
    console.log(result);
  })
})
