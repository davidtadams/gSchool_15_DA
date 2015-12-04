var file = require('./../promises/fs-promises');

file.readFile(__dirname + '/../main.js', 'utf8').then(function (main) {
  file.readFile(__dirname + '/../print.js', 'utf8').then(function (print) {
    file.readFile(__dirname + '/../logic.js', 'utf8').then(function (logic) {
      file.readFile(__dirname + '/../error.js', 'utf8').then(function (error) {
        file.writeFile(__dirname + '/../build/app.js', main + print + logic + error, 'utf8').then(function (err, result) {
          console.log(result);
        })
      })
    })
  })
})
