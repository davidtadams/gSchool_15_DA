# Memory Diagram Practice

### Simple Examples

\#1 - Draw each of the following:

```js
{
  id: 1,
  admin: true,
  roles: ['admin', 'tester'],
  name: function(){ return 'Sue' }
}
```

\#2 - Draw the following, including the scope table:

```js
var a = function () { }
var b = function doWork() { }
```

\#3 - Draw the following:

```js
{
  value: "a",
  next: {
    value: "linked",
    next: {
      value: "list",
      next: null
    }
  }
}
```

### Results of running code

Draw the top-level scope table, and all referenced values after the following code has run:

> HINT!  Your scope table should have 2 entries

```js
var result = index([1,1,2,4,5,5,5])

function index(input) {
  var obj = {}
  for (var i = 0; i < input.length; i++) {
    if (!obj[input[i]]) {
      obj[input[i]] = 0
    }
    obj[input[i]] += 1
  }
  return obj
}
```

## Edge cases

Draw the following, including the scope table:

```js
var first = "Will"
var last = "Will"
var person = {first: first, last: last}
```

Since strings are immutable, you don't really need to _know_ whether it's the same string or not - it won't change the way you program.  For all intents and purposes, the values of the `person` object won't stay in sync with the `first` / `last` variables, because strings are immutable.
