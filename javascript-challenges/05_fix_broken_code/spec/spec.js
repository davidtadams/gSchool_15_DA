var yourCode = require('../src');

describe('addition', function() {
  it('returns the result of adding the two argument', function() {
    expect(yourCode.addition(1,2)).toEqual(3);
  });
});

describe('matches', function() {
  it('returns true if the given arguments match', function() {
    expect(yourCode.matches('a', 'a')).toEqual(true);
  });

  it('returns false if the given arguments do not match', function() {
    expect(yourCode.matches('a', 'b')).toEqual(false);
  });
});

describe('fizzBuzz', function() {
  it('returns fizz when the argument is divisible by 3', function() {
    expect(yourCode.fizzBuzz(3)).toEqual('Fizz');
  });

  it('returns buzz when the argument is divisible by 5', function() {
    expect(yourCode.fizzBuzz(5)).toEqual('Buzz');
  });

  it('returns buzz when the argument is divisible by 5', function() {
    expect(yourCode.fizzBuzz(15)).toEqual('FizzBuzz');
  });

  it('returns the number itself when it is not divisible by 3 or 5', function() {
    expect(yourCode.fizzBuzz(7)).toEqual(7);
  });
});

describe('switcher', function() {
  it('returns "never output anything. ever!" for arguments that are not "foo" or "nope"', function() {
    expect(yourCode.switcher('random')).toEqual('never output anything. ever!');
  });

  it('returns "bar" for argument "foo"', function() {
    expect(yourCode.switcher('foo')).toEqual('bar');
  });

  it('returns "yup" for argument "nope"', function() {
    expect(yourCode.switcher('nope')).toEqual('yup');
  });
});
