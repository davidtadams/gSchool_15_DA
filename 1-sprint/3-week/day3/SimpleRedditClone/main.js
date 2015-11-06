//Add your code here
var getData = function(url, funct) {
  var req = new XMLHttpRequest();

  req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      funct(this.responseText);
    }
    else if (this.status == 400) {
      console.log("Bad request.");
    }
  }

  req.open('GET', url);
  req.send();
}

//function to take reddit data and put it on the page
var renderData = function(response) {
  data = JSON.parse(response).data.children;
  section = document.getElementById('posts');

  for (var art in data) {
    var score = data[art].data.score;
    var thumbnail = data[art].data.thumbnail;
    var title = data[art].data.title;
    var url = data[art].data.url;

    var newDiv = document.createElement('div');
    // newDiv.innerHTML = '<p>' + score + '</p>';
    newDiv.innerHTML = ' ' + score + ' ';
    if (thumbnail) {
      newDiv.innerHTML += ' <img src="' + thumbnail + '" alt="image"> ';
    }
    newDiv.innerHTML += ' <a href="' + url + '">' + title + '</a> ';
    section.appendChild(newDiv);
  }
}

//get data from reddit
getData('https://www.reddit.com/r/aww.json', renderData);
