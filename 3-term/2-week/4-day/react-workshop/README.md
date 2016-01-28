# Intro to React

## Get up and running

To see this in action, you need to have an HTTP server running locally (for AJAX to work).

The best way is to get Node.js, then run:

```
npm install -g http-server
http-server
```

If you can't get node installed, and you have Python, try:

```
python -m SimpleHTTPServer 8000
```

NOTE: the SimpleHTTPServer can be unreliable.  Your mileage may vary.

If you can't get either of those to work, see a facilitator.

## Challenge #1

Right now the message count displays "1 unread messages" when there's only one message.

Create a component named `UnreadMessages` and create logic such that if there's only 1 unread message it reads "1 unread message", but if there are 0 or many unread messages, it reads "3 unread messages".

Instead of having the markup inline in the `Toolbar` component, use your new `UnreadMessages` component instead.

## Challenge #2

Right now labels in the toolbar are hard-coded.  The `api/inbox.json` file sends down an array of labels.  Your challenge is to make the toolbar label dropdowns get their data from the labels in the `inbox.json` file.

HINT: start at `Inbox#componentDidMount` (that is, go to the `Inbox` component in `js/app.js`) and find the `componentDidMount` function.

## Challenge #3

Allow users to enter their own labels.

Add an item to the label dropdowns named "Enter a new label".

When a user clicks on that item, use a JavaScript `prompt` to ask the user to enter a new label.

When the user clicks "OK" on the prompt, add that label to both dropdowns as well as all selected messages.
