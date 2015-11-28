module.exports = {

  simpleCall: function(callback){
    // your code here
    return callback();
  },

  each: function(list, callback) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i]);
    }
  },

  map: function(list, callback) {
    var retArr = [];
    for (var i = 0; i < list.length; i++) {
      retArr.push(callback(list[i]));
    }
    return retArr;
  },

  reduce: function(list, start, callback) {
    var sum = start;
    for (var i = 0; i < list.length; i++) {
      sum = callback(sum, list[i])
    }
    return sum;
  },

  find: function(list, callback) {
    for (var i = 0; i < list.length; i++) {
      if (callback(list[i])) {
        return list[i];
      }
    }
  },

  any: function(list, callback) {
    for (var i = 0; i < list.length; i++) {
      if (callback(list[i])) {
        return true;
      }
    }
    return false;
  },

  all: function(list, callback) {
    for (var i = 0; i < list.length; i++) {
      if (!callback(list[i])) {
        return false;
      }
    }
    return true;
  }
}
