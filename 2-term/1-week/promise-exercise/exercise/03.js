var file = require('./../promises/fs-promises');

file.readFile('../main.js', 'utf8').then(function (main) {
  file.readFile('../print.js', 'utf8').then(function (print) {
    file.readFile('../logic.js', 'utf8').then(function (logic) {
      file.readFile('../error.js', 'utf8').then(function (error) {
        file.writeFile('../build/app.js', main + print + logic + error, 'utf8').then(function (result) {
          console.log(result);
        })
      })
    })
  })
})
