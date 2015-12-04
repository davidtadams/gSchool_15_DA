var file = require('./../promises/fs-promises');

var main, print, logic, error;

file.readFile(__dirname + '/../main.js', 'utf8').then(function (mainjs) {
  main = mainjs
  return file.readFile(__dirname + '/../print.js', 'utf8')
}).then(function (printjs) {
  print = printjs
  return file.readFile(__dirname + '/../logic.js', 'utf8')
}).then(function (logicjs) {
  logic = logicjs
  return file.readFile(__dirname + '/../error.js', 'utf8')
}).then(function (errorjs) {
  error = errorjs
  return file.writeFile(__dirname + '/../build/app.js', main + print + logic + error, 'utf8')
}).then(function (result) {
  console.log(result);
});
