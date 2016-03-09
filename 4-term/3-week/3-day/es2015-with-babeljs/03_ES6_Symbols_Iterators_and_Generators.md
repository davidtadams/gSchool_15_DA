# ES6 Symbols, Iterators, and Generators

## Objectives

* Describe when you would use a symbol over a string
* Replace an indexed for loop with a for-of loop
* Iterate over a custom object

## Symbols

Symbols are the 7th _type_ to be added to Javascript, and the first new type to be added since it was first standardized. Symbols in Javascript operate  similarly to symbols in Ruby, but have some distinct differences and are used in different ways. The most basic way of generating a symbol simply takes a description for that symbol:

```javascript
let nameSymbol = Symbol('name');
```

This will create a unique symbol, that's _described_ by the word 'name'. If we were to, later in our code, create a new symbol with the same description:

```javascript
let newNameSymbol = Symbol('name');
```

These will not be equivalent. These descriptions here are just used for debugging purposes, so that if you run `toString()` on a symbol, you can get some human readable information about it.

```javascript
nameSymbol === newNameSymbol
// false
```

If you want to create a reusable symbol (to make this operate similarly to working with symbols in Ruby), you need to register it. There's a function available on `Symbol` called `for` that will either create, or return, a symbol that has been created with that description. Instead of doing `Symbol(description)`, you would use `Symbol.for(description)`:

```javascript
let savedNameSymbol = Symbol.for('name');
let sameSavedNameSymbol = Symbol.for('name');

savedNameSymbol === sameSavedNameSymbol
// true
```

Symbols are *not* intended to be a drop in replacement for strings when creating objects. Properties associated with a symbol will be omitted from most of the normal ways of iterating over properties on an object.

```javascript
let instructor = {};
let name = Symbol.for('name');

instructor[name] = 'Chris';

Object.keys(instructor)
// []

console.log(instructor[Symbol.for('name')]);
// Chris

console.log(JSON.stringify(instructor));
// {}
```

So, if they aren't displayed when working with the object, what's the point? The main purpose of symbols in es2015 is to guarantee that you won't _collide_ with any existing properties on the object. You can create a key that is guaranteed to be unique to store extra data (or functions) that need to be added to an object. This helps to alleviate some of the [extreme measures](https://github.com/facebook/react/blob/401e6f10587b09d4e725763984957cf309dfdc30/vendor/react-dom.js#L30) some libraries have taken to avoid conflicts.

There are a few [predefined symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Well-known_symbols) that are included in es2015 that allow you to define functionality in custom objects. We'll show an example of one of these in the next section.

#### Exercise

Take a look at the [symbol documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) and determine how we can iterate over the symbol keys that we are using for our `instructor` object above.

## Iterators

The simplest way to iterate over an array in javascript looks something like this:

```javascript
let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

This is OK, but we can do better. At the very least, we can switch this over to use the ES5 built in `forEach` method instead:

```javascript
arr.forEach(val => {
  console.log(val);
});
```

This is a bit better, but it introduces some new issues like the fact that we can't break out of this loop early. We have no choice but to iterate over every element in the array. Another potential solution is that we could use `for-in`, such as:

```javascript
for (let i in arr) {
  console.log(arr[i]);
}
```

This is better, but still has potentially weird behavior. It will cast the index as a string (since `for-in` is designed to work with objects, not arrays) which can potentially create some weird bugs if you intend to work with the index value as an integer directly. It will also iterate over the items in an arbitrary order, there's no guarantee that your indexes will be returned in the order you'd expect them to.

Instead, in es2015, we can use `for-of`:

```javascript
for (let val of arr) {
  console.log(val);
}
```

Now we are able to avoid all of these potential problems. Given an array, items will be returned in proper order, and we're now just working with the data directly instead of having indirect access to that data.

### What else can we do with `for-of`?

This statement works with lots of data types, not just arrays. Since strings can be treated like arrays, strings work just fine with `for-of` as well:

```javascript
for (let char of "hello") {
  console.log(char);
}
```

In addition, it works with the new `Map` and `Set` objects that we will describe later.

It does *not*, however, work with objects. Objects are intended to be iterated over with `for-in`.

### Iterating over our own types of data

What if we are building our own types of collections instead of just using built ins? The new iterator functionality in es2015 allows us to enable this `for-of` functionality for our own data types. Any object that provides a `[Symbol.iterator]` method is _iterable_, and can be utilized with `for-of`. That method needs to return an object that provides a `next` function that will return an object that contains the next piece of data, and whether or not there is still more data to come.

Let's look at a very basic iterator:

```javascript
let zeroesForeverIterator = {
  [Symbol.iterator]: function() {
    return {
      next() {
        return {done: false, value: 0}
      }
    }
  }
};

for (let val of zeroesForeverIterator) {
  console.log(val);
}
```

This will simply return `0`s forever. Every time `next` is called, there's an object returned with a `value` of 0, and `done` set to false, which signifies that next can be called again.

#### Exercise

Build an iterator that will return the numbers 1 through 10 in sequence, and then stops.

## Generators

Generators simplify the process of building out iterators by handling some of the boilerplate for you. To signify that a function is a generator function, you need to include an _*_ character at the end of the word function. Let's see what our zerosForeverIterator would look like if it was structured as a generator instead:

```javascript
let zeroesForeverIterator = {
  [Symbol.iterator]: function*() {
    while (true) {
      yield 0;
    }
  }
}

for (let val of zeroesForeverIterator) {
  console.log(val);
}
```

Two important things to note here, one is the _*_ character that's appended to the end of the word function. This is the signifier that it is a generator function, which means it defines a function that returns a `Generator` object when executed. The resulting object that's generated will encapsulate code that can be _exited and later re-entered through use of yield_.

The other thing to note is that this code would appear to run indefinitely. Most `while (true)` loops would run forever, but in this case, every time we hit `yield`, the currently executing code is paused and the value is returned. If, when execution is resumed, there is no further `yield`s, then the generator code will have finished generating all possible values.

You can also use generators outside of objects, by simply defining a generator function and then executing it:

Example:

```javascript
function* aFewZeros() {
  let ind = 0;
  while (ind < 3) {
    ind++;
    yield 0;
  }
}

let zeroMaker = aFewZeros();

for (let val of zeroMaker) {
  console.log(val);
}
```

It's worth noting that you don't need to have `yield` in a loop, our aFewZeros iterator could also be written like so:

```javascript
function* aFewZeros() {
  yield 0;
  yield 0;
  yield 0;
}
```

And, lastly, both iterators and generators can also be outside of `for-of` by simply calling `next()` on the iterator.

```javascript
let zeroMaker = aFewZeros();
console.log(zeroMaker.next().value);
// 0
console.log(zeroMaker.next().value);
// 0
console.log(zeroMaker.next().value);
// 0
console.log(zeroMaker.next().value);
// undefined
```

#### Exercise

Rewrite our 1 to 10 iterator as a generator instead.

#### Exercise

A useful type of generator would be something that generates fibonacci sequence numbers. Build a generator, and then write code to print out the first 50 numbers of the fibonacci sequence.

## Next Step

:sparkles: Congratulations! :sparkles:

You now know a larger portion of ES6's new features!

Next: [04: ES6 Tail Calls, Modules, and Subclassing Builtins](04_ES6_Tail_Calls_Modules_and_Subclassing_Builtins.md)
