var chai = require('chai')
var counter = require('../06-counter')
var expect = chai.expect

xdescribe('06-counter', function () {
  it('i can count', function () {
    var c = counter()
    expect(c()).to.equal(1)
    expect(c()).to.equal(2)
    expect(c()).to.equal(3)
  })
  it('we can count', function () {
    var c1 = counter()
    var c2 = counter()
    expect(c1()).to.equal(1)
    expect(c1()).to.equal(2)
    expect(c2()).to.equal(1)
    expect(c1()).to.equal(3)
    expect(c2()).to.equal(2)
  })
})
