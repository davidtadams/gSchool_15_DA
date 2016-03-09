# New Features in ES6 Part 1

## Objectives

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

### Stretch Objectives

* Use ES6 features in an Angular, Express, React, etc. application.
* Rewrite some of the examples on this page to include additional ES6 features.

## Arrow Expression `=>`

[_[Babel docs]_](http://babeljs.io/docs/learn-es2015/#arrows-and-lexical-this)
[_[MDN]_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
[_[ES6 In Depth]_](http://ponyfoo.com/articles/es6-arrow-functions-in-depth)

An arrow expression is a shortcut for writing functions.
One key difference is that `=>` automatically binds to the parent's `this`.
It also explicitly will return the last line of the function if no return is specified.

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

### Example: 2015 vs ES5

```js
//ES6:
var square = a => a * a;

//ES5:
var square = function square(a) {
  return a * a;
};
```

### Example: 2015 vs ES5

```js
//ES6:
var add = (a, b) => a + b;

//ES5:
var add = function add(a, b) {
  return a + b;
};
```

### Example: Binding this

```js
//ES6:
var cat = {
  _name: 'cat',
  _words: ['meow', 'mrow', 'purr'],
  sounds: function () {
    this._words.forEach((w) => {
      // NOTE: this refers to cat inside the forEach because arrow function binds parent's this.
      console.log(this._name + ' goes ' + w);
      return this;
    })
  }
};

//ES5:
var cat = {
  _name: 'cat',
  _words: ['meow', 'mrow', 'purr'],
  sounds: function sounds() {
    var _this = this; //Aliasing this
    this._words.forEach(function (w) {
      // NOTE: we had to alias this because otherwise it would refer the the forEach's this.
      console.log(_this._name + ' goes ' + w);
      return _this;
    });
  }
};
```

### Example: Binding this

```
function MyModule(){

  this.foo = 'bar';

  var es5Func = function (){
    console.log(this.foo); //`this` refers to the current function
  };

  var es6Func = () => {
    console.log(this.foo); //`this` refers to MyModule's `this`
  };

  es5Func(); //logs undefined

  es6Func(); //logs 'bar'

}
```


### Exercise

 - [Here](https://github.com/gSchool/es2015-with-babeljs/blob/master/exercises/arrow_expression_exercise.js)

## Class

[_[Babel docs]_](http://babeljs.io/docs/learn-es2015/#classes)
[_[MDN]_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
[_[ES6 In Depth]_](http://ponyfoo.com/articles/es6-classes-in-depth)

`class` brings a more concise way to write prototypical classes in JS.
An important note is that this is not a JS Object; there are no commas in between methods.
`extends` is also added to clearly set up a class prototype.
`super` is included in the scope
	and can be used to call a parent class' methods.

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

### Example

```js
//ES6
class Zombie {
  constructor () {
    this.type = 'zombie';
    this.hitPoints = 100;
  }
  get health () {
    return this.hitPoints;
  }
  set health (hitPoints) {
    this.hitPoints = hitPoints;
  }
  bite (human) {
    human.kill();
    convertToZombie(human);
  }
}

//ES5
function Zombie () {
  this.type = 'zombie';
  this.hitPoints = 100;
}
Zombie.prototype.health = function (hitPoints) {
  if (typeof hitPoints === 'undefined') {
    return this.hitPoints;
  }
  this.hitPoints = hitPoints;
};
Zombie.prototype.bite = function (human) {
  human.kill();
  convertToZombie(human);
};
```

### Example

```js
//ES6
class Animal {
  speak() {
    console.log("I am an animal!");
  }
}

class Cat extends Animal {
  speak() {
    super.speak();
    console.log("I am a cat too!");
  }
}

//ES5
function Animal () { }

Animal.prototype.speak = function () {
  console.log('I am an animal!');
}

function Cat () { }

Cat.prototype = new Animal();
Cat.prototype.speak = function () {
  Animal.prototype.speak.call(this);
  console.log("I am a cat too!");
}
```


### Exercise

 - [Here](https://github.com/gSchool/es2015-with-babeljs/blob/master/exercises/class_exercise.js)

## Object Literal Features

[_[Babel Docs]_](http://babeljs.io/docs/learn-es2015/#enhanced-object-literals)
[_[ES6 In Depth]_](http://ponyfoo.com/articles/es6-object-literal-features-in-depth)

ES6 brought various new ways to assign values to Objects.

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

### Example

```js
//ES6
var secret = 42;
var object = {
  getData() {},
  secret,
  [1+3]: 'four'
};

//ES5
var secret = 42;
var object = {
  getData: function getData () {},
  secret: secret
};
var key = 1+3;
object[key] = 'four';
```

### Exercise

 - [Here](https://github.com/gSchool/es2015-with-babeljs/blob/master/exercises/object_literal_exercise.js)

## Template Strings <code>``</code>

[_[Babel Docs]_](http://babeljs.io/docs/learn-es2015/#template-strings)
[_[MDN]_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings)
[_[ES6 In Depth]_](http://ponyfoo.com/articles/es6-template-strings-in-depth)

A template string is denoted with backticks <code>``</code>.
It makes interpolating strings in JavaScript much easier and cleaner.
It also makes multi-line strings much simpler.

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

### Example

```js
//ES6:
var w = 'world';
`Hello ${w}!`

//ES5:
var w = 'world';
'Hello ' + w + '!'
```

### Example

```js
//ES6:
`Hello
world
!`

//ES5:
[
  'Hello',
  'world',
  '!'
].join('\n');
```

### Exercise

 - [Here](https://github.com/gSchool/es2015-with-babeljs/blob/master/exercises/template_strings_exercise.js)

## Destructuring
[_[Babel Docs]_](http://babeljs.io/docs/learn-es2015/#destructuring)
[_[MDN]_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
[_[ES6 In Depth]_](http://ponyfoo.com/articles/es6-destructuring-in-depth)

Destructuring provides shorthand for retrieving values from objects and arrays to store their values in variables.
It uses pattern matching to match variable names with keys.

```js
//object pattern matching
var {a, b} = {a:1, b:2};

//array pattern matching
var [a, b] = [1, 2];
```

### Example
```js
//ES6:
var data = {name: 'Danny', foo: 'bar', other: {deep: 1337}};
var {foo, name, other: {deep}} = data;

//ES5:
var data = {name: 'Danny', foo: 'bar', other: {deep: 1337}};
var foo = data.foo;
var name = data.name;
var deep = data.other.deep;
```

### Example
```js
//ES6:
var data = [0, 10, 101];
var [small, medium, large] = data;

//ES5:
var data = [0, 10, 101];
var small = data[0];
var medium = data[1];
var large = data[2];
```

### Exercise

 - [Here](https://github.com/gSchool/es2015-with-babeljs/blob/master/exercises/destructuring_exercise.js)

## Let and Const

[_[Babel Docs]_](http://babeljs.io/docs/learn-es2015/#let-const)
[_[MDN let]_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
[_[MDN const]_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
[_[ES6 In Depth]_](http://ponyfoo.com/articles/es6-let-const-and-temporal-dead-zone-in-depth)

`let` and `const` introduce two new ways to store values in variables.
`let` and `const` are block scoped meaning their scopes are contained inside any `{}` including `if` and `for` bodies.
`const` can only be assigned to once meaning they cannot change and are constant.
Assigning to `const` a second time will throw an error.

```js
//let
let variableName = expression;

//const
const variableName = expression;
```

### Example

```js
//ES6
var callbacks = [];
for (var i=1; i<=5; i++) {
  let j = i;
  callbacks.push(function () {
    console.log(j);
  });
}

//ES5
var callbacks = [];
for (var i=1; i<=5; i++) {
  (function (j) {
    callbacks.push(function () {
      return j;
    });
  })(i);
}
```

### Example

```js
//ES6
const $ = require('jquery');
const ADD_ACTION = 1;

//No true ES5 equivalent
var $ = require('jquery');
```


### Exercise

 - [Here](https://github.com/gSchool/es2015-with-babeljs/blob/master/exercises/let_const_exercise.js)

## Parameter Enhancements: Default, Rest `...`, and Spread `...`

[_[Babel Docs]_](http://babeljs.io/docs/learn-es2015/#default-rest-spread)
[_[MDN spread]_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
[_[MDN rest]_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
[_[MDN default parameters]_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
[_[ES6 In Depth]_](http://ponyfoo.com/articles/es6-spread-and-butter-in-depth)

`rest`, `...`,  was added to make iterating over arguments easier.
If a variable amount of arguments are passed in, you can specify at which point to create an arguments array.
`spread`, `...`, was added to make passing an array into a function easier.
If you pass an array preceded by `...` into a function it will assign each element to each parameter.
Default parameters make it much easier to set your parameters to a default value if no value is passed in.

```js
//rest
function (...restName) {}

//spread
functionCall(...[]);

//default parameter value
function (parameterName = defaultValue) {}
```

### Example
```js
//ES6:
function sum (...numbers) {
  return numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0);
}

//ES5:
function sum () {
  var numbers = Array.prototype.slice.call(arguments);
  return numbers.reduce(function (sum, numbers) {
    return sum + numbers;
  }, 0);
}
```

### Example
```js
//ES6:
function add (a, b) {
  return a + b;
}
add(...[1,2]);

//ES5:
function add(a, b) {
  return a + b;
}
add.apply(undefined, [1, 2]);
```

### Example
```js
//ES6:
function sayHi (greeting, name='Chris') {
  console.log(greeting + ' ' + name);
}

//ES5:
function sayHi(greeting, name) {
  if (name === undefined) {
    name = 'Chris';
  }
  console.log(greeting + ' ' + name);
}
```

## Next Step

:sparkles: Congratulations! :sparkles:

You now know a large portion of ES6's new features!

Next: [03: ES6 Symbols, Iterators, and Generators](03_ES6_Symbols_Iterators_and_Generators.md)
