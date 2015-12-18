function csvToMd(string) {
  var stringArray = splitStringToArray(string);
  var maxArray = getMaxColumnLength(stringArray);
  stringArray = padColumns(stringArray, maxArray);
  return joinArrayToString(stringArray);
}

function splitStringToArray(string) {
  var stringArray = [];
  string = string.split('\n');
  for (var i = 0; i < string.length; i++) {
    if (i === 1) {
      stringArray.push([]);
    }
    stringArray.push(string[i].split(','));
  }
  return stringArray;
}

function getMaxColumnLength(stringArray) {
  var maxArray = [];

  for (var a = 0; a < stringArray[0].length; a++) {
    maxArray.push(0);
  }

  for (var i = 0; i < stringArray.length; i++) {
    for (var j = 0; j < stringArray[0].length; j++) {
      if (i != 1) {
        if (maxArray[j] < stringArray[i][j].length) {
          maxArray[j] = stringArray[i][j].length;
        }
      }
    }
  }

  return maxArray;
}

function padColumns(stringArray, maxArray) {
  for (var i = 0; i < stringArray.length; i++) {
    for (var j = 0; j < stringArray[0].length; j++) {
      if (i === 1) {
        stringArray[i][j] = '-'.repeat(maxArray[j]);
      }
      stringArray[i][j] += ' '.repeat(maxArray[j] - stringArray[i][j].length);
    }
  }
  return stringArray;
}

function joinArrayToString(stringArray) {
  for (var i = 0; i < stringArray.length; i++) {
    stringArray[i] = stringArray[i].join(' | ');
  }

  return stringArray.join('\n');
}

var csv1 = "First,Last,Address\nAnnamarie,Romaguera,9446 Schroeder Squares\nSebastian,Hessel,114 Frederic Centers\nMarlon,Hahn,307 Bradtke Grove\nDuane,Schowalter,10771 Keaton Knoll\nLaurence,Schuster,610 Odell Point";
console.log(csvToMd(csv1), '\n');
var csv2 = "First,Last,Address,State\nAnnamarie,Romaguera,9446 Schroeder Squares,Colorado\nSebastian,Hessel,114 Frederic Centers,Oklahoma\nMarlon,Hahn,307 Bradtke Grove,New York\nDuane,Schowalter,10771 Keaton Knoll,Tennessee\nLaurence,Schuster,610 Odell Point,Texas";
console.log(csvToMd(csv2));
