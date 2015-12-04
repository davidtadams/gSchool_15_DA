var fs = require('fs');

fs.readFile('../main.js', 'utf8', function (err, main) {
  fs.readFile('../print.js', 'utf8', function (err, print) {
    fs.readFile('../logic.js', 'utf8', function (err, logic) {
      fs.readFile('../error.js', 'utf8', function (err, error) {
        fs.writeFile('../build/app.js', main + print + logic + error, 'utf8', function (err, result) {
          console.log(result);
        })
      })
    })
  })
})
