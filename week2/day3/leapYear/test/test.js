var code = require('../main');
var expect = require('chai').expect;

describe('Leap Year', function(){
  it('should return true if leap year', function() {
    expect(code.leapYear(1600)).to.equal(true);
    expect(code.leapYear(2000)).to.equal(true);
    expect(code.leapYear(1700)).to.equal(false);
    expect(code.leapYear(1800)).to.equal(false);
    expect(code.leapYear(1900)).to.equal(false);
  });

});
