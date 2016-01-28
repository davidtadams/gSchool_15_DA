#### [⇐ Previous](04-synthetic-events.md) | [Table of Contents](README.md#table-of-contents) | [Next ⇒](06-component-life-cycle.md)

# Props and State

- Understand what props and states are and how they're used within component classes

| Duration by yourself | Duration as a class |
|----------------------|---------------------|
| TBD                  | TBD                 |

## What are props and why are they important?

As you've seen, **props** are data that's passed into a component when it's created. For example, you can use props to pass in HTML attributes when creating a native HTML component.

```jsx
var element = <p className="bold">Tokyo Dog</p>;
```

Additionally, you can use props to pass in *immutable*, or unchangeable, data when creating a custom component. This data is used to configure a new component before it's mounted (i.e. inserted into the DOM) and is accessible anywhere inside a component class via the `this.props` object. After a component's props are set, they never change.

```jsx
var Hello = React.createClass({
  render: function() {
    return <h1>{this.props.greeting} world</h1>;
  }
});

ReactDOM.render(
  <Hello greeting='Hello' />,
  document.getElementById('hello')
);
```

Every component has their own `this.props` object which is just a plain, old JavaScript object. But remember, the key-value pairs inside `this.props` are immutable. That means `this.props` is not a good location for storing data that's received *after* the component has been mounted. For that, you need to look elsewhere...

## What is state and why is it important?

On the other hand, **state** is *mutable*, or changeable, data that's initialized and updated from within a component. This data is initialized by a component's `getInitialState()` function and is accessible anywhere inside a component class via the `this.state` object. Remember, the `getInitialState()` function is automatically invoked *once* before a component is mounted. Afterwards, a component's state is updated by event handlers that receive data from events like user input or server responses.

```jsx
var Hello = React.createClass({
  getInitialState: function() {
    return { who: 'world' };
  },

  handleChange: function(event) {
    var nextState = { who: event.target.value };
    this.setState(nextState);
  },

  render: function() {
    return <div>
      <h1>Hello {this.state.who}</h1>
      <input
        onChange={this.handleChange}
        type="text"
        value={this.state.who}
      />
    </div>;
  }
});

ReactDOM.render(
  <Hello />,
  document.getElementById('hello')
);
```

Every component has their own `this.state` object which is just a plain, old JavaScript object. And because the key-value pairs inside `this.state` are mutable, they're the perfect location for storing data that changes over time. Remember to always use the `this.setState()` function to merge `nextState` into `this.state` because, after the merge, the component is automatically re-rendered.

## How are props and state used together?

React invokes a component's `render()` function whenever it's mounted or its state is updated. Using one-way data binding, a component's props, state, and presentation logic are combined into a user interface. It may help to think of the data inside of `this.props` and `this.state` as implicit inputs to the `render()` function.

```jsx
var Hello = React.createClass({
  getInitialState: function() {
    return { who: 'world' };
  },

  handleChange: function(event) {
    var nextState = { who: event.target.value };
    this.setState(nextState);
  },

  render: function() {
    return <div>
      <h1>{this.props.greeting} {this.state.who}</h1>
      <input
        onChange={this.handleChange}
        type="text"
        value={this.state.who}
      />
    </div>;
  }
});

ReactDOM.render(
  <Hello greeting="Hello" />,
  document.getElementById('hello')
);
```

In the example above, the `{ greeting: 'Hello' }` props object is passed into the `<Hello />` component when it's created. Before the component is mounted, React automatically invokes its `getInitialState()` function which creates the initial `{ who: 'world' }` state object.

Then, React invokes the component's `render()` function which returns a component hierarchy. React uses the hierarchy to generate and insert HTML into the DOM. All that remains is to wait for the user to interact with the DOM.

When the `<input />` element is changed, the `onChange` event is fired and the component's `this.handleChange()` function is triggered. The event handler proceeds to update the component's state using the `this.setState()` function. After updating the state, the component's `render()` function is invoked once again.

The `render()` function combines the changed `this.state` object and the unchanged `this.props` object with its presentation logic and returns a new component hierarchy. The differences between the old and new hierarchies are calculated and applied to the DOM.

**NOTE:** A component is easier to understand when its `render()` function is implemented as a [pure function](01-introduction-to-react.md#component-state). In other words, it should return the same component hierarchy given the same `this.state` and `this.props` objects.

### Exercise

Type out the above code example *by hand* and then run it. Resist the urge to copy-and-paste! Once everything is working, write down what you've learned in your own words.

## How do you separate components by concern?

When building larger React applications, it becomes important to create modular components with well-defined interfaces. While you're free to separate the different concerns of your application however you want, React components tend fall in one of two groups—either stateful or stateless.

A **stateful component** may have props but it definitely has state. Typically, a stateful component is at or near the root of a component hierarchy and is responsible for managing the majority of the hierarchy's state. Clearly stateful components are a requirement for interactivity. However, the fewer stateful components a hierarchy has, the easier it is to understand how data flows through it.

A **stateless component** often has props but it definitely has *no* state. Typically, a stateless component is at or near the leaves of a component hierarchy and is responsible for handling the majority of the hierarchy's user interface and events. Typically, a component hierarchy will have more stateless components than stateful components, especially when building complex user interfaces with lots of events.

You might be wondering how its possible to split the responsibility of managing state and handling events between two different components. For that, we'll need the help of three new concepts—ownership, state mutators, and autobinding.

```jsx
var Book = React.createClass({
  handleChange: function(event) {
    this.props.updateBook(this.props.index, event.target.value);
  },

  render: function() {
    return <div>
      <h2>Book {this.props.index}: {this.props.book}</h2>
      <input
        onChange={this.handleChange}
        type="text"
        value={this.props.book}
      />
    </div>;
  }
});

var Books = React.createClass({
  getInitialState: function() {
    return {
      books: [
        'A Game of Thrones',
        'Snow Crash',
        'The Martian'
      ]
    };
  },

  updateBook: function(index, value) {
    var nextBooks = this.state.books;
    nextBooks[index] = value;
    this.setState({ books: nextBooks });
  },

  render: function() {
    var bookEls = this.state.books.map(function(book, index) {
      return <Book
        book={book}
        index={index}
        key={index}
        updateBook={this.updateBook}
      />;
    }, this);

    return <div>{bookEls}</div>;
  }
});

ReactDOM.render(
  <Books />,
  document.getElementById('container')
);
```

In the above code example, two component classes are defined—`Book` and `Books`. `<Book />` components are stateless because its class doesn't use the `getInitialState()` function or the `this.setState()` function. On the other hand, `<Books />` components are stateful because its class *does* use the `getInitialState()` and `this.setState()` functions.

Being stateful, a `<Books />` component is only responsible for managing the hierarchy's state. While it could also handle the hierarchy's user interface and events, it follows the [single responsibility principal](https://en.wikipedia.org/wiki/Single_responsibility_principle) by delegating these additional tasks to the stateless components that it owns.

In React, an **owner** is a component that sets the props of another component. Inside the `render()` function of the `Books` component class, a new `<Book />` component is created for each book in the `this.state.books` array. As each component is created, its props are set. Therefore, the `<Books />` component is the owner of the `<Book />` components that are created inside its `render()` function.

Being stateless, each `<Book />` component is responsible for handling the hierarchy's user interface and events for a single book. To handle this responsibility, the owner sets each component's `book`, `index`, `key`, and `updateBook` props. With the exception of the `key` prop, the key-value pairs are accessible inside the `Book` component class using the `this.props` object.

**NOTE:** The `key` prop is used by React to uniquely identify sibling components of the same type. If a keyed component is changed in any way, React can more efficiently update the DOM. The `key` prop is *not* accessible via `this.props.key`.

The following table enumerates the values stored inside the `this.props` object for each `<Book />` component.

| `this.props.book`     | `this.props.index` | `this.props.updateBook()`  |
|-----------------------|--------------------|----------------------------|
| `'A Game of Thrones'` | `0`                | `updateBook()`             |
| `'Snow Crash'`        | `1`                | `updateBook()`             |
| `'The Martian'`       | `2`                | `updateBook()`             |

Inside the `render()` function of the `Book` component class, the `book` and `index` props are combined with native components to produce a user interface. The user interface allows a user to view and update a book's information. When the user changes the value of the `<input type="text" />` component, the `handleChange()` function is triggered.

As you've learned, event handlers process the event and eventually call the `this.setState()` function. However, `<Book />` components are stateless. In order to update the component hierarchy's state, they have to tell the stateful components that there is new state for them to process. They do this using a state mutator.

In React, a **state mutator** is a function inside a stateful component that calls the `this.setState()` function. The `<Books />` component defines an `updateBook()` function. It passes the function down to its owned `<Book />` components through their props. When the `handleChange()` function is triggered, the state mutator is invoked.

When nesting custom components, data flows from the owner to the owned through its props. Effectively, this is another form of one-way data binding. Owners bind their owned component's props to some value the owner has computed based on its props or state. Since this process happens recursively, data changes are automatically reflected everywhere they are used.

In React, **autobinding** is the process of binding a component to its functions. In other words, the `this` variable inside a component's function automatically refers to the component that specified the function no matter how the function was invoked. Specifically, this is why the `this` variable inside the `updateState()` function refers to a `<Books />` component even though it was invoked using `this.props.updateState()`.

**NOTE:** React only autobinds components to functions specified with the `React.createClass()` function and *not* with the ES2015 `class` keyword.

Since mutable state increases complexity and reduces predictability, components with only immutable props are easier to think about. Whenever it's time to update the DOM, they build the user interface using the data they're given. When a user interacts with their components, they handle the event using the functions their given.

Inside the `render()` function of the `Books` component class, the `Array.prototype.map()` function collects the returned `<Book />` elements into an array. The resulting array is stored in the `bookEls` variable which is used as the child of a `<div>` element. When an array is used as a child, its elements become individual children of the parent `ReactElement`.

### Exercise

Type this out and write stuff in your own words.

If we look in the chrome console we see the following warning:

"Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of BookList. See https://fb.me/react-warning-keys for more information."

Check out [this](http://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js) stackoverflow for why this is encouraged by React. How can we refactor our previous example to remove this warning?

Hint: We are using the `map()` function to iterate over our array. The callback function to map takes in additional parameters including the index, can we use that as our unique key to remove the warning?

## Summary

Words, mouth, memories.

## Assignment: Part 1

Using [this template](assignments/05-props-and-state/books.html), create both a `Books` and `Book` React component that looks and behaves like this.

![Books Inventory Part 1](https://dl.dropboxusercontent.com/s/pb3pubwywwetml9/D388F163-2BE6-4910-8A43-FD1BBB772F4E-40520-0002557FF8F592CA.gif?dl=0)

```js
getInitialState: function() {
  return {
    books: [{
      author: 'George R. R. Martin',
      cover: 'https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg',
      isbn: '978-0553103547',
      stock: 7,
      title: 'A Game of Thrones',
      year: 1996
    }, {
      author: 'Neal Stephenson',
      cover: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Snowcrash.jpg',
      isbn: '978-1491515051',
      stock: 3,
      title: 'Snow Crash',
      year: 1992
    }, {
      author: 'Andy Weir',
      cover: 'https://upload.wikimedia.org/wikipedia/en/c/c3/The_Martian_2014.jpg',
      isbn: '978-0804139021',
      stock: 11,
      title: 'The Martian',
      year: 2014
    }]
  };
}
```

## Assignment: Part 2

When you're finished with the assignment above, enhance your `Books` and `Book` components so users can change a book's stock with their keyboard like this.

![Books Inventory Part 2](https://dl.dropboxusercontent.com/s/ld2u2jit6hm9yni/804FA6BD-9377-4DE7-94DB-4381B30AA59B-40520-000255CD35A762E4.gif?dl=0)

## References

* [GitHub - props vs state by uberVU](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)
* [React docs - Component Life Cycle](https://facebook.github.io/react/docs/component-specs.html)
* [React docs - Multiple Components](https://facebook.github.io/react/docs/multiple-components.html)

#### [⇐ Previous](04-synthetic-events.md) | [Table of Contents](README.md#table-of-contents) | [Next ⇒](06-component-life-cycle.md)
