var file = require('./../promises/fs-promises');

var main = file.readFile('../main.js', 'utf8'),
    print = file.readFile('../print.js', 'utf8'),
    logic = file.readFile('../logic.js', 'utf8'),
    error = file.readFile('../error.js', 'utf8');

//promise.all() bellow

file.readFile('../main.js', 'utf8').then(function (mainjs) {
  main = mainjs
  return file.readFile('../print.js', 'utf8')
}).then(function (printjs) {
  print = printjs
  return file.readFile('../logic.js', 'utf8')
}).then(function (logicjs) {
  logic = logicjs
  return file.readFile('../error.js', 'utf8')
}).then(function (errorjs) {
  error = errorjs
  return file.writeFile('../build/app.js', main + print + logic + error, 'utf8')
}).then(function (result) {
  console.log(result);
});
