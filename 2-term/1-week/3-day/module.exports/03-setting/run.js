var someFunction = require('./function')
var someArray = require('./array')
var someObject = require('./object')
var someNumber = require('./scalar/number')
var someString = require('./scalar/string')

// in ./function.js export a function
// make the return value whatever you like
// make sure that this line prints the result of your function
console.log('A function...')
console.log(someFunction())

// make this line print [1,2,34,56]
console.log('An array...')
console.log(someArray)

// make this line print {make: 'Toyota', model: 'Prius'}
console.log('An object...')
console.log(someObject)

// make this line print 24
console.log('A number...')
console.log(someNumber)

// make this line print "yay!"
console.log('A string...')
console.log(someString)
