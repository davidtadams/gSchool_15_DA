module.exports = {
  sameLength: function(string1, string2) {
    return string1.length === string2.length;
  },

  firstGreater: function(arg1, arg2){
    return arg1 > arg2;
  },

  firstGreaterOrEqualTo: function(arg1, arg2){
    return arg1 >= arg2;
  },

  firstLengthGreater: function(arg1, arg2){
    return arg1.length > arg2.length;
  },

  secondGreater: function(arg1, arg2) {
    return arg2 > arg1;
  }
}
