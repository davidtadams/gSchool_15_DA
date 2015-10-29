var yourCode = require('../src');

describe('maximum', function() {
  it('returns the maximum value from the given array', function() {
    pending();
    expect(yourCode.maximum([34, 12, 45, 32, 100])).toEqual(100);
  });

  it('returns undefined for an empty array', function() {
    pending();
    expect(yourCode.maximum([])).toEqual(undefined);
  });
});

describe('minimum', function() {
  it('returns the minimum value from the given array', function() {
    pending();
    expect(yourCode.minimum([34, 12, 45, 32, 100])).toEqual(12);
  });

  it('returns undefined for an empty array', function() {
    pending();
    expect(yourCode.minimum([])).toEqual(undefined);
  });
});

describe('average', function() {
  it('returns the average of the numeric values in the given array', function() {
    pending();
    expect(yourCode.average([10, 20, 30])).toEqual(20);
  });

  it('returns NaN when the array is empty', function() {
    pending();
    expect(yourCode.average([])).toEqual(NaN);
  });
});

describe('matrixRowMaximum', function() {
  it('returns an Array containing an element representing the maximum of each row of the input', function() {
    pending();
    expect(yourCode.matrixRowMaximum([[1,2,3], [3,4,5]])).toEqual([3, 5]);
  });
});

describe('matrixRowMinimum', function() {
  it('returns an Array containing an element representing the maximum of each row of the input', function() {
    pending();
    expect(yourCode.matrixRowMinimum([[1,2,3], [3,4,5]])).toEqual([1, 3]);
  });
});

describe('matrixRowAverage', function() {
  it('returns an Array containing an element representing the average of each row of the input', function() {
    pending();
    expect(yourCode.matrixRowAverage([[1,2,3], [3,4,5]])).toEqual([2, 4]);
  });
});

describe('sortedRowMatrix', function() {
  it('returns an array of arrays, containing each sorted row of the input', function() {
    pending();
    expect(yourCode.sortedRowMatrix([[2,3,1], [3,4,2,5]])).toEqual([[1,2,3], [2,3,4,5]]);
  });
});

describe('lengthOfWords', function() {
  it('returns an array containing a count of the letter in each word of the provided sentence (string arugument)', function() {
    pending();
    expect(yourCode.lengthOfWords('The lazy brown fox jumped')).toEqual([3,4,5,3,6]);
  });
});
