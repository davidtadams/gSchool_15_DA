'use strict';

// TODO:
// Step One: convert the functions within this module to ES6
// Step Two: remove the variable `self` and use `this` instead
function MyConstructor(){


  var self = this;

  self.total = 0;

  setInterval(function(){
    self.total += 1;
    console.log(self.total);
  }, 1000);


  self.add = function(x, y){
    return x + y;
  };

}

var myObject = new MyConstructor();
console.log('add: ', myObject.add(1, 2));
