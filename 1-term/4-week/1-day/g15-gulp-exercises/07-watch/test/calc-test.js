var calc = require('../src/components/calc');
var assert = require('assert');

describe('calc', function () {
	it('2+2 should equal 4', function () {
		assert.equal(calc(2, 2), 4)
	})
	it('2+3 should equal 5', function () {
		assert.equal(calc(2, 3), 5)
	})
})
