# ES6 Tail Calls, Modules, and Subclassing Builtins

## Objectives

* Describe what a tail call is and explain what triggers a tail call optimization
* Describe the differences between es6 modules and node's module system
* Describe what's changed about extending the prototype of built in types in es6

## Tail Calls

Tail calls are an optimization added to most functional-esque languages that allow for recursion without hitting call stack limits. A tail call happens whenever a function calls another function as it's last action. Languages that have implemented tail call optimizations don't need to keep the existing function call on the stack anymore, they're able to essentially just replace the currently executing frame in the stack with the new function call. This ensures that you don't blow up the stack when recursing heavily.

Try the following code in your browser:

```javascript
function factorial(n, acc) {
  'use strict';
  if (typeof(acc) === 'undefined') {
    acc = 1;
  }
  if (n <= 1) {
    return acc;
  }
  return factorial(n - 1, n * acc);
}

factorial(100000);
```

It will most likely hit a call stack limit (unless you're going through this curriculum after your browser has implemented these es2015 optimizations!) As of the time of this writing, these optimizations are not implemented in any of the released versions of node either. Babel can do some magic to transpile this into something that will work, but to do that we have to use a default argument for acc as well:

```javascript
function factorial(n, acc = 1) {
  'use strict';
  if (n <= 1) {
    return acc;
  }
  return factorial(n - 1, n * acc);
}
```

If you run that through the [online babel translator](https://babeljs.io/repl/#?experimental=false&evaluate=true&loose=false&spec=false&code=function%20factorial(n%2C%20acc%20%3D%201)%20%7B%0A%20%20'use%20strict'%3B%0A%20%20if%20(n%20%3C%3D%201)%20%7B%0A%20%20%20%20return%20acc%3B%0A%20%20%7D%0A%20%20return%20factorial(n%20-%201%2C%20n%20*%20acc)%3B%0A%7D) you'll get code that looks something like this:

```javascript
'use strict';

function factorial(_x2) {
  var _arguments = arguments;
  var _again = true;

  _function: while (_again) {
    var n = _x2;

    'use strict';
    _again = false;
    var acc = _arguments.length <= 1 || _arguments[1] === undefined ? 1 : _arguments[1];
    if (n <= 1) {
      return acc;
    }
    _arguments = [_x2 = n - 1, n * acc];
    _again = true;
    acc = undefined;
    continue _function;
  }
}
```

Which will, essentially, just run a while loop until the factorial has been determined. It's important to note that it can _only_ optimize recursive functions that end with a single function call. This means our standard fibonacci example:

```javascript
function fib(val) {
  'use strict';
  if (val == 0) {
    return 0;
  }
  if (val == 1) {
    return 1;
  }
  return fib(val - 1) + fib(val - 2);
}
```

Can not be optimized. This expands out to multiple function calls, so there's no way to simply replace the currently executing frame with a single new one.

#### Exercise

Write out, in your own words, what triggers tail call optimization and describe what a tail call is.

## Modules

The es6 module system is similar to the way that node (commonjs) handles modules, but with a few distinct differences.

1. Node.js modules are always loaded synchronously, they block execution until they've been required in. The es6 module system is designed to work either synchronously or asynchronously, as you don't want to block the browser while loading in external scripts.
2. The es6 system doesn't require the entire script to be executed to require in functionality. It can statically analyze code to find the exported variables, and only bring those in. Node, the entire script is run through when required, and that provides the module.exports object that is then utilized.
3. The es6 system supports cyclic dependencies in a cleaner fashion. Node somewhat supports cyclic dependencies by attaching to an empty exports object, and then allowing the cyclical script populate it afterwards. The es6 system exports _bindings_ not _values_. We'll get to this in a minute, but it's an important distinction that allows for better cyclical dependency handling.
4. There are some syntactic differences. Instead of having a `module.exports` object that you attach things to, you instead use the `export` statement before defining a function or a variable. Instead of using `require`, you use `import`, and you can specify which specific exported things you are going to import. We'll show how this looks in a minute.
5. Exports are bound directly to the original object via an _immutable binding_, in the node world they're just copied over. This means you can do whatever you want with those variables in the node world, but in the es6 world, those can _only_ be modified via functions exporting from that lib.

  ```javascript
  // node.js
  // lib.js
  var variable = 3;
  module.exports = {
    variable: variable,
    bumpVariable: function() {
      variable++;
    }
  }

  // main.js
  var variable = require('lib').variable;
  var bumpVariable = require('lib').bumpVariable;

  console.log(variable); // 3
  bumpVariable();
  console.log(variable); // 3
  variable++;
  console.log(variable); // 4

  // es6
  // lib.js
  export let variable = 3;
  export function bumpVariable() {
    variable++;
  }

  import { variable, bumpVariable } from 'lib';

  console.log(variable); // 3
  bumpVariable();
  console.log(variable); // 4
  variable++; // error
  ```

6. You can have both default exports and named exports in es6, this is not possible in node.

  ```javascript
  // lib.js
  export let variable = 3;
  export function bumpVariable() {
    variable++;
  }
  export default function() {
    console.log('hello!');
  }

  // main.js
  import lib, { variable, bumpVariable } from lib;
  console.log(variable); // 3
  lib(); // hello!
  ```

### Further Reading

* [CommonJS vs. es6](http://jsmodules.io/cjs.html)
* [Exploring JS: Chapter 17 - Modules](http://exploringjs.com/es6/ch_modules.html)

#### Exercise

Write out, in your own words, 3 of the differences between the node system for modules, and the new es6 system.

## Subclassing built-in constructors

In es5 and before, there were [hacky workarounds](http://speakingjs.com/es5/ch28.html) for subclassing builtins (such as Array, Date, Error, etc.) that made it difficult to create subclasses that utilized the functionality of these base types. Important to note that transpilers can't natively support some of this behavior. This is one of those things that needs engine support to work properly.

Try the following code out in Node:

```javascript
class MyArray extends Array {
  constructor(len) {
    super(len);
  }
}

let myArr = new MyArray(0);
console.log(myArr.length); // 0
myArr[0] = 'foo';
console.log(myArr.length); // 1
```

Now try that in [the babel repl](https://babeljs.io/repl/). Take the transpiled code, and run it in your web browser. This may start to work in your browser when you get to this curriculum, but currently, it should return 0 in both cases.

#### Exercise

Build a subclassed version of Date called `Christmas`, that will always return a new Date object that's set to Christmas of the year passed into the constructor.

```javascript
var xmas2015 = new Christmas(2015);
console.log(xmas2015); // Fri Dec 25 2015 00:00:00 GMT-0800 (PST)
var xmas2012 = new Christmas(2012);
console.log(xmas2012); // Tue Dec 25 2012 00:00:00 GMT-0800 (PST)
```

Once you have it working, try pasting it into the [babel repl](https://babeljs.io/repl/) and see what happens when you try to use it in the browser.

## Next Step

:sparkles: Congratulations! :sparkles:

Now on to some new data structures, [Map and Set](05_ES6_Map_and_Set.md)!
