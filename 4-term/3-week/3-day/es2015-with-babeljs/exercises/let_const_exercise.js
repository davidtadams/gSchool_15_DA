'use strict';

//TODO conver the following to use let and const
var directions = ['north','west','south','east'];

function getRandDir(){
  var index =  Math.floor(Math.random() * directions.length);
  return directions[index];
}

var user = {
  direction: getRandDir(),
  speed: 10
};

var speed = 0;
if(user.direction === directions[0]){
  speed = user.speed += 10;
}else{
  speed = user.speed -= 10;
}

console.log(speed);
