var file = require('./../promises/fs-promises');

file.readFile(__dirname + '/../main.js', 'utf8', function (main) {
  file.readFile(__dirname + '/../print.js', 'utf8', function (print) {
    file.readFile(__dirname + '/../logic.js', 'utf8', function (logic) {
      file.readFile(__dirname + '/../error.js', 'utf8', function (error) {
        file.writeFile(__dirname + '/../build/app.js', main + print + logic + error, 'utf8', function (result) {
          console.log(result);
        })
      })
    })
  })
})
