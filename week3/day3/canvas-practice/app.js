/* Tutorial for canvas
http://billmill.org/static/canvastutorial/ball.html
*/

// really good canvas library http://phaser.io/

// var ctx = document.querySelector('canvas').getContext("2d");

//draw a circle
// ctx.beginPath();
// ctx.arc(75, 75, 10, 0, Math.PI*2, true);
// ctx.closePath();
// ctx.fill();

//draw a rectangle
// ctx.beginPath();
// ctx.rect(200, 200, 50, 50);
// ctx.closePath();
// ctx.fill();

var canvas = document.querySelector('canvas').getContext("2d");

function Square(x,y,size,color) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.color = color;
}

Square.prototype.draw = function() {
  canvas.fillStyle = this.color;
  canvas.beginPath();
  canvas.fillRect(this.x, this.y, this.size, this.size);
}

Square.prototype.moveRight = function() {
  this.x = this.x + 10;
}

Square.prototype.remove = function () {
  var tempColor = this.color;
  this.color = "white";
  this.draw();
  this.color = tempColor;
}

var square = new Square(0, 0, 50, "orange");
var c = document.querySelector('canvas');
var button = document.querySelector('button');
var squares = [];

c.addEventListener('click', function(event) {
  var x = event.offsetX;
  var y = event.offsetY;
  square.x = x;
  square.y = y;
  squares.push(square);
  square.draw();
});

button.addEventListener('click', function() {
  square.remove();
  square.moveRight();
  square.draw();
});
