// var someObject = require('./base')
var someObject = require('../solutions/02-properties')

console.log('Logging a number...');
// make the following line print 42
console.log(someObject.answerToLifeAndEverything)

console.log('Logging an object...');
// make the following line print some "Joe" and "32"
console.log(someObject.person.name)
console.log(someObject.person.age)

console.log('Logging the result of a function...');
// make the following line print "Hello world"
console.log(someObject.helloWorld())

console.log('Logging an array...');
// make the following line print "Cod - Salmon - Trout"
console.log(someObject.fishies.join(' - '))
