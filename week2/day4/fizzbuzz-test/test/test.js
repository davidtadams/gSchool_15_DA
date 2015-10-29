var code = require('../main');
var expect = require('chai').expect;

describe('Fizzbuzz test suite', function () {
  it('should return Fizz', function () {
    expect(code.fizzbuzz(3)).to.equal('Fizz');
    expect(code.fizzbuzz(6)).to.equal('Fizz');
    expect(code.fizzbuzz(12)).to.equal('Fizz');
    expect(code.fizzbuzz(33)).to.equal('Fizz');
    expect(code.fizzbuzz(54)).to.equal('Fizz');
  });

  it('should return Buzz', function () {
    expect(code.fizzbuzz(5)).to.equal('Buzz');
    expect(code.fizzbuzz(10)).to.equal('Buzz');
    expect(code.fizzbuzz(20)).to.equal('Buzz');
    expect(code.fizzbuzz(25)).to.equal('Buzz');
    expect(code.fizzbuzz(35)).to.equal('Buzz');
  });

  it('should return FizzBuzz', function () {
    expect(code.fizzbuzz(15)).to.equal('FizzBuzz');
    expect(code.fizzbuzz(30)).to.equal('FizzBuzz');
    expect(code.fizzbuzz(45)).to.equal('FizzBuzz');
    expect(code.fizzbuzz(60)).to.equal('FizzBuzz');
    expect(code.fizzbuzz(135)).to.equal('FizzBuzz');
  });

  it('should return just the number', function () {
    expect(code.fizzbuzz(1)).to.equal(1);
    expect(code.fizzbuzz(2)).to.equal(2);
    expect(code.fizzbuzz(4)).to.equal(4);
    expect(code.fizzbuzz(17)).to.equal(17);
    expect(code.fizzbuzz(49)).to.equal(49);
  });
})

//http://stackoverflow.com/questions/17526805/chai-test-array-equality-doesnt-work-as-expected
describe('Fizzbuzz test suite for function 2', function () {
  it('should return correct array output', function () {
    expect(code.fizzbuzz2(0)).to.equal(0);
    expect(code.fizzbuzz2(1)).to.eql([1]);
    expect(code.fizzbuzz2(2)).to.eql([1, 2]);
    expect(code.fizzbuzz2(3)).to.eql([1, 2, 'Fizz']);
    expect(code.fizzbuzz2(4)).to.eql([1, 2, 'Fizz', 4]);
    expect(code.fizzbuzz2(5)).to.eql([1, 2, 'Fizz', 4, 'Buzz']);
    expect(code.fizzbuzz2(10)).to.eql([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']);
    expect(code.fizzbuzz2(15)).to.eql([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
  })
})
