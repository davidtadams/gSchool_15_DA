var file = require('./../promises/fs-promises');

file.readFile('../main.js', 'utf8', function (main) {
  file.writeFile('../build/main.js', main, 'utf8', function (result) {
    console.log(result);
  })
})
