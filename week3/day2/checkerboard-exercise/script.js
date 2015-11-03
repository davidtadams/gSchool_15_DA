// Your JS goes here
var body = document.getElementsByTagName('body')[0];

//function to render a normal checkerboard
var renderBoxPlain = function(body) {
  var createBoxPlain = function(i) {
    var box = document.createElement('div');
    box.style.float = "left";
    box.style.width = "11.1%";
    box.style.paddingBottom = "11.1%";

    if (i % 2 == 0) {
      box.style.backgroundColor = "black";
    }
    else {
      box.style.backgroundColor = "red";
    }

    return box;
  }

  for (var i = 0; i < 63; i++) {
    body.appendChild(createBoxPlain(i));
  }
}

//function to render a checkerboard with random colored squares
var renderBoxRandom = function(body) {
  var createBoxRandom = function() {
    var box = document.createElement('div');
    box.style.float = "left";
    box.style.width = "11.1%";
    box.style.paddingBottom = "11.1%";
    
    box.style.backgroundColor = "red";

    return box;
  }

  for (var i = 0; i < 63; i++) {
    body.appendChild(createBoxRandom());
  }
}

renderBoxPlain(body);
renderBoxRandom(body);
