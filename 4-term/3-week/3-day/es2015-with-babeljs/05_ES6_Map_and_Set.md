# ES6 Map and Set

## Objectives

* Describe Sets and Maps
* Describe a scenario where you'd use a WeakSet instead of a regular Set

### Map

Map is a javascript implementation of a `hash` or `hashmap`. Previously, we've used objects to emulate `hash` functionality in javascript, but that comes with a handful of issues. Only being able to use strings (now symbols also, but previously only strings) as keys, prototypical inheritance issues, and no straightforward way to determine size, for example.

`map` has a different syntax than objects, however. Fetching data from a map requires you to use `get`, setting data requires `set`, and delete needs the `delete` function. If you attempt to use the regular object syntax, it will 'work' but it only works because maps are still (at their root), objects.

```javascript
let myMap = new Map();

myMap.set('key', 'value');
myMap.get('key'); // 'value'
myMap.key = 'something else';
myMap.get('key'); // 'value'
myMap.key; // 'something else'
myMap.size; // 1
myMap.otherKey = 'sdf';
myMap.size; // still 1
```

So, make sure when working with maps, you are _only_ using methods like: set, get, and delete, instead of working with it the same way you work with objects.

#### What can be used as a key?

Practically anything. The key comparison, essentially, uses `===` to compare keys, except it considers `NaN` to equal `NaN`:

```javascript
let map = new Map();

const KEY = {};
map.set(KEY, 'keyed');

const KEY2 = {};
map.set(KEY2, 'also keyed');

map.get(KEY); // 'keyed'

map.set(NaN, 'not a number!');
map.get(NaN); // 'not a number!'
```

#### Exercise

Given the following map:

```javascript
let myMap = new Map();
myMap.set('g', 'galvanize');
myMap.set(NaN, 'numbers are swell');
myMap.set({arrays: true}, [1, 2, 3]);
```

Write code to iterate over the elements in the map, printing out the keys and the values. There are a handful of ways you can iterate over the elements here, see how many you can find and implement.

### WeakMap

A `WeakMap` is almost the same as a `Map`, except it doesn't prevent it's keys from being garbage collected. Since it doesn't keep a hard reference to the keys that have been used to store data, there's no way to enumerate over data in a `WeakMap`. You can only use `get`, `set`, `has`, and `delete` on data in a `WeakMap`.

This can be a tricky concept to wrap your head around, but let's take a situation where we want to store more data about the users in our system:

```javascript
let users = [{name: 'Chris'}, {name: 'Ryan'}, {name: 'Adam'}];
let extraData = new WeakMap();

extraData.set(users[0], {lastName: 'Burkhart'});
extraData.set(users[1], {lastName: 'Sobol'});
extraData.set(users[2], {lastName: 'Lichty'});
```

In this example, we've defined an extra set of data that only exists as long as those users exist in the array. If we were to delete an instructor from our array:

```javascript
delete users[0];
```

We can now be sure that our `extraData` map no longer contains Chris' last name, because we deleted our reference to the key. If we had used a plain old regular `map`, that data will still exist, and our user record would still be retained in memory, even though we deleted it from our users array.

### Set

Sets operate similarly to arrays, except that elements are not tied to a specific index and you can't insert an item more than once (guaranteed uniqueness across all elements). Adding an element that already exists will not modify the set. Sets do preserve insertion order, so iterating over a set will always return elements in the order they were added to the set.

```javascript
let mySet = new Set();

mySet.add(1);
mySet.add([1,2,3]);
mySet.add(NaN);

var user = {name: 'Chris'};

mySet.add(user);

mySet.has(user); // true
mySet.has({name: 'Chris'}); // false
mySet.has(NaN); // true

mySet.delete(user);

mySet.size; // 3
```

### WeakSet

WeakSet, as you can imagine, is a set that does not keep a reference to the element that was added to it. Like `WeakMap`, it does not have any way to iterate over results, so it's pretty limited in it's usefulness. A potential use case is, essentially, using it to track a boolean. Something like:

```javascript
let seatsTaken = new WeakSet();

seatsTaken.add(1);
seatsTaken.add(2);

// Is seat #3 taken?
seatsTaken.has(3); // false

// How about seat #1?
seatsTaken.has(1); // true

// Ok, the person who had seat #2 got up, let's clear that one
seatsTaken.delete(2);
```

#### Exercise

Describe a scenario where using a `set` is preferable to using an `array`.

## Next Step

:sparkles: Congratulations! :sparkles:

Almost done!

Next: [06: Proxies and Reflect API](06_ES6_Proxies_and_Reflect_API.md)
