# ES6 Proxies and Reflect

## Objectives

* Build a proxy handler to intercept get and set calls on an object
* Describe the purpose of the Reflect API

## Proxies

*Proxies are, at this time, only available in Firefox and Edge. They are not transpilable because there's no es5 equivalent to this behavior. These code examples can be run in firefox.*

Proxies enable you to modify fundamental behavior on an object. Fundamental behavior is things like assigning values, enumerating, looking up properties, etc. Proxies are constructed and associated with both a `handler` and a `target`. The `handler` is what will be interjecting before the requests reach the `target`.

Let's look at a simple example of a proxy object:

```javascript
let handler = {
  get: function(target, name) {
    if (name == 'noproxy') {
      return target[name];
    }
    return 42;
  }
}

var p = new Proxy({}, handler);

console.log(p.a); // 42
p.b = 'not 42!'
console.log(p.b); // 42
p.noproxy = 'special accessible property';
console.log(p.noproxy); // 'special accessible property'
```

`get` is a way to modify accessing properties. In this example, we're just returning the number 42 unless someone is attempting to access the 'noproxy' property, in which case we will pass that request through to the target. The list of `trap`s support by proxy handlers can be found on the [MDN Proxy handler page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler).

Proxies allow libraries to be very specific about how you work with objects created from them. One interesting use case for proxies is building out validations, and only allowing access to a data object through use of a handler that verifies valid interactions.

### Exercise

Take the following stubbed out code, and fill out the set function so that it validates that all the interactions are valid.

```javascript
let validator = {
  set: function(obj, prop, value) {
    // here!
  }
}

let person = new Proxy({}, validator);
person.name = 24; // Throws exception, name can only be a string
person.name = 'Chris';
person.password = 'pass'; // Throws an exception, passwords should be 8 characters long
person.password = 'password';
person.lastName = 'Burkhart';
person.lastName = {} // Throws exception, lastName can only be a string
console.log(person); // Object { name: "Chris", lastName: "Burkhart", password: "password" }
```

_Bonus_: Think of other kinds of validations that might be useful for a person, and add those in as well!

_Bonus 2_: Don't allow people to delete properties from the object. This one will require a bit of research.

_Bonus 3_: Add default values for name, and lastName that are returned if those properties haven't been set yet.

## Reflect API

The Reflect API (works like the `Math` module, all the functionality is statically defined on the `Reflect` object itself) mirrors all of the various traps provided by the Proxy functionality. The main purpose of the Reflect API is to make certain metaprogramming easier (building a handler that interjects for all of the traps, for example) but there are a few other benefits:

1. Reflect mirrors a few object methods, but will return true / false instead of returning the modified object:

  ```javascript
  let obj = {};

  Object.defineProperty(obj, 'key', {__proto__: null, value: 'static'}) === obj; // true
  Reflect.defineProperty(obj, 'key 2', {__proto__: null, value: 'static'}) === true; // true
  ```

2. Reflect provides functionality that is otherwise only available as operators. These include `Reflect.deleteProperty`, `Reflect.get`, `Reflect.has`, and `Reflect.set`. `Reflect.construct`, for example, can be used to create a new object and proceed to chain off of it in a cleaner way:

  ```javascript
  let newArrayLength = Reflect.construct(Array, [0]).length;
  let newArray2Length = (new Array(0)).length;
  ```

## Next Step

:sparkles: Congratulations! Finished! :sparkles:

Now, let's put what you've learned to use.

Head over to [es6katas.org](http://es6katas.org/) and work through these. You should feel pretty comfortable with these. If there's anything you can't recall how to do, go back through this curriculum or head over to [mdn](https://developer.mozilla.org/en-US/) for a refresher!
