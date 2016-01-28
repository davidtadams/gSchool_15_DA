#### [Table of Contents](README.md#table-of-contents) | [Next ⇒](02-react-jsx.md)

# Introduction to React

This chapter is a gentle introduction to the fundamental concepts of React. You'll learn what React is, why it's important, and how it works. By the end, you'll have built a React application, with some guidance, and be ready to build an application on your own.

| Duration by yourself | Duration as a class |
|----------------------|---------------------|
| About 1.5 hours      | About 3.5 hours     |

## What's React?

[React](https://facebook.github.io/react/index.html) is a JavaScript library for building user interfaces. In other words, React is a self-contained toolset for building the V and C in MVC. This means you can easily try it out on a small feature for an existing project or use it as the foundation for a brand new project.

## Why React?

Building large, dynamic web applications is hard. Facebook created React to try to make this process easier and faster. What's interesting about React is how different it is compared to other JavaScript solutions. In fact, React has the entire industry rethinking its approach to modern web development.

### Components hierarchy

React applications don't require many programming constructs. In most cases, there's simply no need to write controllers, models, directives, templates, or event listeners. In fact, all that's required is a hierarchy of **components**—encapsulated code that handles presentation, state, and behavior. Each component in the hierarchy knows how it should look and act given its current underlying data.

React builds a component hierarchy and then inserts it into the DOM. Whenever its underlying data changes, React will re-build the hierarchy and update the DOM as needed. Conceptually, it's like hitting the browser's refresh button on just the DOM elements that are out of date. It's a radically different approach to developing web applications. In the beginning, it can be hard to imagine how it all works. But don't worry, you'll see a working example in a minute.

Thinking about web applications as a component hierarchy is incredibly powerful because it mirrors the hierarchical nature of HTML. And although components have a fair number of moving parts, they're incredibly fun to use once you get the hang of React.

### One-way data binding

In computer science, data binding refers to the process of establishing a connection between an application's state and its user interface. Data binding is a great way to maintain consistency without writing much code by hand.

When an application uses **two-way** data binding:

1. Changes to its state (e.g. data received from a server) are *immediately* propagated to the user interface.
2. Changes to its user interface (e.g. input received from a user) are *immediately* propagated to the state.

Two-way data binding works great, especially for smaller applications. With larger applications, it's common to run into a few problems. First, it can be difficult to prevent cycles where a change to one two-way data binding causes a second data binding to change which causes the first data binding to change again. Second, two-way data bindings are expensive in terms of CPU resources. Too many of them can negatively affect an application's perceived speed, especially on resource-contrained mobile devices.

React avoids these problems by only using **one-way** data binding. When building a component hierarchy, its state and presentation logic are combined to produce a user interface. Whenever the state changes, it's automatically recombined with the presentation logic and a new user interface is produced.

However, changes made to the user interface are *not* automatically propagated to the state. As a developer, you'll have to write this code yourself. Fortunately, explicitly defining how this happens in React is simple and gives more control over the state that needs updating. With some practice, you'll be building, maintaining, and optimizing complex user interfaces like a boss.

### Exercise

In your own words, write down what's similar and what's different about React and Angular.

## What does React code look like?

Let's start by examining this simple React application.

`hello.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <div id="hello"></div>

    <script src="https://fb.me/react-0.14.3.js"></script>
    <script src="https://fb.me/react-dom-0.14.3.js"></script>

    <script>
      var element = React.createElement('h1', null, 'Hello world');
      var container = document.getElementById('hello');

      ReactDOM.render(element, container);
    </script>
  </body>
</html>
```

Open `hello.html` in your browser and, if you've typed everything correctly, you'll see the following.

![Hello world](https://i.imgur.com/nKBW36S.png)

### Exercise

Type out the above code example *by hand* and then run it. No copy-and-paste cheating either. Once everything is working, inspect the page in your browser's developer tools. In the **Elements** tab, you'll see something like this.

```html
<div id="hello">
  <h1 data-reactid=".0">Hello world</h1>
</div>
```

In your own words, write down how React works in as much detail as you can. No peaking in the next section either. The point is to make a guess now and see how close you are later. At this stage, being right or wrong doesn't matter.

## How does React work?

Most of the above code should look familiar. An empty `<div id="hello">` element is declared and inserted into the DOM. Then, the `react` and `react-dom` JavaScript libraries are loaded into the page.

Once loaded, the `React.createElement()` function is called with three arguments—a `type`, some `props`, and a `child`.

| `type`   | `props`  | `child`           |
|----------|----------|-------------------|
| `'h1'`   | `null`   | `'Hello world'`   |

The `type` tells React what kind of element to create. Next come the `props`, which is data passed into an element. You can ignore that for now. And finally, the `child` adds some content to the element. The `React.createElement()` function returns a new `ReactElement` object which is then stored in the `element` variable. It's important to note that nothing has been added to the DOM yet.

Then comes the `document.getElementById()` function. You're probably familiar with how it searches the DOM for an existing element with a specific `id` attribute and returns it. The `DOMElement` is then stored in the `container` variable. Still, nothing has been added to the DOM.

Finally, the `ReactDOM.render()` function is called with two arguments—a `ReactElement` and a `DOMElement`.

| `ReactElement` | `DOMElement`  |
|----------------|---------------|
| `element`      |   `container` |

The `ReactDOM.render()` function uses the `ReactElement` to create a component hierarchy and then inserts it into the DOM as the child of the `DOMElement`. The `ReactDOM.render()` function controls the contents of the `DOMElement`. Any existing elements inside are replaced when the function is first called. In later calls, React uses its reconciliation algorithm to efficiently update the contents.

To help learn how React works, the code example from above is extra explicit about the input and output of each React function. In a production system, the same code would be written like this.

```html
<script>
  ReactDOM.render(
    React.createElement('h1', null, 'Hello world'),
    document.getElementById('hello')
  );
</script>
```

### Exercise

Update your code with the above changes. And if needed, update what you wrote earlier about how React works.

## Component presentation

Now that you've gotten some practice with the fundamentals, it's time to build a more interesting React application. You could use only `ReactElement` objects, but to really take advantage of React, you'll want to leverage components. Remember, components are encapsulated code that handle presentation, state, and behavior.

Let's start by moving the presentation logic of the previous code example into a custom component. The `React.createClass()` function will create and return a component class given a `specification` object.

`hello.html`
```html
<script>
  var Hello = React.createClass({
    render: function() {
      return React.createElement('h1', null, 'Hello world');
    }
  });

  ReactDOM.render(
    React.createElement(Hello),
    document.getElementById('hello')
  );
</script>
```
The `specification` object *must* implement a `render()` function that returns a single `ReactElement`. This is so important, it bears repeating. The `specification` object given to the `React.createClass()` function **must** implement a `render()` function that returns a single `ReactElement`. Otherwise :boom:.

The reason why this is so important is because React will call the `render()` function, on your behalf, when it's building the component hierarchy in the `ReactDOM.render()` function. If it isn't implemented correctly, React will complain loudly by throwing an error.

Also note how different a component class is from a standard, object-oriented class. You *never* explicitly call `new` to instantiate it. Again, React does that for you inside the `ReactDOM.render()` function when it's building the component hierarchy.

The last thing to note is how `React.createElement()` only requires one argument—`type`. If there's no data or children to pass into an element, they can be omitted.

### Exercise

Update your code with the above changes. Once everything is working, update your notes with what you just learned.

## Component state

Now that our component class has some presentation logic, let's spice it up by adding some state.

`hello.html`
```html
<script>
  var Hello = React.createClass({
    getInitialState: function() {
      return { who: 'world' };
    },

    render: function() {
      return React.createElement('h1', null, 'Hello ' + this.state.who);
    }
  });

  ReactDOM.render(
    React.createElement(Hello),
    document.getElementById('hello')
  );
</script>
```

Component classes can also define a `getInitialState()` function. It's invoked once, and only once, right before the component is **mounted** or inserted into the DOM. The function's return value is used as the initial value of `this.state`.

After the component is mounted, React will invoke the `render()` function which should be implemented as a **pure function**. In other words, it should:

1. Return the same `ReactElement` given the same component state.
2. Not modify the component's state.
3. Not read from or write to the DOM.
4. Not interact with the browser via functions like `setTimeout()`.

React provides other places where you can modify state or interact with the browser. Just not in the `render()` function. Keeping the `render()` function pure makes component classes easier to think about.

### Exercise

Update your code with the above changes. Once everything is working, update your notes with what you just learned.

## Component hierarchy

Now that our component class has state, let's provide a dynamic user interface to change that state. To start off, we'll need to add elements to our component hierarchy.

`hello.html`
```html
<script>
  var Hello = React.createClass({
    getInitialState: function() {
      return { who: 'world' };
    },

    render: function() {
      return React.createElement('div', null,
        React.createElement('h1', null, 'Hello ' + this.state.who),
        React.createElement('input', { type: 'text' })
      );
    }
  });

  ReactDOM.render(
    React.createElement(Hello),
    document.getElementById('hello')
  );
</script>
```

Remember how the `React.createElement()` function accepts a `type`, some `props`, and a `child`? Well, a `child` can be either a `String` or another `ReactElement`. Neat!

In addition, an arbitrary number of children can be passed as arguments into the `React.createElement()` function. Just don't forget to pass something in for `type` and `props` first. Creating a hierarchy of `ReactElement` objects is how the `render()` function can return more than one element.

**NOTE:** The order in which children are passed into the `React.createElement()` function is the order they'll be inserted into the DOM.

As you can see from the above code, the `props` object is made up of key-value pairs that set the HTML attributes of the element. Any HTML attribute can be a key in `props` object so long as it's converted to camelcase. However, `class` and `for` are reserved keywords in JavaScript so `className` and `htmlFor` must be used instead.

**NOTE:** Here's an official list of the [supported HTML tags and attributes](https://facebook.github.io/react/docs/tags-and-attributes.html) in React.

### Exercise

Update your code with the above changes and run the code. Once everything is working, inspect the page in your browser's developer tools. In the **Elements** tab, you'll see something like this.

```html
<div data-reactid=".0">
  <h1 data-reactid=".0.0">Hello world</h1>
  <input type="text" data-reactid=".0.1">
</div>
```

Now update your notes with what you just learned.

## One-way data binding

With a dynamic user interface in place, let's connect it to the state inside our component class. Remember, React's one-way data bindings prevent changes made to the user interface from automatically propagating to the state. We'll have to write this code ourselves.

`hello.html`
```html
<script>
  var Hello = React.createClass({
    getInitialState: function() {
      return { who: 'world' };
    },

    handleChange: function(event) {
      var nextState = { who: event.target.value };
      this.setState(nextState);
    },

    render: function() {
      return React.createElement('div', null,
        React.createElement('h1', null, 'Hello ' + this.state.who),
        React.createElement('input', {
          onChange: this.handleChange,
          type: 'text',
          value: this.state.who
        })
      );
    }
  });

  ReactDOM.render(
    React.createElement(Hello),
    document.getElementById('hello')
  );
</script>
```

Component classes can also define custom **event handlers**. Event handlers respond to events that are fired due to a user interacting with a DOM element. To respond to events fired from a `ReactElement`, simply assign an event handler (e.g. `this.handleChange`) to a camelcase event (e.g. `onChange`) in its `props` object. Then any time a user changes the element, the event is triggered and the event handler is invoked.

Here's an official list of the [supported events](https://facebook.github.io/react/docs/events.html#supported-events) in React.

When an event handler is invoked by React, an `event` object is passed in as the first argument. The `event` object contains all the relevant information about the event that was just fired. Because of one-way data binding, it's up to you to determine how to handle the event.

In the code above, both the `h1` and `input` elements need be updated to reflect what the user has typed. In other words, the component's state needs to be updated. To do that, the `this.setState()` function is called with a `nextState` object. This function performs a *shallow* merge of the `nextState` object into the current `this.state` object. The resulting object is automatically reassigned back into `this.state` variable for you.

After the merge, the component is also automatically re-rendered thus updating the user interface. Because of this, you *never* modify the `this.state` object directly. To change a component's state, always use the `this.setState()` function.

React thinks of components as simple **state machines**. By thinking of a component as being in various states, it's easy to keep your user interface consistent. In React, you simply update a component's state using the `this.setState()` function and it will render a new user interface based on this new state. React efficiently updates the DOM using a process called **reconciliation** which we'll study later.

### Exercise

Update your code with the above changes. Once everything is working, update your notes with what you just learned.

## React behavior

Now that our component class responds to user interface changes, let's expand its behavior so it's more interesting.

`hello.html`
```html
<script>
  var Hello = React.createClass({
    getInitialState: function() {
      return { who: 'world' };
    },

    handleChange: function(event) {
      var nextState = { who: event.target.value };
      this.setState(nextState);
    },

    render: function() {
      var message;

      if (this.state.who.trim() === '') {
        message = 'Hello?';
      } else {
        message = 'Hello ' + this.state.who;
      }

      return React.createElement('div', null,
        React.createElement('h1', null, message),
        React.createElement('input', {
          onChange: this.handleChange,
          type: 'text',
          value: this.state.who
        })
      );
    }
  });

  ReactDOM.render(
    React.createElement(Hello),
    document.getElementById('hello')
  );
</script>
```

The main difference in the above code example is that the `render()` function now builds up a local `message` variable which is then passed into the `h1` element as its child. Note that `message` is *not* part of the component's state.

A component's state should only contain data that its event handlers may change in order to trigger a user interface update. In real applications, this data tends to be very small. When building a stateful component, think about the minimal possible representation of its state and only store those values in the `this.state` object. Then, inside the `render()` function, simply compute any other information you need based on `this.state`.

Don't worry about precomputing values based on state. Adding redundant and computed values into the `this.state` object means you'll have to write code that explicitly keeps everything synchronized. Instead, rely on the component to compute values inside the `render()` function and the user interface will remain consistent when the state changes.

### Exercise

Update your code with the above changes. Once everything is working, update your notes with what you just learned.

## Summary

In this chapter, you were exposed to the fundamentals of developing React applications. While React is just a JavaScript library for building user interfaces, it's composed of two major concepts.

1. A components hierarchy that handles presentation, state, and behavior.
2. One-way data binding where only changes to state are immediately propagated to the user interface.

These two concepts spawn a bunch more subconcepts like component classes, pure functions, mounting, event handlers, state machines, and more. To build your own React applications, you have to experience all the moving parts in this chapter. Speaking of which...

## Assignment

Write a React app that cheers your favorite city's sportsball team. For example:

![City](https://dl.dropboxusercontent.com/s/w41k7wj1kqqs1in/B89A9A25-D4C8-453D-9398-BB694AA72781-40520-0001E846DB7513FF.gif?dl=0)

Make sure your app is case insensitive when it comes to city names. In other words, treat `SEATTLE`, `seattle`, `SeAtTlE`, etc. all that same.

**HINT:** It's perfectly fine if the initial value of state properties, like `this.state.who`, start out as an empty String `""`.

## References

* [React Docs - Top Level API](https://facebook.github.io/react/docs/top-level-api.html)
* [React Docs - Component API](https://facebook.github.io/react/docs/component-api.html)
* [React Docs - Component Specs and Lifecycle](https://facebook.github.io/react/docs/component-specs.html)
* [React Docs - Tags and Attributes](https://facebook.github.io/react/docs/tags-and-attributes.html)
* [React Docs - Interactivity and Dynamic UIs](https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html)
* [React Docs - Event System](https://facebook.github.io/react/docs/events.html)
* [React Docs - DOM Differences](https://facebook.github.io/react/docs/dom-differences.html)

#### [Table of Contents](README.md#table-of-contents) | [Next ⇒](02-react-jsx.md)
