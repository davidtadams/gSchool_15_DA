/*
  A matrix is a rectangular array of numbers, symbols, or expressions,
  arranged in rows and columns (http://en.wikipedia.org/wiki/Matrix_%28mathematics%29),
  it should look like something we saw in the maths exercise.

  An example matrix looks like this:
    [ 1  2  3 ]
    [ 4  5  6 ]

  If a matrix contains m rows and n columns, it is said to be a m-by-n matrix.

  The identity matrix is a special matrix, it is square (e.g. same number of rows and
  columns), and contains the value `1` in every position where the row number is equal
  to the column number, and the value `0` everywhere else. A 3X3 identity matrix
  looks as follows:

    [ 1  0  0 ]
    [ 0  1  0 ]
    [ 0  0  1 ]

  For the purpose of computing, we can also think of a matrix as an array of arrays,
  where each element of the parent (top-level) array, is an array representing a
  row of the matrix. In code the 3X3 identity matrix would look as follows:

    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ]

  All of these warm-ups deal with matrices (plural of "matrix").
*/

module.exports = {
  twoByTwoIdentityMatrix: function() {
    return [[1,0],[0,1]];
  },

  identityMatrix: function(n) {
    var matrix = [];
    for (var i = 0; i < n; i++) {
      matrix.push([]);
      for (var j = 0; j < n; j++) {
        if (i === j) {
          matrix[i][j] = 1;
        } else {
          matrix[i][j] = 0;
        }
      }
    }
    return matrix;
  },

  matrixAddition: function(matrix1, matrix2) {
    if ((matrix1.length != matrix2.length) ||
        (matrix1[0].length != matrix2[0].length)) {
      return 'error';
    }

    var additionMatrix = [];

    for (var i = 0; i < matrix1.length; i++) {
      additionMatrix.push([]);
      for (var j = 0; j < matrix1.length; j++) {
        additionMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
      }
    }

    return additionMatrix;
  },

  matrixSubtraction: function(matrix1, matrix2) {
    if ((matrix1.length != matrix2.length) ||
        (matrix1[0].length != matrix2[0].length)) {
      return 'error';
    }

    var subtractionMatrix = [];

    for (var i = 0; i < matrix1.length; i++) {
      subtractionMatrix.push([]);
      for (var j = 0; j < matrix1.length; j++) {
        subtractionMatrix[i][j] = matrix1[i][j] - matrix2[i][j];
      }
    }

    return subtractionMatrix;
  },

  matrixConstantMultiplication: function(num, matrix) {
    return matrix.map(function(row) {
      return row.map(function(element) {
        return element * num;
      });
    });
  }
}
