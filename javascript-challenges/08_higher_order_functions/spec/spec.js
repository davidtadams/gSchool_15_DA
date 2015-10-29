var yourCode = require('../src');

describe('simpeCall', function() {

  it('calls the function passed to it and returns the result', function() {
    var rand = (new Date()).getMilliseconds();

    var myFunc = function(input){
      return rand;
    }

    expect(yourCode.simpleCall(myFunc)).toEqual(rand);
  });

});

describe('each', function() {

  xit('calls the function passed to it once for every item in the array', function() {
    var items = ['a', 'k', 'z'];
    var rand = (new Date()).getMilliseconds();
    var result = [rand];

    yourCode.each(items, function(letter){
      result.push(letter.toUpperCase());
    });

    expect(result).toEqual([rand, 'A', 'K', 'Z']);
  });

});

describe('map', function() {

  xit('calls the function passed to it once for every item in the array and returns an array with the results', function() {
    var rand = (new Date()).getMilliseconds();
    var items = [rand, 1,2,3];

    var result = yourCode.map(items, function(item){
      return item * 5;
    });

    expect(result).toEqual([rand * 5, 5, 10, 15]);
  });

});

describe('reduce', function() {
  xit('calls the function passed to it, given a starting value, and returns a single, accumulated value', function() {
    var rand = (new Date()).getMilliseconds();
    var items = [rand,1,2,3];

    var result = yourCode.reduce(items, 0, function(sum, incr){
      return sum + incr;
    });

    expect(result).toEqual(rand + 6);
  });

  xit('behaves correctly with String arguments', function() {
    var rand = (new Date()).getMilliseconds();
    var items = ['dog',' ','food',' ','your',' ','code','!'];

    var result = yourCode.reduce(items, '', function(output, string){
      return output + string[0];
    }, '');

    expect(result).toEqual('d f y c!');
  });
});

describe('find', function() {
  xit('returns the element that matches the given callback function', function() {
    var callback = function(elem) { return elem === 'awesome' };

    expect(yourCode.find(['always', 'awesome', 'sometimes'], callback)).toEqual('awesome');
  });

  xit('returns undefined if no element matches the condition', function() {
    var callback = function(elem) { return elem === 1 };

    expect(yourCode.find([0,2,4], callback)).toEqual(undefined);
  });
});

describe('any', function() {
  xit('returns true if any element of the array matches the condition established by the provided callback function', function() {
    var callback = function(elem) { return elem.length === 2 };

    expect(yourCode.any(['a', 'no', 'nope'], callback)).toEqual(true)
  });

  xit('returns false if no element of the array matches the condition provided by the callback function', function() {
    var callback = function(elem) { return elem % 2 === 0 };

    expect(yourCode.any([1,3,5,7,9], callback)).toEqual(false);
  });
});

describe('all', function() {
  xit('returns true if all elements of the array match the condition established by the provided callback function', function() {
    var callback = function(elem) { return elem % 2 === 0 };

    expect(yourCode.all([0,2,4,6,8], callback)).toEqual(true);
  });

  xit('returns false if any element does not meet the criteria of the provided callback function', function() {
    var callback = function(elem) { return elem.length > 10 };

    expect(yourCode.all(['coding', 'is', 'nerd', 'sports'], callback)).toEqual(false);
  });
});
