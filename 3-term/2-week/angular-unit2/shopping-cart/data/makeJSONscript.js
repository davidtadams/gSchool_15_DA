var fs = require('fs')
var data = require('./data.js')
var newJSON = JSON.stringify(data, null, 2);

fs.writeFile('./catalog.json', newJSON, (error) => {
  if (error) {
    console.log(error)
  }
})
