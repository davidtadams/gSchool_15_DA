// Create a new XMLHttpRequest object to start
var awwRequest = new XMLHttpRequest();

// Create a function that is called when the request status has changed
awwRequest.onreadystatechange = function () {
  // When the readyState is 4 that means the request has completed
  if (this.readyState == 4 && this.status == 200) {
    // We know the data is JSON, so let's parse it to JS
    var awwListings = JSON.parse(this.responseText);
    // And now we can consume the data from Reddit. :)
    console.log(awwListings);
    for (var i=0; i<awwListings.data.children.length; i+=1) {
      var awwListing = awwListings.data.children[i];
      console.log(awwListing.data.title, awwListing.data.thumbnail)
    }
  }
}

// Tell the XMLHttpRequest where you want it to go and how
awwRequest.open('GET', 'https://www.reddit.com/r/aww.json');

// Send it off! Good luck little XMLHttpRequest! :D
awwRequest.send();
