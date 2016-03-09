'use strict';
//TODO
//Step One: convert the following code from prototypical to a class based hierarchy.

function User(type, credits) {

  this.type = type || 'user';
  this.credits = credits || 100;

}

User.prototype.purchaseItem = function(item){
  if(this.credits > 0){
    this.credits -= item.cost;
  }
  return item;
};

User.prototype.getType = function(){
  return this.type;
};

User.prototype.setType = function(type){
  this.type = type;
};


function Admin(){
  User.call(this, 'admin', -1);
}
Admin.prototype = Object.create(User.prototype);

Admin.prototype.purchaseItem = function(item){
  return item;
};

var item = {
  name: 'hat',
  cost: 100
};

var you = new User();
console.log('you type: ', you.getType());
console.log('you purchase: ', you.purchaseItem(item));

var me = new Admin();
console.log('me type: ', me.getType());
console.log('me purchase: ', me.purchaseItem(item));
