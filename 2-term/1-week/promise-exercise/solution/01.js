var file = require('./../promises/fs-promises');

file.readFile('../main.js', 'utf8').then(function (main) {
  return file.writeFile('../build/main.js', main, 'utf8')
}).then(function (result) {
  console.log(result);
})
