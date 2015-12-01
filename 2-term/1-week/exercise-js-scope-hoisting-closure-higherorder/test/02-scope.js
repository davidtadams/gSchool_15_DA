var chai = require('chai')
var checkSecret = require('../02-shadowing').checkSecret
var hackSecret = require('../02-shadowing').hackSecret
var expect = chai.expect

xdescribe('02-shadowing', function () {
  it('Can check secret', function () {
    expect(checkSecret()).to.equal(true)
  })
  it('Can\'t get hacked', function () {
    expect(hackSecret()).to.equal('not hacked')
  })
})
