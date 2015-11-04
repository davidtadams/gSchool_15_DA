/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
var stopLight = document.getElementById('stopLight');
var slowLight = document.getElementById('slowLight');
var goLight = document.getElementById('goLight');
var stop = document.getElementById('stopButton');
var slow = document.getElementById('slowButton');
var go = document.getElementById('goButton');

stop.addEventListener('click', function() {
  if (stopLight.style.backgroundColor != "red") {
    stopLight.style.backgroundColor = "red";
  }
  else {
    stopLight.style.backgroundColor = "black";
  }
});

slow.addEventListener('click', function() {
  if (slowLight.style.backgroundColor != "orange") {
    slowLight.style.backgroundColor = "orange";
  }
  else {
    slowLight.style.backgroundColor = "black";
  }
});

go.addEventListener('click', function() {
  if (goLight.style.backgroundColor != "green") {
    goLight.style.backgroundColor = "green";
  }
  else {
    goLight.style.backgroundColor = "black";
  }
});
