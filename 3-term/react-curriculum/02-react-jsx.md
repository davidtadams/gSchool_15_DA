#### [⇐ Previous](01-introduction-to-react.md) | [Table of Contents](README.md#table-of-contents) | [Next ⇒](03-react-developer-tools.md)

# React JSX

[JSX](https://facebook.github.io/jsx/), or JavaScript XML, is a JavaScript syntax extension that looks similar to XML. In this chapter, you'll learn what React JSX is, why it's important, and how to use it. By the end, you'll have built a React JSX application with guidance and be ready to build one of your own.

| Duration by yourself | Duration as a class |
|----------------------|---------------------|
| About 1.5 hours      | About 2.75 hours    |

## What is React JSX?

[React JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) lets you create `ReactElement` objects using an HTML-like syntax and a transpiler. For example, when the following JSX code is run through a transpiler:

```jsx
<a href="http://www.galvanize.com/">Galvanize</a>
```

it's transformed into this:

```js
React.createElement('a', { href: 'http://www.galvanize.com/' }, 'Galvanize')
```

A traditional compiler translates the source code of one programming language into another programming language of a *different* level of abstraction. For example, embedded JavaScript (i.e. EJS) templates compile into HTML because one is an embedded programming language and the other is only a markup language.

A **transpiler** is a special type of compiler. Given the source code of one programming language, a transpiler produces equivalent source code in another programming language of approximately the *same* level of abstraction. For example, CoffeeScript transpiles into JavaScript because both languages are similar in capabilities.

The take away is that JSX is *not* a template language even though it looks like one. Template languages are compiled into HTML while JSX is transpiled into JavaScript. They're both approximately at the same level of abstraction.

[Babel](https://babeljs.io/) is by far the most popular JavaScript transpiler and ships with built-in support for React JSX. There are a number of ways to transpile React JSX with Babel ranging from CDNs, to Node packages, to Ruby gems. Additionally, a number of packages exist that bring JSX syntax highlighting to your favorite text editor.

| Editor       | Package                                                   |
|--------------|-----------------------------------------------------------|
| Atom         | [language-babel](https://atom.io/packages/language-babel) |
| Sublime Text | [babel-sublime](https://github.com/babel/babel-sublime)   |

## Why use React JSX?

Simply put, JSX makes building React applications easier and designers tend to prefer the syntax. But everyone has their own workflow, so JSX is not required to use React. However, we recommend using React JSX because it has a concise and familiar syntax for defining tree structures with attributes. Plus, it has a very small amount of syntax to learn. If you're not immediately sold on React JSX, that's fine but [give it five minutes](https://signalvnoise.com/posts/3124-give-it-five-minutes).

In addition, React developers advocate that components are a better way to separate concerns than the traditional division of markup and display logic. They tend to think that:

1. Markup and display logic are intimately tied together, so why keep them in separate files.
2. Dedicated template languages tend to be inadequate for implementing complex display logic.

React developers argue that the best solution for this problem is to use the expressive power of a full programming language to build user interfaces. React JSX allows markup and display logic to live side-by-side using the power of JavaScript but with a concise and familiar syntax.

## How does React JSX work?

Under the hood, React JSX transforms HTML-like elements, attributes, and children into arguments that are passed to the `React.createElement()` function. Both HTML tags and React component classes can be transformed from JSX to JavaScript.

### Exercise

For the following code examples, use the [Babel REPL](https://babeljs.io/repl/) to transpile the React JSX code example into JavaScript. Then write down your answers to each question.

**NOTE:** Type each code example out *by hand* and then run it. No copy-and-paste cheating either.

#### HTML tag

HTML tags use a lowercase JSX tag name. Remember, `class` and `for` are reserved keywords in JavaScript so `className` and `htmlFor` must be used instead.

```jsx
var element = <p className="bold">Tokyo Dog</p>;
```

* How many `ReactElement` objects are created?
* What are their `type`, `props`, and `children`?
* **True or False:** Babel adds `use strict;` at the top of the transpiled "file".

#### Nested HTML tags

As you might expect, HTML tags can be nested in JSX as well.

```jsx
var element = <ul>
  <li className="completed">Molly Moon</li>
  <li>Pie Mobile</li>
</ul>;
```

* How many `ReactElement` objects are created?
* What are their `type`, `props`, and `children`?

#### React component class

React component classes can also be transformed from JSX to JavaScript. First, create a component class and store it in a local variable that starts with an uppercase letter. Then, use that variable name as the JSX tag name. The lowercase and uppercase convention helps to distinguish between HTML tags and React component classes.

```jsx
var Truck = React.createClass({
  render: function() {
    return <div>
      <a href="http://www.streetdonuts.com/">Street Donuts</a>
    </div>;
  }
});

var element = <Truck />;
```

As previously mentioned, component classes must specify a `render()` function that returns a single `ReactElement` object. But that single `ReactElement` object can contain other `ReactElement` objects as children. This is the first key to building complex user interfaces.

* How many `ReactElement` objects are created?
* What are their `type`, `props`, and `children`?
* What is the `displayName` of the component class?
* What type of object does the `render()` function return?

#### Nested React component classes

Additionally, component classes can be nested within other JSX tags. This is the second key to building complex user interfaces.

```jsx
var Truck = React.createClass({
  render: function() {
    return <li>
      <a href="http://www.streetdonuts.com/">Street Donuts</a>
    </li>;
  }
});

var Trucks = React.createClass({
  render: function() {
    return <ul>
      <Truck />
    </ul>;
  }
});

var element = <Trucks />;
```

* How many `ReactElement` objects are created?
* What are their `type`, `props`, and `children`?
* What is the `displayName` of each component class?
* **True or False:** Self-closing JSX tags must end with `/>`.

#### Single-line attribute expressions

In JSX, the result of a JavaScript expression can be used as an attribute value. This is useful when you want to inline the full power of JavaScript  within a JSX tag. JavaScript expressions are wrapped in a pair of curly braces `{}` instead of quotes `""`.

```jsx
var source = 'http://i.imgur.com/nVPXKtz.jpg';
var element = <img src={source} alt="Saffron Spice" />;
```

* How many `ReactElement` objects are created?
* What are their `type`, `props`, and `children`?

#### Multi-line attribute expressions

It's common for attributes of a JSX tag to stretch beyond your preferred line length. In cases like this, you can switch to defining one attribute per line. We recommend ordering attributes alphabetically and closing the JSX tag on a separate line, just like curly braces `{}` and parenthesis `()` in JavaScript.

```jsx
var element = <input
  onChange={this.handleChange}
  type="text"
  value={this.state.searchTerm}
/>;
```

In the wild, you may see multi-line JSX tags wrapped in parenthesis. Syntactically, this provides no benefit and just increases the indentation level unnecessarily.

```jsx
// UNNECESSARY PARENTHESIS
var element = (
  <input
    onChange={this.handleChange}
    type="text"
    value={this.state.searchTerm}
  />
);
```

* How many `ReactElement` objects are created?
* What are their `type`, `props`, and `children`?

#### Child expressions

In addition to attributes, JavaScript expressions can also be used as children in JSX tags. These expressions use the exact same curly brace `{}` notation.

```jsx
var food = 'Cheese';
var element = <p>{food} Wizards</p>;
```

* How many `ReactElement` objects are created?
* What are their `type`, `props`, and `children`?

#### Boolean attributes

Boolean attributes come up when using HTML form elements with attributes like `disabled`, `required`, `checked` and `readOnly`.

```jsx
var element1 = <input type="button" disabled />;
var element2 = <input type="button" disabled={true} />;
var element3 = <input type="button" disabled={false} />;
```

* How many `ReactElement` objects are created?
* What are their `type`, `props`, and `children`?
* Which two JSX tags are equivalent?

#### Ternary attribute expressions

The only conditional statements that work inside of JSX are ternary expressions. `if` statements don't work because JSX is just syntactic sugar for JavaScript function calls.

```jsx
var isHealthy = false;
var element = <div className={isHealthy ? 'hide' : 'show'} />;
```

* How many `ReactElement` objects are created?
* What are their `type`, `props`, and `children`?
* **True or False:** Any element can be a self-closing JSX tag if it has no children.

#### Ternary child expressions

In addition to attributes, ternary expressions can be used as children for JSX tags.

```jsx
var isHealthy = false;
var element = <div>
  {isHealthy ? <p>Yuck!</p> : <p>Delicious!</p>}
</div>;
```

If a ternary expression isn't robust enough, you can use an `if` statement outside of your JSX.

```jsx
var isHealthy = false;
var message;

if (isHealthy) {
  message = <p>Yuck!</p>;
}
else {
  message = <p>Delicious!</p>;
}

var element = <div>
  {message}
</div>;
```

* How many `ReactElement` objects are created?
* What are their `type`, `props`, and `children`?

#### Style attribute expressions

In JSX, the `style` attribute accepts a JavaScript object with camel cased CSS properties.

**NOTE:** Vendor prefixes, other than `ms`, begin with a capital letter. This is why `WebkitTransition` has an uppercase `W`.

```jsx
var styles = {
  backgroundColor: 'darkblue',
  color: 'lightgreen',
  msTransition: 'all', // 'ms' is the only lowercase vendor prefix
  WebkitTransition: 'all' // note the capital 'W' here
};

var element = <p style={styles}>Happy Grillmore</p>;
```

* How many `ReactElement` objects are created?
* What are their `type`, `props`, and `children`?

#### Comments

In JSX, it's possible to comment out both attributes and children. But remember, commented out code is the same as dead code. Just delete it!

```jsx
var element = <div>
  <p>It’s Bao Time</p>
  {/* <p>Chopstix</p> */}
  <input
    // type="text"
    value="ThaiUUp" // value="Skillet"
  />
</div>;
```

* How many `ReactElement` objects are created?
* What are their `type`, `props`, and `children`?
* **True or False:** Child comments can only use the `/* */` style.

## How do you refactor JavaScript into React JSX?

Let's practice by refactoring the **Hello world** example from the previous chapter into JSX. Start by loading Babel into the DOM using a CDN. Usually this is done immediately after `react` and `react-dom` are loaded.

**NOTE:** Using Babel to transpile JSX in the browser is great for learning. However, the process is fairly slow and results in client-side computation that can be avoided. Typically, a real React application [pretranspiles its JSX](https://facebook.github.io/react/docs/tooling-integration.html#productionizing-precompiled-jsx) using a handful of Babel packages installed from npm. Since you're still learning, let's keep the toolchain simple for now.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
```

Then, we need to instruct Babel to transpile any JSX it finds into JavaScript. To do this, let's add a `type="text/babel"` attribute to the `<script>` tag.

**NOTE:** If you forget this step, you'll see an `Uncaught SyntaxError: Unexpected token <` error in the console when you start refactoring `React.createElement()` function calls to React JSX.

```html
<script type="text/babel">
...
</script>
```

Now, let's refactor the component class's `render()` function into React JSX. Simply convert all `React.createElement()` function calls into JSX using the rules from above.

**NOTE:** If you forget to end a self-closing tag with `/>`, you'll see an `Uncaught SyntaxError: embedded: Expected corresponding JSX closing tag` error in the console.

```jsx
render: function() {
  var message;

  if (this.state.who.trim() === '') {
    message = 'Hello?';
  } else {
    message = 'Hello ' + this.state.who;
  }

  return <div>
    <h1>{message}</h1>
    <input
      onChange={this.handleChange}
      type="text"
      value={this.state.who}
    />
  </div>;
}
```

Finally, we can refactor the `ReactDOM.render()` function into React JSX. Again, don't forget to properly end the self-closing tag.

```jsx
ReactDOM.render(
  <Hello />,
  document.getElementById('hello')
);
```

Open or refresh the page in your browser and make sure everything still works. Congratulations! You've just written your first React JSX application.

### Exercise

Update your **Hello world** application with the above changes. Resist the urge to copy-and-paste! Make sure everything is working before moving on to the assignment.

## Summary

In this chapter, you were exposed to the fundamentals of React JSX—an HTML-like syntax for creating `ReactElement` objects. In addition, you practiced writing React JSX and transpiling it into JavaScript using Babel, a popular JavaScript transpiler. At this point, you're well on your way to writing larger, more sophisticated React applications.

## Assignment

Remember the **sportsball team** assignment from the previous chapter? Since you're such a wizard at React JSX now, you should be able to refactor that application no problem. Give it go and ask questions if you get stuck.

After you're done refactoring it, go ahead and add some additional functionality to the application. Start by using the techniques outlined in this chapter. Feel free to augment or completely change the application any way you want.

As a reminder, here's a list of the new topics covered in this chapter.

- Anchor tags
- Image tags
- List tags
- CSS classes
- Inline CSS styles
- Attribute expressions
- Child expressions

However, feel free to use any of the [supported tags and attributes](https://facebook.github.io/react/docs/tags-and-attributes.html) in React. And for an even more advanced challenge, see if you can split your application into multiple component classes and try your hand at nested components.

## References

* [React Docs - DOM Differences](https://facebook.github.io/react/docs/dom-differences.html)
* [React Docs - If-Else in JSX](https://facebook.github.io/react/tips/if-else-in-JSX.html)
* [React Docs - Inline Styles](https://facebook.github.io/react/tips/inline-styles.html)
* [React Docs - JSX in Depth](https://facebook.github.io/react/docs/jsx-in-depth.html)
* [React Docs - Self-closing Tag](https://facebook.github.io/react/tips/self-closing-tag.html)
* [Wikipedia - Source-to-source compiler](https://en.wikipedia.org/wiki/Source-to-source_compiler)

#### [⇐ Previous](01-introduction-to-react.md) | [Table of Contents](README.md#table-of-contents) | [Next ⇒](03-react-developer-tools.md)
