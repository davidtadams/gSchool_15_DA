# jQuery Playground

A grid of colorful boxes that can be used as a jQuery playground for learning selectors, events, etc.

Fork, Clone, and Pull Request for your submission.

### Exercise 1 - DOM Ready

Reference [this page](https://learn.jquery.com/using-jquery-core/document-ready/). Add a callback function to ready that alerts a message saying, ready for DOM manipulation.  Try using both styles of callbacks. 

### Exercise 2 - Selectors, CSS, Attributes

Go to the [MDN docs for selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors).  Read through the docs to get an idea of how selectors work.  Next, look at the [jQuery page on selectors](https://learn.jquery.com/using-jquery-core/selecting-elements/).

1. Find the secretBox on the page. Set the background color to white.  Add an h1 tag that says, "secret box!"
2. Find all child divs of the first row.  Set the class for each div to boxType3.
3. Make the last box in the last row disappear. (Hint, look into the dispaly style.  Also, you should only get back one element from your selector.).
4. Change all red boxes to white.
5. Get the first two divs in the second row.  Take away all styling from the divs.
6. Get all divs inside the container that are not row divs and are not the secret box div.  Set the width of the divs to 2 pixels.

### Exercise 3 - Events

1. Add an on click handler to the container div.  Console log the x and y position of the click.
2. Add links inside all red box divs that take the user to galvanize.  Then add an on click handler that alerts the user that you can never leave the page.  Make sure the user won't leave the page after the alert!
3. For all box divs, add a click handler that adds an image of a cute puppy to the box.  If the image is clicked again, remove the cute puppy.
4. Write a click handler __on the conatainer div__.  The click handler should turn the container background to black and the background of the original div that was clicked to white.  If the user original div that was clicked happened to be the container div, change the background of the container div to lime green.  You __should not__ use any selectors for this exercise.  You can do it completely with what is given to you in the event callback.
