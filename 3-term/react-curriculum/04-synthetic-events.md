#### [⇐ Previous](03-react-developer-tools.md) | [Table of Contents](README.md#table-of-contents) | [Next ⇒](05-props-and-state.md)

# Synthetic Events

Now that you've gotten some practice with React JSX and the React Developer Tools, let's learn how to make our React applications more interactive. In this chapter, you'll learn what synthetic events are, why they're important, and how to use them. By the end, you'll have written a bunch of React applications that handle a variety of user interactions.

| Duration by yourself | Duration as a class |
|----------------------|---------------------|
| TBD                  | About 10.5 hours    |

## What's a synthetic event and why is it important?

A **synthetic event** is a cross-browser wrapper around a browser's native event. In React, event handlers are passed a [`SyntheticEvent`](https://facebook.github.io/react/docs/events.html) object to their first parameter.

```JSX
handleChange: function(event) {
  // event is a SyntheticEvent object
}
```

A `SyntheticEvent` object has the same properties as a browser's native event object including an `event.target` object and an `event.preventDefault()` function. The only difference is that the properties of a synthetic event work *identically* across all browsers including IE8 and above. For example, handling native `onMouseEnter` and `onMouseLeave` events has historically been a cross-browser pain point. In this chapter, we're going to practice how to handle synthetic events and how to leverage their properties in a variety of common use cases.

**NOTE:** In the vast majority of cases, you won't need the underlying native event object. But if for some reason you ever do, you can access it via the `event.nativeEvent` property.

## How does the synthetic event system work?

Understanding React's synthetic event system is critical, especially if you ever find yourself integrating React into an existing web application. Thankfully, handling a synthetic event in React is similar to handling a native event in traditional JavaScript. However, React does a few things under the hood to keep your code performant and easy to understand.

When React starts up, it attaches a single event listener onto the root of the DOM. In React, you do *not* have to attach any additional event listeners. If you find yourself reaching for functions like `EventTarget.addEventListener()` or `jQuery.on()` when building a React application from scratch, you're doing it wrong.

**NOTE:** You may, however, need to integrate a React application into a page with preexisting event listeners. You'll be happy to know that React's synthetic event system is completely isolated from the browser's native event system. This makes reasoning about your components much easier.

To handle events in React, simply register an event handler with an event prop of a component. This feels similar to registering an event handler with an event attribute of an HTML element. The only difference is that the event prop is written in camelcase.

```jsx
var Textfield = React.createClass({
  getInitialState: function() {
    return { value: '' };
  },

  handleChange: function(event) {
    var nextState = { value: event.target.value };
    this.setState(nextState);
  },

  render: function() {
    return <input
      onChange={this.handleChange}
      type="text"
      value={this.state.value}
    />;
  }
});
```

In the above code example, the `<input />` component's event prop is `onChange` and the event handler is a reference to the `this.handleChange()` function. When the component is mounted or unmounted, the event handler is registered to or unregistered from React's own internal mapping.

When the `value` of the `<input />` component changes, a native event is fired and propagated through the DOM. At the end of [the bubbling phase](http://www.quirksmode.org/js/events_order.html), the native event reaches React's single event listener. The listener triggers its own internal event handler kicking off React's synthetic event system.

First, the internal event handler wraps the native event inside a `SyntheticEvent` object. Then the synthetic event is propagated through the component hierarchy using an [internal capturing and bubbling phase](http://codepen.io/ryansobol/pen/Lpvayw?editors=001). In this way, React ensures that a synthetic event is *identical* across all browsers in terms of both its properties and the way it's propagated.

As the synthetic event propagates from component to component, it looks through their registered event handlers and triggers any that are bound to the event's name. All of the synthetic events covered in this chapter will trigger event handlers during the internal bubbling phase. Though it's rarely needed, React can trigger an event handler during the internal capturing phase too. To do so, simply register an event handler with an event prop that ends in the word `Capture` like `onChangeCapture`.

When an event handler is called, it's time for your code to shine. This is where you'll update a component's `this.state` object by using the `this.setState()` function. If you need to prevent the browser from loading a page as it follows an `href` or `action` URL on an `<a>` or `<form>` component, call the `event.preventDefault()` function inside the event handler.

```jsx
var Anchor = React.createClass({
  handleClick: function(event) {
    event.preventDefault();
    // The browser will no longer load the page at event.target.href
  },

  render: function() {
    return <a
      href="do-not-follow.html"
      onClick={this.handleClick}
    >
      Do not follow my href!
    </a>;
  }
});
```

And if you need to stop a synthetic event from propagating to other components during the internal bubbling phase, call the `event.stopPropagation()` function. However, this is pretty rare and you should only do it if there's a compelling reason.

**NOTE:** As of React v0.14, returning `false` from an event handler will no longer prevent default behavior or stop event propagation. You'll need to call `event.preventDefault()` or `event.stopPropagation()` manually.

In this section, we've covered a bunch of technical information about React's synthetic event system. To summarize:

1. React's synthetic event system is completely isolated from the browser's native event system.
2. The synthetic event system works identically across all browsers.
3. Handling a synthetic event is similar to handling a native event.

### Exercise

In your own words, write down how React's synthetic event system works identically across all browsers.

## How do you handle synthetic events?

React [supports a ton of synthetic events](https://facebook.github.io/react/docs/events.html#supported-events), but we're only going to focus on the most common ones.

* [Form events](#form-events)
  * [Textfield input](#textfield-input)
  * [Textarea](#textarea)
  * [Checkbox input](#checkbox-input)
  * [Radio input](#radio-input)
  * [Select drop-down](#select-drop-down)
  * [Form submission](#form-submission)
* [Focus events](#focus-events)
* [Mouse events](#mouse-events)
* [Keyboard events](#keyboard-events)

### Exercise

Type out the following code examples *by hand* and run them to make sure they work. Resist the urge to copy-and-paste!

**NOTE:** The surrounding HTML structure has been omitted on purpose. From here on out, you're responsible for implementing it.

## Form events

Form components such as `<input />`, `<textarea />`, and `<select>` differ from other native components because their state can be changed by a user. However, when a form component's state is set inside a React application, it's known as a **controlled component**.

```jsx
var element = <input type="text" value="I'm a controlled component." />;
```

The problem with this controlled component is that it renders a *read-only* element. In other words, a user cannot change the state living inside its `value` prop. To implement a form component that's both controlled by React and changeable by a user, you'll want to register an event handler with its `onChange` prop and set its state with a one-way data binding.

```jsx
var element = <input onChange={this.handleChange} type="text" value={this.state.value} />;
```

When a user changes the component's underlying element, its event handler is triggered. The handler can then update `this.state.value` and cause the component hierarchy to re-render the user interface. On most devices, this happens so fast that a user never perceives a delay.

The next few sections demonstrate the difference between controlled and uncontrolled form components in greater detail.

### Textfield input

When a user types a character into an `<input type="text" />` component, the `onChange` event will fire. You'll need to register an `onChange` event handler to share control over the component's `value` prop with your users.

**NOTE:** If you share control over the `value` prop but forget to also register an `onChange` event handler, the component will render as read-only and a warning will be sent to your browser's console.

```jsx
var TextfieldInput = React.createClass({
  getInitialState: function() {
    return { value: "I'm changeable and under React's control" };
  },

  handleChange: function(event) {
    var nextValue = event.target.value;
    this.setState({ value: nextValue });
  },

  render: function() {
    return <div>
      <input
        onChange={this.handleChange}
        type="text"
        value={this.state.value}
      />

      <input
        type="text"
        value="I'm read-only, am under React's control, but raise a warning."
      />

      <input
        type="text"
        defaultValue="I'm changeable but am not under React's control."
      />

      <input
        type="text"
        readOnly="true"
        value="I'm read-only and under React's control."
      />
    </div>;
  }
});

ReactDOM.render(
  <TextfieldInput />,
  document.getElementById('container')
);
```

### Textarea

When a user types a character into a `<textarea />` component, the `onChange` event will fire. In HTML, the value of a `<textarea>` element is set by its children. In React, the `value` prop is used instead. You'll need to register an `onChange` event handler to share control over the component's `value` prop with your users.

**NOTE:** If you share control over the `value` prop but forget to also register an `onChange` event handler, the component will render as read-only and a warning will be sent to your browser's console.

```jsx
var Textarea = React.createClass({
  getInitialState: function() {
    return { value: "I'm changeable and under React's control." };
  },

  handleChange: function(event) {
    var nextValue = event.target.value;
    this.setState({ value: nextValue });
  },

  render: function() {
    return <div>
      <textarea
        onChange={this.handleChange}
        value={this.state.value}
      />

      <textarea
        value="I'm read-only, am under React's control, but raise a warning."
      />

      <textarea
        defaultValue="I'm changeable but am not under React's control."
      />

      <textarea
        readOnly="true"
        value="I'm read-only and under React's control."
      />
    </div>;
  }
});

ReactDOM.render(
  <Textarea />,
  document.getElementById('container')
);
```

### Checkbox input

When a user clicks an `<input type="checkbox" />` component, the `onChange` event will fire. You'll need to register an `onChange` event handler to share control over the component's `checked` prop with your users.

**NOTE:** If you share control over the `checked` prop but forget to also register an `onChange` event handler, the component will render as read-only and a warning will be sent to your browser's console.

```jsx
var CheckboxInput = React.createClass({
  getInitialState: function() {
    return { checked: false };
  },

  handleChange: function(event) {
    var nextChecked = event.target.checked;
    this.setState({ checked: nextChecked });
  },

  render: function() {
    return <div>
      <div>
        {"I'm changeable and under React's control."}
        <input
          onChange={this.handleChange}
          type="checkbox"
          checked={this.state.checked}
        />
      </div>

      <div>
        {"I'm read-only, am under React's control, but raise a warning."}
        <input type="checkbox" checked={true} />
      </div>

      <div>
        {"I'm changeable but am not under React's control."}
        <input type="checkbox" defaultChecked={true} />
      </div>

      <div>
        {"I'm read-only and under React's control."}
        <input type="checkbox" readOnly="true" checked={true} />
      </div>
    </div>;
  }
});

ReactDOM.render(
  <CheckboxInput />,
  document.getElementById('container')
);
```

### Radio input

When a user clicks an `<input type="radio" />` component, the `onChange` event will fire. In HTML, you manage groups of radio elements using a shared value for the `name` attribute. In React, you manage groups with one-way data bindings instead. You'll need to register an `onChange` event handler to share control over the component's `checked` prop with your users.

**NOTE:** If you share control over the `checked` prop but forget to also register an `onChange` event handler, the component will render as read-only and a warning will be sent to your browser's console.

```jsx
var RadioInput = React.createClass({
  getInitialState: function() {
    return { value: 'no' };
  },

  handleChange: function(event) {
    var nextValue = event.target.value;
    this.setState({ value: nextValue });
  },

  render: function() {
    return <div>
      <div>
        {"We're changeable and under React's control."}
        <input
          onChange={this.handleChange}
          type="radio"
          checked={this.state.value === 'yes'}
          value="yes"
        />
        <input
          onChange={this.handleChange}
          type="radio"
          checked={this.state.value === 'no'}
          value="no"
        />
      </div>

      <div>
        {"We're read-only, are under React's control, but raise a warning."}
        <input type="radio" name="1" checked={true} value="yes" />
        <input type="radio" name="1" checked={false} value="no" />
      </div>

      <div>
        {"We're changeable but are not under React's control."}
        <input type="radio" name="2" defaultChecked={true} value="yes" />
        <input type="radio" name="2" defaultChecked={false} value="no" />
      </div>

      <div>
        {"We're read-only and are under React's control."}
        <input type="radio" name="3" readOnly="true" checked={true} value="yes" />
        <input type="radio" name="3" readOnly="true" checked={false} value="no" />
      </div>
    </div>;
  }
});

ReactDOM.render(
  <RadioInput />,
  document.getElementById('container')
);
```

### Select drop-down

When a user selects a new `<option>` from a `<select>` component, the `onChange` event will fire. You'll need to register an `onChange` event handler to share control over the component's `value` prop with your users.

**NOTE:** If you share control over the `value` prop but forget to also register an `onChange` event handler, the component will render as read-only and a warning will be sent to your browser's console.

```jsx
var SelectDropDown = React.createClass({
  getInitialState: function() {
    return { value: 'B' };
  },

  handleChange: function(event) {
    var nextValue = event.target.value;
    this.setState({ value: nextValue });
  },

  render: function() {
    return <div>
      <div>
        {"I'm changeable and under React's control."}
        <select onChange={this.handleChange} value={this.state.value}>
          <option value="A">Apple</option>
          <option value="B">Banana</option>
        </select>
      </div>

      <div>
        {"I'm read-only, am under React's control, but raise a warning."}
        <select value="B">
          <option value="A">Apple</option>
          <option value="B">Banana</option>
        </select>
      </div>

      <div>
        {"I'm changeable but am not under React's control."}
        <select defaultValue="B">
          <option value="A">Apple</option>
          <option value="B">Banana</option>
        </select>
      </div>

      <div>
        {"I'm read-only but under React's control."}
        <select readOnly={true} value="B">
          <option value="A">Apple</option>
          <option value="B">Banana</option>
        </select>
      </div>
    </div>;
  }
});

ReactDOM.render(
  <SelectDropDown />,
  document.getElementById('container')
);
```

### Form submission

When a user submits a `<form>` component, the `onChange` event will fire. You'll need to register an `onSubmit` event handler that calls the `event.preventDefault()` function to prevent the browser from reloading the page.

**NOTE:** In terms of their events, `<input type="text" />` and `<input type="password" />` components are identical. Because each component has a unique `name` prop, the `this.handleChange()` event handler can be registered with both components.

```jsx
var FormSubmission = React.createClass({
  getInitialState: function() {
    return { json: 'null', password: '', username:'' };
  },

  handleChange: function(event) {
    var nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  },

  handleSubmit: function(event) {
    event.preventDefault();

    var nextJSON = JSON.stringify({
      password: this.state.password,
      username: this.state.username
    });

    this.setState({ json: nextJSON });
  },

  render: function() {
    return <div>
      <form onSubmit={this.handleSubmit}>
        Username:
        <input
          name="username"
          onChange={this.handleChange}
          type="text"
          value={this.state.username}
        />

        Password:
        <input
          name="password"
          onChange={this.handleChange}
          type="password"
          value={this.state.password}
        />

        <input type="submit" value="Log in" />
      </form>

      <pre>JSON: '{this.state.json}'</pre>
    </div>;
  }
});

ReactDOM.render(
  <FormSubmission />,
  document.getElementById('container')
);
```

## Focus events

When a user gives focus to a component, thus removing focus from another, the `onFocus` and `onBlur` events will fire on their respective components.

```jsx
var FocusAndBlur = React.createClass({
  getInitialState: function() {
    return { value: "I'm blurred :(" };
  },

  handleBlur: function() {
    var nextValue = "I'm blurred :(";
    this.setState({ value: nextValue });
  },

  handleFocus: function() {
    var nextValue = "I'm focused :D";
    this.setState({ value: nextValue });
  },

  render: function() {
    return <div>
      <input
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        readOnly={true}
        value={this.state.value}
      />
    </div>;
  }
});

ReactDOM.render(
  <FocusAndBlur />,
  document.getElementById('container')
);
```

## Mouse events

When a user clicks on a component or moves the cursor across a component, the `onClick` or `onMouseMove` events will fire respectively.

When the user moves the cursor between two components, the `onMouseEnter` and `onMouseLeave` events will fire on their respective components. These events only propagate from the underlying element being left to the one being entered.

**NOTE:** The `onMouseEnter` and `onMouseLeave` events do *not* have an ordinary bubbling phase and do *not* have a capturing phase at all. This is because handling these events across nested components [can get complicated](http://www.quirksmode.org/js/events_mouse.html#link8) real fast.

```jsx
var Mouse = React.createClass({
  getInitialState: function() {
    return {
      clicks: 0,
      location: null,
      pageX: null,
      pageY: null
    };
  },

  handleClick: function() {
    var nextClicks = this.state.clicks + 1;
    this.setState({ clicks: nextClicks });
  },

  handleMouseEnter: function() {
    this.setState({ location: 'Entered' });
  },

  handleMouseLeave: function() {
    this.setState({ location: 'Left' });
  },

  handleMouseMove: function(event) {
    var nextState = {
      pageX: event.pageX,
      pageY: event.pageY
    };
    this.setState(nextState);
  },

  render: function() {
    return <div>
      <div
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseMove={this.handleMouseMove}
        style={{
          backgroundColor: 'lightblue',
          height: '300px',
          width: '300px'
        }}
      />

      <div>clicks: {this.state.clicks}</div>
      <div>location: {this.state.location}</div>            
      <div>pageX: {this.state.pageX}</div>
      <div>pageY: {this.state.pageY}</div>
    </div>;
  }
});

ReactDOM.render(
  <Mouse />,
  document.getElementById('container')
);
```

## Keyboard events

When a user presses down and releases up a key on a focusable component, the `onKeyDown` and `onKeyUp` events will fire respectively. The `onKeyDown` event will repeatedly fire as long as the key is held down.

**NOTE:** The native focusable components are `<button>`, `<input />`, `<select>`, and `<textarea />`.

When a user presses a key *and* a character is inserted into a focusable component, the `onKeyPress` event will fire. The `onKeyPress` event will fire repeatedly as long as the key is pressed down and a character is inserted. Keys like Escape, Shift, Control, and Alt can't be inserted into a component. To handle these key presses, you'll need to register an event handler with a component's `onKeyDown` event prop instead.

Typically, the registered event handlers will respond to keys in different ways. For that, you'll need compare the value of `event.which` with an expected code. When the `onKeyDown` and `onKeyUp` events are fired, `event.which` contains a **key code** number which represents an actual key on the keyboard. When the `onKeyPress` event is fired, `event.which` contains a **character code** number which represents the key's UTF-8 character.

Here's a table that explains the difference between a key code and a character code.

| Key    | Key code | Character code |
|--------|----------|----------------|
| a      | 65       | 97             |
| A      | 65       | 65             |
| Return | 13       | 13             |
| Escape | 27       | N/A            |

**NOTE:** As of Firefox v42 and React v0.14, pressing the Escape key will sometimes stop React from executing. I haven't figure out why this happens, but you can fix it by calling the  `event.preventDefault()` function in your event handler. Other browsers like Chrome don't have this problem and calling the `event.preventDefault()` function has no effect on them.

```js
handleKeyDown: function(event) {
  if (event.which === 27) {
    event.preventDefault();
    // continue handling the event
  }
}
```

Here's a table to help you quickly remember which event does what.

| Event        | Trigger(s)                                  | `event.which`  |
|--------------|---------------------------------------------|----------------|
| `onKeyDown`  | When pressed down. Repeats while holding.   | Key code       |
| `onKeyPress` | When inserted. Repeats while inserting.     | Character code |
| `onKeyUp`    | When released up.                           | Key code       |

In summary, use `onKeyPress` to handle insertable key presses and `onKeyDown` to handle non-insertable key presses.

```jsx
var Keyboard = React.createClass({
  getInitialState: function() {
    return { events: [], value: '' };
  },

  handleChange: function(event) {
    var nextValue = event.target.value;
    this.setState({ value: nextValue });
  },

  handleClick: function() {
    this.setState({ events: [], value: '' });
  },

  handleKeyDown: function(event) {
    var nextEvents = this.state.events;
    nextEvents.push('Key Down: ' + event.which);
    this.setState({ events: nextEvents });
  },

  handleKeyPress: function(event) {
    var nextEvents = this.state.events;
    nextEvents.push('Key Press: ' + event.which);
    this.setState({ events: nextEvents });
  },

  handleKeyUp: function(event) {
    var nextEvents = this.state.events;
    nextEvents.push('Key Up: ' + event.which);
    this.setState({ events: nextEvents });
  },

  render: function() {
    var eventEls = this.state.events.map(function(event, index) {
      return <div key={index}>{event}</div>;
    });

    return <div>
      <textarea
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        onKeyPress={this.handleKeyPress}
        onKeyUp={this.handleKeyUp}
        value={this.state.value}
      />

      <button onClick={this.handleClick}>
        Clear
      </button>

      <h2>History</h2>

      {eventEls}
    </div>
  }
});

ReactDOM.render(
  <Keyboard />,
  document.getElementById('container')
);
```

## Summary

In this chapter, you learned how to make React applications more interactive. Specifically, you'll learned how React's synthetic event system works identically across all browsers. You also learned how to handle synthetic events and how to leverage their properties in a variety of common use cases. Believe it or not, but this chapter only begins to scratch the surface of all the [supported events and properties](https://facebook.github.io/react/docs/events.html#supported-events) in React.

## Assignment: Part 1

Using [this template](assignments/04-synthetic-events/calculator.html), create a `Calculator` React component that looks and behaves like this.

![Calculator Part 1](http://i.imgur.com/58S88rS.gif)

The `Calcuator` component only needs to solves math expressions with a single operator. But it does need to work with both positive and negative operands. (e.g. `1+2`, `-3*4`, `5/-6`, etc.)

More specifically, your `Calculator` component needs to:

* Display a blank screen when its first rendered.
* Respond to operand or operator button clicks by adding its content to the screen.
* Respond to equal button clicks by evaluating the screen's math expression.
  * Match the math expression with the regular expression from below.
  * If the expressions don't match, update the screen with the word `Error`.
  * If the expressions do match, calculate the result and update the screen.
* Ignore operand, operator, and equal button clicks when the screen displays `Error`.
* Respond to cancel button clicks by clearing the screen.

**HINT 1:** To make it easier for you to focus on handling events, you can use the [`String.prototype.match()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) function with the following regular expression: `/^(\-?\d+)(x|\/|\+|\-)(\-?\d+)$/`. For example, matching the math expression `-1+2` to the regular expression works like this.

```js
var matches = '-1+2'.match(/^(\-?\d+)(x|\/|\+|\-)(\-?\d+)$/);
console.log(matches);  // ["-1+2", "-1", "+", "2"]
```

The `String.prototype.match()` function returns `null` when the math and regular expressions don't match.

**HINT 2:** In this assignment, the `<input id="screen" />` is read-only because...

## Assignment: Part 2

When you're finished with the assignment above, enhance your `Calcuator` component so users can input a math expression from their keyboard like this.

![Calculator Part 2](https://dl.dropboxusercontent.com/s/ay2rewk4bo0c3u7/6EBAFE26-B5E9-456F-8EB9-B86EB574CB7D-40520-000215706B37064A.gif?dl=0)

More specifically, your `Calculator` component also needs to:

* Respond to changes in the screen's value.
* Respond to Enter key presses by evaluating the screen's math expression.
* Respond to Escape key presses by clearing the screen.

## References

* [React docs - Event System](https://facebook.github.io/react/docs/events.html)
* [React docs - Forms](https://facebook.github.io/react/docs/forms.html)
* [React docs - Interactivity and Dynamic UIs](https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html)
* [QuirksMode - Event ordering](http://www.quirksmode.org/js/events_order.html)
* [QuirksMode - keydown, keypress, keyup](http://www.quirksmode.org/dom/events/keys.html)
* [QuirksMode - Mouse Event](http://www.quirksmode.org/js/events_mouse.html)

#### [⇐ Previous](03-react-developer-tools.md) | [Table of Contents](README.md#table-of-contents) | [Next ⇒](05-props-and-state.md)
