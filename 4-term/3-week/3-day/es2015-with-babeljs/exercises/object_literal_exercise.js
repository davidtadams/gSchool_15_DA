'use strict';

//TODO
//StepOne: convert the following to use ES2015 Enhanced Object Literals
var user = {
  type: 'user',
  credits: 100,
  getType: function(){
    return this.type;
  },
  setType: function(type){
    this.type = type;
  },
  purchaseItem: function(item){
    if(this.credits > 0){
      this.credits -= item.cost;
    }
    return item;
  }
};


var item = {
  name: 'hat',
  cost: 100
};

console.log('user type: ', user.getType());
console.log('user purchase: ', user.purchaseItem(item));

//TODO
//StepTwo: add an additional property to this object with a dynamic name:
var admin = {
  [getPropertyName()]: 'someValue',
  [10 * 10]: 'anotherValue'
};
function getPropertyName(){
  return 'hello';
}

console.log('custom property: ', admin.hello);
console.log('custom property: ', admin[10*10]);
