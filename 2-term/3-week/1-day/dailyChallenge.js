function matrixSize(matrix) {
  return matrix.length + 'x' + matrix[0].length;
}

function matrixRotate(matrix) {
  var retMatrix = [];
  var counter;
  for (var i = 0; i < matrix[0].length; i++) {
    retMatrix.push([]);
    counter = 0;
    for (var j = matrix.length - 1; j >= 0; j--) {
      retMatrix[i][counter] = matrix[j][i];
      counter += 1;
    }
  }
  return retMatrix;
}

console.log('Matrix Size:');
console.log([[1,64,23],[22,50,2]]);
console.log(matrixSize([[1,64,23],[22,50,2]]));

console.log('\nMatrix Rotate:');
console.log(matrixRotate([[1,64,23],[22,50,2]]));

var matrix1 = [[44, 23],
               [21, 10],
               [9, 28],
               [85, 16],
               [33, 18]];
console.log('\nTesting Matrix 1');
console.log('Matrix 1:', matrix1);
console.log('Matrix 1 Size: ', matrixSize(matrix1));
console.log('Matrix 1 Rotated: ', matrixRotate(matrix1));
console.log('Matrix 1 Rotated Size: ', matrixSize(matrixRotate(matrix1)));

var matrix2 = [[29,62,8], [12,60, 31], [99,79,12]];
console.log('\nTesting Matrix 2');
console.log('Matrix 2:', matrix2);
console.log('Matrix 2 Size: ', matrixSize(matrix2));
console.log('Matrix 2 Rotated: ', matrixRotate(matrix2));
console.log('Matrix 2 Rotated Size: ', matrixSize(matrixRotate(matrix2)));
