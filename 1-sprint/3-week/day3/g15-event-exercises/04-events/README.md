# Event Exercise 04

We have a collection of `<button>` elements in `index.html` that we want to attach event listeners to. Should we query for each one and individually use `addEventListener()`? As you probably guessed, the answer is no. We are going to use a feature of DOM Events called [event bubbling](http://javascript.info/tutorial/bubbling-and-capturing).

Event bubbling is when you click on a `<button>` element, the `'click'` event is fired on the `<button>`. It then goes to the parent element of `<button>` and fires the `'click'` handler on the parent. Then it goes to the parent's parent. And so on until `document`.

This allows us to add a single event handler to a parent of a collection of elements that need to handle events similarly.

## Instructions

### Part 1

Attach a click handler to `<div id="buttonGroup">`. Notice that when you click on each `<button>` the event still fires.

### Part 2

Use the `event` object and notice the `event.target` property is the `<button>` you clicked on. `console.log` the text of the button you clicked. Make sure you only have one handler function and are using `addEventListener` only once!
