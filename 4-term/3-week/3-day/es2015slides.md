# ES2015

---

## Objective

* Use ES2015 features to write more concise Javascript

---

# Success Criteria

---

* Write an arrow expression.
* Write a class using the new `class` syntax.
* Inherit a class from another using the `class extends` syntax.
* Define an object's properties using new object literal syntaxes.
* Interpolate a string using a String Template.
* Extract values from an object and an array using destructuring.
* Discuss the difference between `var`, `let`, and `const`.
* Define a function using the `...` `rest` operator.
* Define a function using default parameters.
* Call a function using the `...` `spread` operator.

---

# [History of ECMAScript](https://en.wikipedia.org/wiki/ECMAScript#Versions)

---

# [ECMAScript 2015 Compatability Table](http://kangax.github.io/compat-table/es6/)

---

# Transpiler

---

A type of compiler.
A compiler takes source code and outputs machine code.
A transpiler takes source code and outputs more source code.

---

# Babel

Transpiles ES2015 code to ES5.

```sh
npm install babel-cli -g
```

---

To compile a file:
```
babel input.js
```

To compile a file to a file:
```
babel input.js -o output.js
```

To compile and watch a file for changes:
```
babel input.js -o output.js --watch
```

Compile and run a ES6 file in node:
```
babel-node input.js
```

---

# Abstractions all the way down

---

# Arrow Function

---

```js
//basic form
(parameter1, parameter2, parameterN) => {body}
//no parameters
() => {body}
//single statement body
() => body
//single parameter
parameter => {body}
// single parameter and single statement body
parameter => body
```

---

# Class

---

```js
//Basic syntax
class ClassName {
  constructor () {}
  methodName () {}
  get methodName () {}
  set methodName () {}
  static methodName () {}
}

//Inheritance syntax
class ClassName extends ParentClassName {
  constructor () {}
  methodName () {}
  get methodName () {}
  set methodName () {}
  static methodName () {}
}
```

---

# Object Literals

---

```js
//Using variables as a key/value pair
{variableName1, variableName2, variableNameN}

//Evaluating an expression
{[expression]: value}

//Method declarations
{
  functionName () {}
}
```

---

# Template Strings

---

```js
//basic
`Hello World!`

//multiline
`Hello
World!`

//Interpolation
var w = 'world';
`Hello ${w}!`

//tagged
var w = 'world';
tag`Hello ${w}!`
```

---

# Destructuring

---

```js
//object pattern matching
var {a, b} = {a:1, b:2};

//array pattern matching
var [a, b] = [1, 2];
```

---

# Let and Const

---

```js
//let
let variableName = expression;

//const
const variableName = expression;
```

---

# Rest Operator

---

```js
//rest
function (...restName) {}
```

---

# Spread Operator

---

```js
//spread
functionCall(...[]);
```

---

# Default Parameters

---

```js
//default parameter value
function (parameterName = defaultValue) {}
```

---

# Modules

---

```js
// es6
// lib.js
export let variable = 3;
export function bumpVariable() {
  variable++;
}
```

```js
import { variable, bumpVariable } from 'lib';

console.log(variable); // 3
bumpVariable();
console.log(variable); // 4
variable++; // error
```

---

## Success Criteria

---

* Write an arrow expression.
* Write a class using the new `class` syntax.
* Inherit a class from another using the `class extends` syntax.
* Define an object's properties using new object literal syntaxes.
* Interpolate a string using a String Template.
* Extract values from an object and an array using destructuring.
* Discuss the difference between `var`, `let`, and `const`.
* Define a function using the `...` `rest` operator.
* Define a function using default parameters.
* Call a function using the `...` `spread` operator.

---

## Resources

* [Babel: Learn ES2015](https://babeljs.io/docs/learn-es2015/)
* [YDKJS: ES6 & Beyond](https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20%26%20beyond)
* [ECMAScript 2015 in Node.js](https://nodejs.org/en/docs/es6/)
* [ECMAScript 2015 Standard](http://www.ecma-international.org/ecma-262/6.0/index.html)
* [TC39 Meeting Notes](https://github.com/tc39/tc39-notes)
