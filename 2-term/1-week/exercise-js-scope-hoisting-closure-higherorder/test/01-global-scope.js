var chai = require('chai')
var runner = require('../01-global-scope')
var expect = chai.expect

xdescribe('01-global-scope', function () {
  it('will return "outer"', function () {
    expect(runner()).to.equal('outer')
  })
})
