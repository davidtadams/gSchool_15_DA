var yourCode = require('../src');

describe('first', function() {

  it('returns the first element for a given Array', function() {
    expect(yourCode.first(['foo', 'bar'])).toEqual('foo');
  });

  it('returns undefined when given an empty Array', function() {
    expect(yourCode.first([])).toEqual(undefined);
  });
});

describe('last', function() {

  it('returns the last element for a given Array', function() {
    expect(yourCode.last(['foo', 'monkey', 'bar'])).toEqual('bar');
  });

  it('returns undefined when given an empty Array', function() {
    expect(yourCode.last([])).toEqual(undefined);
  });
});

describe('empty', function() {
  it('returns true if the array has no elements', function() {
    expect(yourCode.empty([])).toEqual(true);
  });

  it('returns false if the array has elements', function() {
    expect(yourCode.empty([1,2,3])).toEqual(false);
  });
});

describe('first_n', function() {
  it('returns an empty array for an empty array', function() {
    expect(yourCode.first_n([], 3)).toEqual([]);
  });

  it('returns as many elements as xit can when there are less than n', function() {
    expect(yourCode.first_n([1,2], 3)).toEqual([1,2]);
  });

  it('returns the first n objects in the array', function() {
    expect(yourCode.first_n([1,2,3,4,5], 3)).toEqual([1,2,3]);
  });
});

describe('last_n', function() {
  it('returns an empty array for an empty array', function() {
    expect(yourCode.last_n([], 3)).toEqual([]);
  });

  it('returns as many elements as xit can when there are less than n', function() {
    expect(yourCode.last_n([1,2], 3)).toEqual([1,2]);
  });

  it('returns the last n objects in the array', function() {
    expect(yourCode.last_n([1,2,3,4,5], 3)).toEqual([3,4,5]);
  });
});

describe('drop', function() {
  it('returns the elements after n elements have been dropped', function() {
    expect(yourCode.drop([1,2,3,4,5,6], 3)).toEqual([4,5,6]);
  });

  it('returns an empty array if there not enough elements after dropping the n elements', function() {
    expect(yourCode.drop([1,2], 3)).toEqual([]);
  });
});

describe('union', function() {
  it('returns the union of two arrays provided as arguments', function() {
    expect(yourCode.union([1,2], [3,4,5])).toEqual([1,2,3,4,5]);
  });

  it('returns an empty array when both arguments are empty arrays', function() {
    expect(yourCode.union([], [])).toEqual([]);
  });
});

describe('intersection', function() {
  it('returns the intersection (e.g. common elements) of two arrays', function() {
    expect(yourCode.intersection([1,2,3], ['a', '2', 1])).toEqual([1]);
  });
});
