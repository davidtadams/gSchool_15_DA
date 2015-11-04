# Event Exercise 03

Every time an event callback method is called, an [Event object](https://developer.mozilla.org/en-US/docs/Web/API/Event) is passed into the callback.

Some of the event types are specialized:
* [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
* [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
* [etc...](https://developer.mozilla.org/en-US/docs/Web/API/Event)

## Instructions

### Part 1

For your event callback function, use this function signature:
```js
function eventHandler(event) {

}
```

Tell your handler function to listen for 'click' and 'keydown' events on window.

### Part 2

Use the `event` object to `console.log` what type of event happened.

Examples of events:
  * 'click'
  * 'keydown'

### Part 3

Use the `event` object to `console.log` what type of element was clicked.

Examples of element `tagName`:
  * BODY
  * TD
  * DIV
  * BUTTON
