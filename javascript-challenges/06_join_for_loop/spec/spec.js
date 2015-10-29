var yourCode = require('../src');

describe('joinWithFor', function() {
  it('returns a string with the elements of the array joined', function() {
    expect(yourCode.joinWithFor([1,2,3,4])).toEqual('1234');
  });
});

describe('joinWithForAndIndex', function() {
  xit('returns a string with the elements of the array joined by their index', function() {
    expect(yourCode.joinWithForAndIndex(['a', 'b', 'c', 'd'])).toEqual("a0b1c2d3");
  });
});

describe('joinWithoutOddCharacters', function() {
  xit ('returns a joined String of the elements that have an even-index in the given array', function() {
    expect(yourCode.joinWithoutOddCharacters(['c','a','t','s',' ','a','r','e',' ','c','o','o','l'])).toEqual('ct r ol');
  });

  xit ('returns an empty String for an empty array', function() {
    expect(yourCode.joinWithoutOddCharacters([])).toEqual('');
  });
});

describe('joinWithForAndToken', function() {
  xit('returns a String with the elements of the array joined, separated by the provided token', function() {
    expect(yourCode.joinWithForAndToken(['a', 'b', 'c'], '*')).toEqual('a*b*c');
  });

  xit('returns an empty String for an empty array', function() {
    expect(yourCode.joinWithForAndToken([], '*')).toEqual('');
  });
});

describe('joinWithForAndAlternatingTokens', function() {
  xit('returns a String with the element of the array joined, alternating between the provided tokens', function() {
    expect(yourCode.joinWithForAndAlternatingTokens([1,2,3,4,5], '*', '+')).toEqual('1*2+3*4+5')
  });

  xit('returns an empty String for an empty array', function() {
    expect(yourCode.joinWithForAndAlternatingTokens([], '*')).toEqual('');
  });
});
