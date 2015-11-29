/*
  Do not use standard libraries (like Math) to complete this warm-up.
*/

module.exports = {
  maximum: function(array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
        arrIndex = i;
      }
    }
    return max;
  },

  minimum: function(array) {
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  },

  average: function(arrayOfNumbers) {
    var sum = 0;
    for (var i = 0; i < arrayOfNumbers.length; i++) {
      sum += arrayOfNumbers[i];
    }
    return sum / arrayOfNumbers.length;
  },

  matrixRowMaximum: function(arrayOfArrays) {
    var retArr = [];
    var max = 0;
    for (var i = 0; i < arrayOfArrays.length; i++) {
      max = arrayOfArrays[i][0];
      for (var j = 0; j < arrayOfArrays[i].length; j++) {
        if (arrayOfArrays[i][j] > max) {
          max = arrayOfArrays[i][j];
        }
      }
      retArr.push(max);
    }
    return retArr;
  },

  matrixRowMinimum: function(arrayOfArrays) {
    var retArr = [];
    var min = 0;
    for (var i = 0; i < arrayOfArrays.length; i++) {
      min = arrayOfArrays[i][0];
      for (var j = 0; j < arrayOfArrays[i].length; j++) {
        if (arrayOfArrays[i][j] < min) {
          min = arrayOfArrays[i][j];
        }
      }
      retArr.push(min);
    }
    return retArr;
  },

  matrixRowAverage: function(arrayOfArrays) {
    var retArr = [];
    var sum;
    for (var i = 0; i < arrayOfArrays.length; i++) {
      sum = 0;
      for (var j = 0; j < arrayOfArrays[i].length; j++) {
        sum += arrayOfArrays[i][j];
      }
      retArr.push(sum / arrayOfArrays[i].length);
    }
    return retArr;
  },

  sortedRowMatrix: function(arrayOfArrays) {
    var retArr = [];
    for (var i = 0; i < arrayOfArrays.length; i++) {
      retArr.push(arrayOfArrays[i].sort());
    }
    return retArr;
  },

  lengthOfWords: function(sentence) {
    var retArr = [];
    var splitSentence = sentence.split(" ");
    for (var i = 0; i < splitSentence.length; i++) {
      retArr.push(splitSentence[i].length);
    }
    return retArr;
  }
}
