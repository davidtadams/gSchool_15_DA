# module.exports

Node has the concept of modules.  Modules are a way of taking some common code or data (or both) and sharing them across multiple files.

## Set the stage

You'll be opening a lot of files in this exercise.  Close other programs and email and Slack and other running apps :)

### Objectives

By the end of this lesson you should be able to define and require modules.  More specifically you should be able to:

- Write `module.exports` to export a function
- Write `module.exports` to export an object
- Write require statement that requires a function
- Write a require statement that requires an object
- Explain variable naming in module.exports/require
- Explain that no functions or variables from the module will be available to the caller unless explicitly exported
- Write valid require statements for relative paths
- Write valid require statements for npm modules / builtin modules

https://students.galvanize.com/standards/53

## Activities

**00 - Read up a little**

Read through / interact with the following articles - look at some of the examples, run them in a JavaScript file with `node` in `00-playground`.  Write down any questions you have, and hopefully by the end of this lesson they are all answered.

- http://www.sitepoint.com/understanding-module-exports-exports-node-js/
- https://nodejs.org/api/modules.html
- http://openmymind.net/2012/2/3/Node-Require-and-Exports/
- http://www.hacksparrow.com/node-js-exports-vs-module-exports.html

**01 - What is `module.exports` by default?**

1. Open `01-default/run.js`
1. Open `01-default/base.js`
1. Run `node 01-default/run.js`.  

What do you see?  Based on this experiment, what's the _type_ of `module.exports`?  If you are still a bit confused, log out `typeof module.exports` in either file and run again.

So `module.exports` by default is an `Object`.  That's convenient, because it means that we can properties on it!

**02 - Setting properties on `module.exports`**

If `module.exports` is an object, then you can set properties on it directly, right?

_Without_ redefining `module.exports` (that is, without writing `module.exports = {}`), set properties directly on `module.exports` and finish everything in the `02-properties/run.js` directory.

When you think you are done, peak at the solution to `02-properties`.  How'd you do?

**03 - Setting `module.exports` directly**

Hmmm...  So we know that `module.exports` is an object.  But what is `module`??

Run `node 03-setting/what-is-module.js`.  What do you see?  What _type_ is `module`?  If you still don't have it, log out the `typeof module` to be sure.

OK - so `module` is _also_ an object.  Which means that `exports` is just a _property_ on that object.  Which means that you can set that property to anything you want.

Make `03-setting/run.js` work.  NOTE: you'll need to create the correct files.

When you are done, stop for a minute and think deeply about `module.exports`.  Write down an explanation, in your own words, about what `module.exports` is and how `module.exports` and `require` work together.

> YOUR ANSWER HERE

**04 - Exporting variables**

Examine the following code:

```js
var walkman = {maker: 'Sony', plays: 'music'}
var vcr = {maker: 'Sony', plays: 'movies'}
```

See how the string `Sony` is duplicated?  You can _extract_ a variable to remove that duplication, like so:

```js
var company = 'Sony'
var walkman = {maker: company, plays: 'music'}
var vcr = {maker: company, plays: 'movies'}
```

And that totally works.  So let's put these concepts together:

- You can set properties of objects to variables
- `module` is an object
- `module.exports` is an object

Which means that you can do the following:

```js
var someNum = 42
var someObj = {foo: "bar"}
module.exports = someObj
module.exports.num = someNum
```

That is to say that there is nothing special or different about `module.exports` - the same rules apply.

Go to `04-variables` and alter the `bike.js` and `car.js` classes to export the correct variables.

**05 - Refactor**

A common pattern is to refactor to modules.  That is, you start with some variable assignments, and then move values to another module (file) and require them.  Take a minute to go to `05-refactoring` and move all of the values out to different modules.

**06 - Builtin modules / npm modules**

When you require your own files you use relative paths, that look lik `./lib/some-module`.  You can also require builtin modules and modules installed via npm.  When you require builtin modules or modules from npm, you can reference them by name.

Go to https://www.npmjs.com/package/showdown and notice their example docs.  Take a minute to create a new folder, `06-builtins` and create a new script that pulls in `showdown` and parses a markdown string.

Go to https://nodejs.org/api/querystring.html (Node docs) and add a file that uses one of those methods to parse / encode / decode a query string.

**Bonus**

What would happen if your module looked like this:

```js
module.exports.date = new Date
```

If three different files require that module, will the time be different or the same in each?  Why?  What does that tell you about the way modules are loaded?

## Reflect

Look at each objective above.  How well do you think you met each one on a scale of 1-4?

What new questions do you have?  List them here:

1. ______
1. ______
1. ______
