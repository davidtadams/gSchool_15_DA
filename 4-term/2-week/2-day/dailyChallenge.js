// var diagonalsSum = require('../DTA')
var assert = require('assert')
var test2x2 = [
  [1, 2],
  [3, 4]
]
var test3x3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
var test5x5 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 0],
  [0, 9, 8, 7, 6],
  [5, 4, 3, 2, 1],
  [1, 2, 3, 4, 5]
]
describe('Diagonal Array Sum for a Matrix', function() {
  it('should return 0 for empty matrix', function() {
    assert.equal(0, diagonalsSum([]))
  })
  it('should return 2 for test 1x1 matrix', function() {
    assert.equal(2, diagonalsSum([1]))
  })
  it('should return 10 for test 2x2 matrix', function() {
    assert.equal(10, diagonalsSum(test2x2))
  })
  it('should return 30 for test 3x3 matrix', function() {
    assert.equal(30, diagonalsSum(test3x3))
  })
  it('should return 46 for test 5x5 matrix', function() {
    assert.equal(50, diagonalsSum(test5x5))
  })
})

/* Created by David Adams March 1 2016 */
function diagonalsSum(matrix) {
  if (matrix.length < 2) {
    if (matrix.length === 1) {
      return matrix[0] * 2
    }
    return 0
  }
  var innerDiagonal = 0
  var outerDiagonal = matrix[0].length - 1
  var matrixSum = 0
  for (var i = 0; i < matrix.length; i++) {
    matrixSum += matrix[i][innerDiagonal] + matrix[i][outerDiagonal]
    innerDiagonal++
    outerDiagonal--
  }
  return matrixSum
}
