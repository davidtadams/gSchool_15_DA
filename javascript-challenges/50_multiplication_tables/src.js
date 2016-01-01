/*
  Return the multiplication tables as a string.
  The top-left starts at 0, then the numbers go up across the top and down.

        1  2  3  4
     1  1  2  3  4
     2  2  4  6  8
     3  3  6  9 12
     4  4  8 12 16

  The result should be a single string, with newlines separating the rows.
*/

module.exports = {
  twoTimesTable: function() {
    return '   1 2\n 1 1 2\n 2 2 4';
  },

  timesTable: function(number) {
    var multTable = '   ';

    for (var x = 1; x <= number; x++) {
      multTable += '  ' + x;
    }
    multTable += '\n';

    for (var i = 1; i <= number; i++) {
      multTable += '  ' + i;
      for (var j = 1; j <= number; j++) {
        if ((i * j) >= 10) {
          multTable += ' ' + (i * j);
        } else {
          multTable += '  ' + (i * j);
        }
      }
      if (i != number) {
        multTable += '\n';
      }
    }

    return multTable;
  }
}
