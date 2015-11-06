var code = require('../main');
var expect = require('chai').expect;

describe('Tax Calculator', function(){
  it('should tax 10% on the first $10', function(){
    expect(code.calculate(1)).to.equal(0.1);
    expect(code.calculate(10)).to.equal(1);
  });

  it ('should tax 7% on the second $10', function(){
    expect(code.calculate(15)).to.equal(1.35);
  });

  it ('should tax 5% on the third $10', function(){
    expect(code.calculate(25)).to.equal(1.95);
  });

  it ('should tax 3% on everything after', function(){
    expect(code.calculate(35)).to.equal(2.35);
  });

});
