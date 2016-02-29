# Big-O Notation 

Big-O notation is how developers discuss the complexity of an algorithm as a way to understand how fast a program will run given it's input. Big-O notation deals with the **worst** case scenario for the algorithm.  In other words, if the program **may** run quickly, but there is a chance it could take a long time given some input, then the Big-O runtime will deal with the longer case.

To put it yet another way, Big-O runtime deals with asymptotic approximations of the complexity of the algorithm.  It tends to care much more about how complex a program is when the input size is very large because that is typically when the performance matters the most.

## Objectives

* Learn about big O and see some examples of algorithms and big O
* Explore runtimes for different functions in the Chrome console

Watch [this video on asymptotic complexity from CS50](https://www.youtube.com/watch?v=iOq5kSKqeR4).

## Big-O Definition

Here's the technical definition of big-O notation. If it's difficult to comprehend, don't worry! We'll show plenty of examples below. The rigorous definition is a helpful point of reference, however, especially as you begin to familiarize yourself with the concept.

Suppose you have two mathematical functions, `f(x)` and `g(x)`. A function `f(x)` is said to be `O(g(x))` (pronounced 'Big O of g(x)') if there exists some positive constant `C` such that `|f(x)|` is less than or equal to  `C * |g(x)|` for `x` sufficiently large.

When we talk about time complexity and Big O in this class, `f(x)` will typically roughly correspond to the runtime of some javascript function (or, if you prefer, the number of operations that function needs to perform), while `g(x)` will roughly correspond to the size of that function's input. (You can also talk about Big O within the context of [space complexity](https://www.cs.northwestern.edu/academics/courses/311/html/space-complexity.html), but we'll save that for another time.)

Huh? What does that mean? Let's get down to brass tacks, and look at some examples.

## Big-O Examples

The best way to get started with big-O notation is to start with some examples:

```javascript
// O(n)

function square(arr) {
  return arr.map(function(el) {
    return el * el;
  });
}
```

The above example is O(n) run time, which means given a input of size n (the length of the array is equal to n), the runtime of the application will be linear in relationship to the input size.  In other words, if every x * x operation takes some unit of time, we can expect n of those operations to take place.

Let's take a look at this even more concretely. The following function takes in two arguments: a callback and an array. It returns the time it takes your computer to execute the code in the callback.

```javascript
function testPerformance(callback, arr) {
  var t0 = performance.now();
  callback(arr);
  var t1 = performance.now();
  return t1 - t0;
}
``` 

**Exercise** Create an array of length 1,000,000, where each entry is the number 2. Then test the performance of `square` on this array, using `testPerformance`.

If you run `testPerformance` many times on the same arguments, you should see different outputs. This makes sense; as you saw in the CS50 video, the time it takes to run a certain block of code is highly variable not just across machines, but also for a given machine.

Even so, it can be helpful to plot several data points and look for trends. 

**Exercise** Repeat the previous exercise for arrays of 2 million, 3 million, and so on up to 10 million. Then record the times you get in [this table](https://www.desmos.com/calculator/i64rd3xdsv), and you'll wind up with a nice little graph of your data. What sort of trend do you see?

**Bonus** If you want to decrease the variability in the times output by your performance test, what could you do?

Below is another example. In terms of big-O, what do you think the runtime of this function is?

```javascript
function squareAndDouble(arr) {
  var tempArr = arr.map(function(el) {
    return el * el;
  });
  return tempArr.map(function(el) {
    return 2 * el;
  });
}
```

**EXERCISE** Make an educated guess about the runtime of this function. Then do some performance testing and graph your results. Do you stand by your guess?

![](http://images-cdn.9gag.com/photo/a9LGndm_700b_v1.jpg)

In the above example the runtime is O(n + n) or O(2 * n). The runtime is O(2 * n) because the first `arr.map` iterates over all n elements in the array, and the second `tempArr.map` also iterates over all n elements in the array.  However, the runtime is actually O(n), because in big-O notation, constants are ignored.

**RULE: Big-O notation ignores constants.**

```javascript
// O(1)

function print50nums() {
  for (var i = 0; i < 50; i++) {
    console.log(i);
  }
}
```

The runtime of the above example is not bound by a variable sized input.  Instead it is bound by the constant 50.  The runtime of the program is O(50), but since constants do not matter in big-O notation, we simplify it to O(1).

```javascript
// O(1)

function print500000nums() {
  for (var i = 0; i < 500000; i++) {
    console.log(i);
  }
}
```
The example above is still O(1) because 500,000 is still a constant number of iterations.

**EXERCISE**

Here are two more functions. Do some performance tests and graph the results. What is the complexity of each one?

```javascript
function addSomeNumbers(arr) {
  sum = 0;
  for (var i=0; i < Math.min(arr.length,1e7); i++) {
    sum += arr[i];
  }
  return sum;
}
```

```javascript
function sumValuesAndRemoveOdds(arr) {
  var i = 0;
  while (i < arr.length) {
    var sum = 0;
    var j = i;
    while (j < arr.length) {
      sum += arr[j];
      j += 1;
    }
    arr[i] = sum;
    i += 1;
  }

  var newArr = [];

  i = 0;

  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
    i += 1;
  }

  return newArr;
}
```

![](http://images.contentful.com/7h71s48744nc/3naPsJv6IE0KewGmqUOMUu/a00a2a2cbe0c580cfce1b502c1ebdc9f/a-beautiful-mind.jpg)

In the above exercises, the first program is O(1) because all all operations in the program do not depend on input size. No matter how large the array, there's an upper bound on the number of operations that the function will perform.

The second exercise above is O(n*n + n).  The first n*n (n^2) comes from the while loop that iterates over all of the elements in the array and has another while loop inside that also iterates over all elements in the array.  The second n comes from the final while loop that iterates over all elements and remvoes odds.  The expression can also be simplified further.  Any time there is addition in the big O notation, the worst case runtime is kept. All other values are dropped. In this case, the runtime would just be O(n^2).

**RULE: When big-O values are added, keep the worst case runtime, and drop all other additional values.**

**EXERCISE**

1. Check out [this graph](https://www.desmos.com/calculator/isubf6mydg) for data on the functions you've explored today, as well as some data on different algorithms we've seen or will encounter later on: bubble sort, binary search, naive Fibonacci, merge sort, and bogo sort. Take a look at the data and the trends. What's the complexity of each algorithm? Which algorithm is the most/least efficient? (Need a refresher on some of the math functions that appear? Scroll down!)

**EXERCISE:**

Reduce the following big-O expressions. If they can't be reduced, explain why.

1. O(5555593939) + O(n^2) + O(n * n * n)
2. O(93939283940) + O(8274920484) + O(12)
3. O(n * n)
4. O(3n + 2n + 5n + 9n)
5. O(n^3 + n) + O(2^n)
6. O(n * log(n) + log(n))
7. O(n^n)

Which is the faster big O runtime (Make sure to reduce both expressions first):

1. O(n + n^2 + 5) or O(3n + 70000000)
2. O(n * log(n)) or O(n^2)
3. O(n^n) or (n^50000)
4. O(1) or O(9999999999999)
5. O(n * n * 5 * n) or O(n^2)

**CHALLENGES:**

1. What is the complexity of each of the functions in [this graph](https://www.desmos.com/calculator/e6335rf6ao)?

2. Prove, using the definition of big-O, why constants don't matter in the notation (e.g. why O(2n) is the same as O(n)).

3. Prove that big-O notation is _transitive_. In other words, if `f(x)` is `O(g(x))`, and `g(x)` is `O(h(x))`, then `f(x)` is `O(h(x))`.

**Addendum: Math Function Review!**

You've seen a few functions in this section, such as `log(x)` and `x!`, that may be bringing back some (hopefully fond!) memories of high school math classes. If you need a quick refresher on logs or factorials, read on.

**Logarithms**

A very simple entry point for logarithms can be found in the book [How Not To Be Wrong](http://www.amazon.com/How-Not-Be-Wrong-Mathematical/dp/0143127535) by mathematician Jordan Ellenberg:

> It has come to my attention that hardly anybody knows what the logarithm is. Let me take a step towards fixing this. The logarithm of a positive number N, called _log N_, is the number of digits it has.

> Wait, really? That's it?

> No. That's not _really_ it. We can call the number of digits the "fake logarithm", or _flogarithm_. It's close enough to the real thing to give the general idea of what the logarithm means in a context like this one. The flogarithm (whence also the logarithm) is a very slowly growing function indeed: the flogarithm of a thousand is 4, the flogarithm of a million, a thousand times greater, is 7, and the flogarithm of a billion is still only 10.

Here's a graph that lets you compare the logarithm function to the flogarithm function. You can also adjust the _base_ of the logarithm and flogarithm. For example, when the base is 2, the flogarithm shows the number of digits a number has base 2. (That's why the graph passes through the point (8, 3), since 8 base 2 is 100, which has 3 digits.)

Another way to think of logarithms (which may be more familiar to you from high school math) is as inverses to exponential functions. The base-10 logarithm, commonly written _log N_, is the inverse to the function 10<sup><em>x</em></sup>. Graphically, this helps to explain the shape of the log graph; it's just a reflection of an exponential graph. This relationship between logarithms and exponentials also explains the slow growth of the logarithm: as _x_ grows, exponential functions produce large changes in output for small changes in input, while logs require large changes in input for small changes in output.

But why use words to explain the relationship, when graphs will do the job even better? Check [this one](https://www.desmos.com/calculator/qa1sbhk6if) out. 

If all else fails, just remember that a log is an exponent. The log base _b_ of some value _x_ (written log<sub><em>b</em></sub>(<em>x</em>)) is the exponent that satisfies the equality <em>b</em><sup>log<sub><em>b</em></sub>(<em>x</em>)</sup> = <em>x</em>. For example, log<sub>3</sub>(81) = 4, since 4 is the exponent in the equation 3<sup>4</sup> = 81.

Factorials are a little more straightforward. The factorial of a positive integer _n_ is just the product of all numbers from 1 to _n_: 1! = 1, 2! = 2, 3! = 6, 4! = 24, and so on. It's possible to extend the definition of this function so that it makes sense for all numbers, not just positive integers: see [here](https://www.desmos.com/calculator/kup5ttpbj9). As shown by the graph, the factorial function grows fast. Super fast. Faster, even, than an exponential function. This is why factorial complexity is even worse than exponential complexity.

# Resources

* [Matt Garland's YouTube channel](https://www.youtube.com/channel/UCXKj1IJVDEHHHDOt49FhOOA) focused on simple visualizations of various CS concepts.

* (Matt Garland explains Big O)[https://www.youtube.com/watch?v=nMQyBh2FuaA]

### MIT Open Courseware

* [MIT's Overview of computational complexity](https://www.youtube.com/watch?v=moPtwq_cVH8)

* [MIT's Intro to Algorithms](https://www.youtube.com/watch?v=whjt_N9uYFI)

### My Code School

* [My Code School's channel of CS Concepts](https://www.youtube.com/channel/UClEEsT7DkdVO_fkrBw0OTrA)

* [My Code School's Intro to Asymptotic Notation](https://www.youtube.com/watch?v=OpebHLAf99Y)

### Carleton Moore

* [Carleton Moore's YouTube channel](https://www.youtube.com/channel/UCxVXiZ0KRSSIdxU6rqM_dfg)

* [Carleton Explains Big O](https://www.youtube.com/watch?v=chZNdhO6Ifw)

### UC Berkeley

* [Asymptotic Analysis](https://www.youtube.com/watch?v=V1xXmQkzkZI)
