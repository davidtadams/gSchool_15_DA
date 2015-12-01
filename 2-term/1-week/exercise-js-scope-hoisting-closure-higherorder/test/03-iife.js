var chai = require('chai')
var runner = require('../03-iife')
var expect = chai.expect

xdescribe('03-iife', function () {
  it('can retrieve i from a for loop', function () {
    var callbacks = runner()
    expect(callbacks[0]()).to.equal(0)
    expect(callbacks[1]()).to.equal(1)
    expect(callbacks[2]()).to.equal(2)
  })
})
