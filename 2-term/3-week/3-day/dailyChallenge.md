# Curry Function

Define a JavaScript function add that can be used like so:

```js
add(1)(1);   // returns 2
add(20)(20); // returns 40
add(100)(5); // returns 105
add(40)(2); // returns 42
```

# Inputs

Initial number to add to.

# Outputs

Function that adds the given parameter to the initial base number.

# Hints
The add function will be a higher order function. It will need to return a function.


# Zip Arrays

Implement a function which takes two parameters, both of which are arrays, and zips them together.

ie: The arguments are [1,2,3], and [4,5,6], and after zipping the two arrays, you return [1,4,2,5,3,6].

# Inputs

2 Arrays
```js
zipArrays([1,2,3], [4,5,6]);
```

# Outputs

1 Array - result of zipping the 2 arrays

```sh
[1,4,2,5,3,6]
```
