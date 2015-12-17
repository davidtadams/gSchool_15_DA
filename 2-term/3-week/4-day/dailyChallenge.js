function table (string) {
  var array = string.split('\n');
  var i, j, z;

  for(i = 0; i < array.length; i++) {
    array[i] = array[i].split(',');
  }

  var max1 = 0;
  var max2 = 0;
  var max3 = 0;

  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array[i].length; j++) {
      if (j === 0) {
        //column 1
        if (array[i][j].length > max1) {
          max1 = array[i][j].length;
        }
      } else if (j === 1) {
        //column 2
        if (array[i][j].length > max2) {
          max2 = array[i][j].length;
        }
      } else {
        //column 3
        if (array[i][j].length > max3) {
          max3 = array[i][j].length;
        }
      }
    }
  }

  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array[i].length; j++) {
      if (j === 0) {
        //column 1
        if (array[i][j].length < max1) {
          console.log(max1 - array[i][j].length);
          // for (z = 0; z < max1 - array[i][j].length - 1; z++) {
          //   array[i][j] += ' ';
          // }
        }
      } else if (j === 1) {
        //column 2

      } else {
        //column 3

      }
    }
  }


  console.log(array);
  array = array.join('\n');
  console.log(array);

  // console.log(string.replace(/,/g, ' | '));
  // return true;
}

var csv = "First,Last,Address\nAnnamarie,Romaguera,9446 Schroeder Squares\nSebastian,Hessel,114 Frederic Centers\nMarlon,Hahn,307 Bradtke Grove\nDuane,Schowalter,10771 Keaton Knoll\nLaurence,Schuster,610 Odell Point"
console.log(table(csv));
