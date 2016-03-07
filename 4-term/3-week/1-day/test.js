// mean = 21.2825
// stddev = 7.9596
// n = 16
var stddev = require('./main')

var assert = require("chai").assert

var daggyHeights = [28,24,11,26,16,15,26.77,34,26,9,13.25,27,12,15,30,27.5]

describe("Standard Deviation", function () {
  it("is a function", function () {
    assert.equal(typeof stddev, "function")
  })
  it("returns a number", function () {
    assert.equal(typeof stddev([1,2]), "number")
  })
  it("given uniform data, return 0", function () {
    assert.equal(stddev([0,0,0,0,0]), 0)
  })
  it("given a list of dog heights, returns the stddev", function () {
    assert.closeTo(stddev(daggyHeights), 7.70685, 0.0001)
  })
})

describe("Average", function () {
  //it("")
})
