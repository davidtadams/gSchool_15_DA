var chai = require('chai')
var map = require('../07-map')
var expect = chai.expect

function add2(x) {
  return x + 2
}

function removeVowels(s) {
  return s.replace(/[aeiou]/ig, '')
}

xdescribe('07-map', function () {
  it('Can map numbers', function () {
    expect(map([1,2,8], add2)).to.deep.equal([3,4,10])
  })
  it('Can map strings', function () {
    expect(map(['hello', 'world!'], removeVowels)).to.deep.equal(['hll', 'wrld!'])
  })
})
