# ECMAScript, JavaScript, and Transpilers

## Objectives

* Discuss the relationship between ECMAScript and JavaScript.
* Discuss what a transpiler is.
* Transpile ES6 code to ES5.

### Stretch Objectives

* Transpile some other types of code to JS.

## ECMAScript

_ECMAScript... ECMA What?_

ECMAScript and JavaScript have a
	[long](https://en.wikipedia.org/wiki/JavaScript#History),
	[weird](https://en.wikipedia.org/wiki/ECMAScript#History),
	[intertwined](http://stackoverflow.com/a/30113184)
	history.

[ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) is a specification of a language.
[JavaScript](https://en.wikipedia.org/wiki/JavaScript) is an implementation of ECMAScript.

JavaScript is also considered a dialect of ECMAScript.
ActionScript and JScript are other dialects of ECMAScript.

The current version of ES is ES6,
	released [June 2015](https://en.wikipedia.org/wiki/ECMAScript#Versions).
The last version was ES5 and was released in 2009.
ES4 never existed and ES3 was released in 1999.

Some people refer to ES6 as ES2015.

Talking about JavaScript versions doesn't make as much sense
	because each browser versions JavaScript its own way.

## Transpilers

A [transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler) is a type of compiler.
A compiler typically takes source code and outputs machine code.
But, a transpiler takes source code and outputs more source code.
[Many](https://github.com/jashkenas/coffeescript/wiki/list-of-languages-that-compile-to-js) transpilers exist in the JS ecosystem.

Some more popular transpilers:
* [Babel](http://babeljs.io/)
* [ClojureScript](https://github.com/clojure/clojurescript)
* [CoffeeScript](http://coffeescript.org/)
* [Dart](https://www.dartlang.org/) by Google
* [elm](http://elm-lang.org/)
* [emscripten](http://kripken.github.io/emscripten-site/)
* [GWT](http://www.gwtproject.org/) by Google
* [Haxe](http://haxe.org/)
* [JSX](http://facebook.github.io/react/docs/jsx-in-depth.html) by Facebook
* [PureScript](http://www.purescript.org/)
* [Roy](http://roy.brianmckenna.org/)
* [Spider](http://spiderlang.org/)
* [Traceur](https://github.com/google/traceur-compiler) by Google
* [TypeScript](http://www.typescriptlang.org/) by Microsoft

Each transpiler serves a different purpose.

### Babel

Babel transpiles ES6 code to ES5 code.
This allows us to write ES6 code today!
Even in browsers with no ES6 support! :open_mouth:

Babel is an [overwhelmingly popular](http://babeljs.io/users/) transpiler.
It is used by Netflix, Facebook, Mozilla, Yahoo!, PayPal, Airbnb, Reddit,
	Atlassian, NFL, SoundCloud, Vimeo, Walmart, Slack, Atom, React,
	mongoDB, LinkedIn, and LoDash just to name a few.

Facebook's React has even [deprecated its own JSX transpiler](https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#deprecation-of-react-tools) in favor of Babel.

### Install

There are [many ways](http://babeljs.io/docs/setup/#babel_cli) to install Babel.

Install the CLI version:
```sh
$ npm install babel-cli -g
```

### Use

[_[Babel CLI Usage Docs]_](http://babeljs.io/docs/usage/cli/)

To compile a file:
```sh
$ babel input.js
```

To compile a file to a file:
```sh
$ babel input.js -o output.js
```

To compile and watch a file for changes:
```sh
$ babel input.js -o output.js --watch
```

To compile with [sourcemaps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/):
```sh
$ babel input.js --source-maps
```

Compile and run a ES6 file in node:
```sh
$ babel-node input.js
```

### Try it Out

Copy this to a file `es6.js`:
```js
let evens = [1, 2, 3, 4];
let squared = evens.map(v => v * v);
console.log(squared); //-> [ 1, 4, 9, 16 ]
```

This is using the [fat-arrow](http://babeljs.io/docs/learn-es2015/#arrows-and-lexical-this) syntax from ES6.

Then run:
```sh
$ babel-node es6.js
[ 1, 4, 9, 16 ]

$
```

### What's supported natively?

http://kangax.github.io/compat-table/es6 is the most current compatibility chart for es6 features. This is a useful reference for everything we're going to go through during this curriculum. Depending on when you go through this, some features may be supported natively that aren't supported at the time of this writing. This is the most up to date resource for determining what you can use w/o a transpiler.

## Next Step

:sparkles: Congratulations! :sparkles:

The file has been transpiled from ES6 code to ES5 and has been run!

Next: [02: ES6 Part 1](02_ES6_Part_1.md)
