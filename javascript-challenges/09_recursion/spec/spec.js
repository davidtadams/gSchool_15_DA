var yourCode = require('../src');

describe('factorial', function() {

  it('correctly handles the base case', function() {
    pending();
    expect(yourCode.factorial(0)).toEqual(1);
  });

  it('correctly computes 1! = 1', function() {
    pending();
    expect(yourCode.factorial(1)).toEqual(1);
  });

  it('correctly computes 2! = 2', function() {
    pending();
    expect(yourCode.factorial(2)).toEqual(2);
  });

  it('correctly computes 3! = 6', function() {
    pending();
    expect(yourCode.factorial(3)).toEqual(6);
  });

  it('correctly computes 4! = 24', function() {
    pending();
    expect(yourCode.factorial(4)).toEqual(24);
  });

  it('correctly computes 5! = 120', function() {
    pending();
    expect(yourCode.factorial(5)).toEqual(120);
  });

  it('correctly computes 10! = 3628800', function() {
    pending();
    expect(yourCode.factorial(10)).toEqual(3628800);
  });

  it('correctly computes 15! = 1307674368000', function() {
    pending();
    expect(yourCode.factorial(15)).toEqual(1307674368000);
  });

  it('correctly computes 20! = 2432902008176640000', function() {
    pending();
    expect(yourCode.factorial(20)).toEqual(2432902008176640000);
  });

  it('correctly computes 50! = 3.0414093201713376e+64', function() {
    pending();
    expect(yourCode.factorial(50)).toEqual(3.0414093201713376e+64);
  });
});
