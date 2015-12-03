var file = require('./../promises/fs-promises');

file.readFile('../main.js', 'utf8', function (main) {
  file.readFile('../print.js', 'utf8', function (print) {
    file.readFile('../logic.js', 'utf8', function (logic) {
      file.readFile('../error.js', 'utf8', function (error) {
        file.writeFile('../build/app.js', main + print + logic + error, 'utf8', function (result) {
          console.log(result);
        })
      })
    })
  })
})
