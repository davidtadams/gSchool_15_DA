var yourCode = require('../src');

describe('returnArray', function() {
  it('returns [1,2,3,4]', function() {
    expect(yourCode.returnArray()).toEqual([1,2,3,4]);
  });
});

describe('divide', function() {
  xit('returns the result of division of the arguments', function() {
    expect(yourCode.divide(1,2)).toEqual(0.5);
    expect(yourCode.divide(1,0)).toEqual(Infinity);
    expect(yourCode.divide(Infinity,Infinity)).toEqual(NaN);
  });
});

describe('add', function() {
  xit('returns the result of addition of the arguments', function() {
    expect(yourCode.add(1,2)).toEqual(3);
  });
});

describe('power', function() {
  xit('returns the result of exponentiation of the arguments', function() {
    expect(yourCode.power(4,3)).toEqual(64);
  });
});

describe('concatenation', function(){
  xit('returns the result of concatenation of the (String) arguments', function() {
    expect(yourCode.concatenate('OOP', ' is cool')).toEqual('OOP is cool');
  });
});

describe('sub', function(){
  xit('returns the result of replacing the first matching character in the given String with the provided replacement character', function() {
    expect(yourCode.sub('aaBBaaBaBaAbAb', 'a', 'b')).toEqual('baBBaaBaBaAbAb');
  });
});
