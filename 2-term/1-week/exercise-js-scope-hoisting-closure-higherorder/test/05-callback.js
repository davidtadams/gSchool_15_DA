var chai = require('chai')
var doLater = require('../05-callback')
var expect = chai.expect

xdescribe('05-callback', function () {
  it('Can get secret number', function (done) {
    doLater(function (secret) {
      expect(secret).to.equal(1337)
      done()
    })
  })
})
