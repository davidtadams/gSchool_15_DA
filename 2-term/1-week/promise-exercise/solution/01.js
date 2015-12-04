var file = require('./../promises/fs-promises');

file.readFile(__dirname + '/../main.js', 'utf8').then(function (main) {
  return file.writeFile(__dirname + '/../build/main.js', main, 'utf8')
}).then(function (result) {
  console.log(result);
})
