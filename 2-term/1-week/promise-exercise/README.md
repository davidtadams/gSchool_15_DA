# Promise Exercise

There are two files: concat.js and copy.js. As their name entail, one file copies the content of a js file
and the other concatenates multiple js files together into the build directory.

Step by step, use promises to remove all callbacks and destroy the pyramid of doom!

#Copy.js

##00

"Promisify" the functions. Using the `then` method, remove the callbacks from the functions.

##01

Chain the promises. Close the functions and `return` the promise.

#Concat.js

##02

Repeat step 00.

##03

Repeat step 01.

##04

Use Promise.all() to simplify your solution for 03.

