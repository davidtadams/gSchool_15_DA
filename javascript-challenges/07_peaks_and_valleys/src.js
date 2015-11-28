/*
  The primary goal of this warm-up is to work on refactoring
  out duplicated code. As you build the peaks and valleys
  methods, some duplication will arise. Get the tests passing
  first and then refactor to remove the duplication.

  Note: The peaks/valleys are fun to console.log out while
  writing these methods.
*/

module.exports = {
  peak: function() {
    // your code here
    return '/\\';
  },

  valley: function() {
    return '___';
  },

  peaks: function(num) {
    var retStr = "";
    for (var i = 0; i < num; i++) {
      retStr += this.peak();
    }
    return retStr;
  },

  valleys: function(num) {
    var retStr = "";
    for (var i = 0; i < num; i++) {
      retStr += this.valley();
    }
    return retStr;
  },

  peaksAndValleys: function(peaks, valleys) {
    var retStr = "";
    for (var i = 0; i < peaks; i++) {
      retStr += this.peak();
    }
    for (var i = 0; i < valleys; i++) {
      retStr += this.valley();
    }
    return retStr;
  }

}
