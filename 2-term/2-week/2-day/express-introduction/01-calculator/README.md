# Express Calculator

Create a simple calculator app using Express.  To start, create a new directory and build an app from scratch.  Refer to the instructions from the Express intro when you forget things.

### Basics

Using `res.send`, make the following work:

* When a user visits `/add/9/3`, it should display 12
* When a user visits `/sub/9/3`, it should display 6
* When a user visits `/mult/9/3`, it should display 27
* When a user visits `/div/9/3`, it should display 3

### Debug

As you build your Express apps, you will come across times when you need to inspect your code with `console.log`.

Take a minute to go to your routes, and put a `console.log(req.params)`.  Where does it come out?

If you can't find your output, go back to your Terminal tab where you ran `nodemon` - your output will appear there.

### Add some logic

Using dynamic route segments (path parameters), refactor your code to use only one route rather than 4 separate routes.

### Handle Decimals

Make your app correctly calculate `/add/1.2/1.2` to `2.4`.
