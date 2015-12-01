var chai = require('chai')
var runner = require('../00-warmup')
var expect = chai.expect

xdescribe('00-warmup', function () {
  it('will return "correct"', function () {
    expect(runner()).to.equal('correct')
  })
})
