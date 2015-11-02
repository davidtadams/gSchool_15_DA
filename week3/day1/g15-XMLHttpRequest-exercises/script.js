/* First request to request index.html */
var request1 = new XMLHttpRequest();

request1.onreadystatechange = function () {
  if (this.readyState === 4 && this.status == 200) {
    console.log(this.responseText);
  }
}

request1.open('GET', './index.html');
request1.send();

/* Second request to request json data */
var request2 = new XMLHttpRequest();

request2.onreadystatechange = function () {
  if (this.readyState === 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    console.log(JSON.stringify(data));
  }
}

request2.open('GET', './data.json');
request2.send();

/* Third request to Reddit JSON API */
var request3 = new XMLHttpRequest();

request3.onreadystatechange = function () {
  if (this.readyState === 4 && this.status == 200) {
    listings = JSON.parse(this.responseText);
    for (var i = 0; i < listings.data.children.length; i++) {
      var listing = listings.data.children[i];
      console.log(listing.data.title, listing.data.url, listing.data.author);
    }
  }
}

request3.open('GET', 'http://www.reddit.com/r/GetMotivated.json');
request3.send();
