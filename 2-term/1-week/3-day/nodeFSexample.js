#!/usr/local/bin/node

var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", function(name) {
  console.log("Your name is:", name);
  rl.question("What is your age? ", function(age) {
    console.log("Your age is:", age);
    var person = createPerson(name, age);
    fs.writeFile(name + '.json', JSON.stringify(person), function(err) {
      if (err) {
        console.log();
        return;
      }
    })
    rl.close();
  });
});

function createPerson (name, age) {
  var person = {
    name: name,
    age: age
  }
  return person;
}
