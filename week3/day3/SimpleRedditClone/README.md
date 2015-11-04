# Simple Reddit Clone

Use only vanilla JavaScript (no libraries) for this exercise.

1. Pick a subreddit and append .json to the URL. Some subreddits to choose from:
  - [redditlist.com](http://redditlist.com/)

2. Using XMLHttpRequest, update main.js to make an AJAX request to retrieve the JSON data.

3. Update main.js to loop through the returned JSON data.children and for each post:
  - Create and append a new element to the section tag
  - The new element should contain the score, thumbnail (if there is one) and the title.
  - The title should be a link that opens in a new tab/window (target='_blank').

4. Each new element should look similar to this:
![sample](https://i.imgur.com/mfoeR1P.png)


# Bonus

Style the page to look more like reddit. (You can use a CSS stylesheet.)
