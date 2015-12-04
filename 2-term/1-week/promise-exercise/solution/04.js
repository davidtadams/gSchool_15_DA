var file = require('./../promises/fs-promises');

var main = file.readFile(__dirname + '/../main.js', 'utf8'),
    print = file.readFile(__dirname + '/../print.js', 'utf8'),
    logic = file.readFile(__dirname + '/../logic.js', 'utf8'),
    error = file.readFile(__dirname + '/../error.js', 'utf8');

Promise.all([main, print, logic, error]).then(function (files) {
  return file.writeFile(__dirname + '/../build/app.js', files.join(''), 'utf8')
}).then(function (result) {
  console.log(result);
});
