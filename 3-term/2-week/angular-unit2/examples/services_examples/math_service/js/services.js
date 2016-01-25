angular.module("mathApp").service("mathService", function(){
  return {
    add: function(a,b){
      return a + b;
    },
    subtract: function(a,b){
      return a - b;
    },
    multiply: function(a,b){
      return a * b;
    },
    divide: function(a,b){
      return a / b
    },
    power: function(base,exp){
      return Math.pow(base,exp)
    }
  }
})