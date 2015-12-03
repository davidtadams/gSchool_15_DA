var file = require('./../promises/fs-promises');

var main = file.readFile('../main.js', 'utf8'),
    print = file.readFile('../print.js', 'utf8'),
    logic = file.readFile('../logic.js', 'utf8'),
    error = file.readFile('../error.js', 'utf8');

Promise.all([main, print, logic, error]).then(function (files) {
  return file.writeFile('../build/app.js', files.join(''), 'utf8')
}).then(function (result) {
  console.log(result);
});
