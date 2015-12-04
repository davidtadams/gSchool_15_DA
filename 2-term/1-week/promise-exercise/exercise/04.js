var file = require('./../promises/fs-promises');

var main = file.readFile(__dirname + '/../main.js', 'utf8'),
    print = file.readFile(__dirname + '/../print.js', 'utf8'),
    logic = file.readFile(__dirname + '/../logic.js', 'utf8'),
    error = file.readFile(__dirname + '/../error.js', 'utf8');

// ------------------------------------------------------
//Edit the code below to do a Promise.all()
// ------------------------------------------------------

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
