module.exports = {

  helloWorld: function(){
    return "Hello World";
  },

  hello: function(string){
    return "Hello " + string;
  },

  shout: function(string){
    return "Hello " + string.toUpperCase();
  },

  whisper: function(string){
    return "Hello " + string.toLowerCase();
  },

  separate: function(string){
    var retArr = [];
    for (var i = 0; i < string.length; i++) {
      retArr.push(string[i]);
    }
    return retArr;
  },

  reverseJoin: function(string){
    var retStr = '';
    for (var i = string.length - 1; i >= 0; i--){
      if (i === string.length - 1) {
        retStr += string[i];
      }
      else {
        retStr = retStr + ',' + string[i];
      }
    }
    return retStr;
  },

  reverseJoinCompact: function(string){
    var retStr = '';
    for (var i = string.length - 1; i >= 0; i--){
      retStr += string[i];
    }
    return retStr;
  },

  backwardsDay: function(string){
    return "Hello " + this.reverseJoinCompact(string);
  }

}
