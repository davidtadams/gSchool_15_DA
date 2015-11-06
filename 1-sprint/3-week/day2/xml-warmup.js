//Warmup exercise for week 3 day 2

var printData = function(url) {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
    else if (this.status == 400) {
      console.log("Bad request try again.");
    }
    else if (this.status == 404) {
      console.log("Requested resource could not be found.");
    }
  };

  request.open('GET', url);
  request.send();
};

// doing the above with a callback function
var printData2 = function(url, funct) {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      funct(this.responseText);
    }
    else if (this.status == 400) {
      console.log("Bad request try again.");
    }
    else if (this.status == 404) {
      console.log("Requested resource could not be found.");
    }
  };

  request.open('GET', url);
  request.send();
};

// testing function
printData('https://www.reddit.com/r/aww.json');
printData('/hello');

printData2('https://www.reddit.com/r/aww.json', function(n){
  console.log(JSON.parse(n));
});

// Test url
//  https://www.reddit.com/r/aww.json

/* Good sources:
http://stackoverflow.com/questions/5485495/how-can-i-take-advantage-of-callback-functions-for-asynchronous-xmlhttprequest
http://www.w3schools.com/ajax/ajax_xmlhttprequest_onreadystatechange.asp
*/
