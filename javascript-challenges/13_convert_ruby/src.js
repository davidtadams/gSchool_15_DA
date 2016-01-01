/*
  In each of these examples some Ruby code is provided inline. Your job is to translate
  the Ruby code into JavaScript. Individual line comments (//) indicate where code should
  be placed.
*/

module.exports = {
  /*
    def return_array
      [1,2,3,4]
    end
  */

  returnArray: function() {
    // your code here
    return [1,2,3,4];
  },

  /*
    def divide(numerator, denominator)
      numerator / denominator
    end
  */

  // your code here for divide
  divide: function(numerator, denominator) {
    return numerator / denominator;
  },

  /*
    def add(a,b)
      a + b
    end
  */

  // your code here for add
  add: function(a,b) {
    return a + b;
  },

  /*
    def power(base, exponent)
      base ** exponent
    end
  */

  // your code here for power
  power: function(a,b) {
    return Math.pow(a,b);
  },

  /*
    def concatenate(string_1, string_2)
      string_1 + string_2
    end
  */

  // your code here for concatenate
  concatenate: function(string1, string2) {
    return string1 + string2;
  },

  /*
    def sub(string, char, replacement)
      string.sub(char, replacement)
    end
  */

  // your code here for sub
  sub: function(str, char1, char2) {
    var index = str.indexOf(char1);
    var returnString = str.split("");
    returnString[index] = char2;
    return returnString.join("");
  }
}
