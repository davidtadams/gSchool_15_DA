var yourCode = require('../src');

describe('sameLength', function() {
  it('returns true if the provided string arguments are the same length', function() {
    expect(yourCode.sameLength('foo', 'bar')).toEqual(true);
  });

  it('returns false if the provided string arguments are not the same length', function() {
    expect(yourCode.sameLength('foo', 'notfoo')).toEqual(false);
  });
});

describe('firstGreater', function() {
  xit('returns true if the first argument is (strictly) greater than the second argument', function() {
    expect(yourCode.firstGreater('a', 'A')).toEqual(true);
    expect(yourCode.firstGreater(3, -1)).toEqual(true);
  });

  xit('returns false if the first argument is less than or equal to the second argument', function() {
    expect(yourCode.firstGreater('a', 'a')).toEqual(false);
    expect(yourCode.firstGreater(1, 1)).toEqual(false);
  });
});

describe('firstGreaterOrEqualTo', function() {
  xit('returns true if the first argument is greater than or equal to the second argument', function() {
    expect(yourCode.firstGreaterOrEqualTo('a', 'A')).toEqual(true);
    expect(yourCode.firstGreaterOrEqualTo(1, 2)).toEqual(false);
  });

  xit('returns false if the first argument is (strictly) less than the second argument', function() {
    expect(yourCode.firstGreaterOrEqualTo('a', 'b')).toEqual(false);
    expect(yourCode.firstGreaterOrEqualTo(3, -1)).toEqual(true);
  });
});

describe('firstLengthGreater', function() {
  xit('returns true if the first argument is (strictly) longer than the second argument\'s length', function() {
    expect(yourCode.firstLengthGreater('aa', 'A')).toEqual(true);
    expect(yourCode.firstLengthGreater([1,2,3], [1])).toEqual(true);
  });

  xit('returns false if the first argument is less than or equal to the second argument\'s length', function() {
    expect(yourCode.firstLengthGreater('a', 'a')).toEqual(false);
    expect(yourCode.firstLengthGreater([1,2,3], [2,3,4])).toEqual(false);
  });
});

describe('secondGreater', function() {
  xit('returns true if the second argument is (strictly) greater than the first argument', function() {
    expect(yourCode.secondGreater('a', 'A')).toEqual(false);
    expect(yourCode.secondGreater(-1, 3)).toEqual(true);
  });

  xit('returns false if the second argument is less than or equal to the first argument', function() {
    expect(yourCode.secondGreater('a', 'a')).toEqual(false);
    expect(yourCode.secondGreater(1, 1)).toEqual(false);
  });
});
