# Promise Exercise

There are two files in the callback directory: concat.js and copy.js. As their name entail, one file copies the content of a js file
and the other concatenates multiple js files together into the build directory.

Step by step, use promises to remove all callbacks and destroy the pyramid of doom!

## Usage

Check out the callback directory and look at the files. Notice the "callback hell".

Now `cd` into the exercise directory and modify each js file at a time following the instructions below.

Run by typing `node 00.js` in the terminal.

You have successfully modified the file if your terminal logs the correct copied or concatenated js files:

copy -

    function hello() {
      console.log("hello world");
    }

concat -

    function hello() {
      console.log("hello world");
    }
    alert('I print')
    var lib = require('lib/lib.js')

    lib.success()
    var error {
      errors: "none",
    }

## Exercise

### Copy.js

### 00

"Promisify" the functions. Using the `then` method, remove the callbacks from the functions.

### 01

Chain the promises. Close the functions and `return` the promise.

##Concat.js

### 02

Repeat step 00.

### 03

Repeat step 01.

### 04

Use Promise.all() to simplify your solution for 03.
