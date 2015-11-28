/*
  Use a for loop, NOT forEach to complete each warm-up.
*/

module.exports = {

  joinWithFor: function(list) {
    // your code here
    var retStr = "";
    for (var i = 0; i < list.length; i++) {
      retStr += list[i];
    }
    return retStr;
  },

  joinWithForAndIndex: function(list) {
    var retStr = "";
    for (var i = 0; i < list.length; i++) {
      retStr += list[i] + i;
    }
    return retStr;
  },

  joinWithoutOddCharacters: function(list) {
    var retStr = "";
    for (var i = 0; i < list.length; i++) {
      if (i % 2 === 0) {
        retStr += list[i];
      }
    }
    return retStr;
  },

  joinWithForAndToken: function(list) {
    var retStr = "";
    for (var i = 0; i < list.length; i++) {
      if (i === list.length - 1) {
        retStr += list[i];
      }
      else {
        retStr += list[i] + '*';
      }
    }
    return retStr;
  },

  joinWithForAndAlternatingTokens: function(list) {
    var retStr = "";
    for (var i = 0; i < list.length; i++) {
      if (i === list.length - 1) {
        retStr += list[i];
      }
      else {
        if (i % 2 === 0) {
          retStr += list[i] + '*';
        }
        else {
          retStr += list[i] + '+';
        }
      }
    }
    return retStr;
  }
}
