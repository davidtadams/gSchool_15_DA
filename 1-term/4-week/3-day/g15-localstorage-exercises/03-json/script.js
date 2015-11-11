var data = {
  title: "My favorite data",
  submittedBy: "Fred",
  points: 1337
};

// Your code here
localStorage.setItem('data', JSON.stringify(data));
var getData = JSON.parse(localStorage.getItem('data'));
getData.title = "My NEW favorite title!";
localStorage.setItem('data', JSON.stringify(getData));
