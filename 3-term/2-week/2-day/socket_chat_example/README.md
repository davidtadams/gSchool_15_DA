## Sample real-time application: a chat room

Let's use `socket.io` to build a simple chat room. We'll roughly follow the outline for the [tutorial](http://socket.io/get-started/chat/) in the socket.io docs, but we'll do things a bit differently since y'all are so awesome at Node. To get started, create a directory for your project (maybe `chat-example`), cd into it, and start a new node project. For now, you'll only need to install three node modules: `express`, `ejs`, and `socket.io`.

Once you're set up, require `express` in your `app.js` in the usual way. In order to set up `socket.io`, you'll need a couple of new lines in your code:

```js
var express = require('express');
var app = express();
var server = require('http').Server(app); 
var io = require('socket.io')(server); 

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index');
});

server.listen(3000, function(){
  console.log('listening on localhost:3000');
});
```

## Step 1: Front-end setup

To start building our chat room, let's create an input field for our users to type into, as well as a submit button:

`index.ejs`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Socket.IO chat</title>
  <link rel="stylesheet" href="/stylesheets/app.css">
</head>
<body>
  <ul id="messages"></ul>
  <form action="">
    <input id="m" autocomplete="off" /><button>Send</button>
  </form>
</body>
</html>
```

Notice that we've linked to a stylesheet, so that we can make our app not look terrible. Here's some simple styling to get you started:

```css
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font: 13px Helvetica, Arial; }
form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
#messages { list-style-type: none; margin: 0; padding: 0; }
#messages li { padding: 5px 10px; }
#messages li:nth-child(odd) { background: #eee; }
```

## Step 2: Integrate socket.io on the back-end and front-end

To make use of `io` in our `app.js`, we'll use the `on` method to listen for connections to our server: 

```js
io.on('connection', function(socket){
  console.log("someone entered the chat room!");
});
```

This should work the first time you go to localhost:3000, but not on subsequent attempts. To log to the console whenever you visit the chat room, you need to add some client-side javascript as well. Let's append a few script tags to our `body`:

```html
<script src="https://cdn.socket.io/socket.io-1.2.0.js"></script>
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="/javascripts/chat.js"></script>
```

Inside of our `chat.js` file, let's initialize socket.io on the client side:

`chat.js`

```js
$(function() {
  var socket = io();
});
```

(We'll need jQuery in the next step.)

With this client-side javascript in place, you should see your message getting logged to the console every time you visit `localhost:3000`!

## Step 3: Sending messages to the server

Right now our chat app is pretty lame. Let's use jQuery and socket.io to spice things up. Try to do the following without looking at the socket.io tutorial:

In your `chat.js`:

1. Use jQuery to add a listener for form submissions.
2. In the callback to your listener, prevent the default submit action; then,
3. Use the `socket.emit` method to send the message the user typed to the server. `socket.emit` takes two arguments: the first is just the name you want to give to the event you're passing (let's call it `'chat message'`), while the second is the actual data you want to pass (how can you get the user's message using jQuery?).
4. After `emitting`, clear the input field. Our chat app would be pretty clunky if users had to delete their old messages before they could type in new ones.

To be sure that your messages are being sent correctly, in your `app.js`:

1. replace your `console.log` inside of your `io.on` callback with a listener for messages from the client. In this case, you should use `socket.on`, which takes two arguments: the first is the name of the event it should listen for (i.e. `'chat message'`), while the second is a callback. Have your callback log the received message to the console.

## Step 4: Sending messages _from_ the server

Here's where the real-time magic kicks in. Let's make it so that when our server receives a message, it turns around and shows that message to everyone who's in the chat room. To do this...

In your `app.js`:

1. Instead of using a `console.log` in your `socket.on` callback, use `io.emit` to emit the message. Once again, this method takes two arguments: the first is the name of the event, the second is the data you want to emit.

In our `chat.js`

1. Just like in your server-side code, you have access to a `socket.on` method on the client side. In this case, when the socket sees a `'chat message'` event, it should append an `li` to the page's `ul` with the message contents.

## Step 5: Bonuses!!

See if you can:

- alert the chat room when someone enters or leaves
- let users input their names
- alert everyone when a user is typing
- show who is in the chatroom
- add giphy integration
- add direct messaging
- Anything else you can think of!
