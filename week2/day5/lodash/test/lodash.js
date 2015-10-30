var assert = require('assert');

var _ = require('../lodash');

describe('#first(array)', function() {

  it('should return the first element of a non-empty array', function() {
    assert.equal(_.first(['first', 'second']), ['first']);
    assert.equal(_.first(['second', 'third']), ['second']);
  });

});

describe('#take(array, int)', function() {

  it('should assign a default value of 1 to n', function() {
    assert.deepEqual(_.take(['first', 'second']), ['first']);
  });

  it('should return int elements from the beginning of the array', function() {
    assert.deepEqual(_.take(['one', 'two'], 1), ['one']);
    assert.deepEqual(_.take(['one', 'two'], 3), ['one', 'two']);
  });

});

describe('#last(array)', function() {

  it('should return the last element of a non-empty array', function() {
    assert.equal(_.last(['first', 'second']), 'second');
  });

});

describe('#takeRight(array, int)', function() {

  it('should assign int a default value of 1', function() {
    assert.deepEqual(_.takeRight(['first', 'second']), ['second']);
  });

  it('should return int elements from the end of the array', function() {
    assert.deepEqual(_.takeRight(['one', 'two'], 1), ['two']);
    assert.deepEqual(_.takeRight(['one', 'two'], 3), ['one', 'two']);
  });

});

describe('#compact', function() {

  it('Creates a new array with all 0 values removed.', function() {
    assert.deepEqual(_.compact(['one',0,'two']), ['one', 'two'] );
  });

  it('Creates a new array with all undefined values removed.', function() {
    assert.deepEqual(_.compact(['one',undefined,'two']), ['one', 'two'] );
  });

  it('Creates a new array with all empty string values removed.', function() {
    assert.deepEqual(_.compact(['one','two','']), ['one', 'two'] );
  });

  it('Creates a new array with all null values removed.', function() {
    assert.deepEqual(_.compact(['one','two',null]), ['one', 'two'] );
  });

  it('Creates a new array with all NaN values removed.', function() {
    assert.deepEqual(_.compact([NaN,'one','two']), ['one', 'two'] );
  });

});

describe('#difference', function() {

  it('Creates an array of unique array values not included in the other provided arrays using SameValueZero for equality comparisons', function() {
    assert.deepEqual(_.difference([1, 2, 3], [4, 2]), [1,3]);
  });

});

describe('#uniq', function() {

  it('Create a duplicate free version of the array', function() {
    assert.deepEqual(_.uniq([2, 1, 2]), [1, 2]);
    assert.deepEqual(_.uniq([3, 3]), [3]);
  });

});

describe('#max', function() {

  it('Returns maximum value in an array', function() {
    assert.equal(_.max([1,2,3,4,5]), 5);
    assert.equal(_.max([1,7,3,4,5,0]), 7);
  });

});

describe('#min', function() {

  it('returns undefined when the argument is an empty array', function() {
    assert.equal(_.min([]) === undefined, true );
  });

  it('Returns minimum value in an array', function() {
    assert.equal(_.min([1,2,3,4,5]), 1);
  });

});

describe('#indexOf', function() {

  it('returns -1 when the second argument is not matched in the array', function() {
    assert.equal(_.indexOf(['one','two'],'three'), -1);
  });

  it('Returns index of matched value, else return -1', function() {
    assert.equal(_.indexOf([1,2,1,4,5], 4), 3);
  });

});

describe('#shuffle', function() {

  it('Creates an array of shuffled values', function() {
    //testing randomness ??
    assert.equal(_.shuffle([1,2,3,4,5]) !== [1,2,3,4,5], true);
  });

  it('Creates an array that is the same length as the argument array', function() {
    //testing randomness ??
    // console.log('shuffle result:',_.shuffle([1,2,3,4,5]));
    assert.equal(_.shuffle([1,2,3,4,5]).length === 5, true);
  });

});

describe('#size', function() {

  it('Gets the size of a object', function() {
    assert.equal(_.size({a:1,b:2,c:100}), 3);
  });

  it('Gets the size of an array', function() {
    assert.equal(_.size([1,2,3,4,5]), 5);
  });

  it('Gets the size of a word', function() {
    assert.equal(_.size('word'), 4);
  });

  it('Gets the size of a sentence', function() {
    assert.equal(_.size('word with words'), 15);
  });

});

describe('#forEach', function() {

  it('goes through each item in a collection', function() {
    var iteratorCount = 0;
    var result = _.forEach([1,2,3,4], function() {  
      iteratorCount++; 
    });

    assert.equal(iteratorCount, 4);
  });

  it('goes through each item in an array', function() {
    var result = _.forEach([1,2,3,4], function(item) { 
      item + 1; 
    });

    assert.deepEqual(result, [1,2,3,4]);
  });

  it('goes through each property in a collection', function() {
    var iteratorCount = 0;
    var result = _.forEach({a:1,b:2,c:3,d:4}, function(item) { 
      item + 1; 
      iteratorCount ++; 
    });

    assert.equal(iteratorCount, 4);
    assert.deepEqual(result, {a:1,b:2,c:3,d:4} );
  });

});

describe('#filter', function() {

  it('returns an array of all items in a collection where each item returns true when the iteratee is called on ', function() {
    var result = _.filter([1,2,3,4], function(item) { 
      return (item % 2) === 0; 
    });

    var resultTwo = _.filter('pickle', function(item) { 
      return item === 'p'; 
    });

    assert.deepEqual(result, [2,4] );
    assert.deepEqual(resultTwo, ['p'] );
  });

  it('returns an array of all items in an object where each item returns true when the iteratee is called on it', function() {
    var result = _.filter({a:1, b:2, c:3, d:4, e:6}, function(item) {
      return (item % 2) === 0; 
    });

    assert.deepEqual(result, [2,4,6]);
  });

});

describe('#reject', function() {

  it('The opposite of _.filter; this method returns the elements of an ARRAY that predicate does not return truthy for.', function() {
    var iteratorCount = 0;
    var result = _.reject({a:1,b:2,c:3,d:4,e:5}, function(item) { 
      iteratorCount ++; 
      return item % 2 === 0; 
    });

    assert.equal(iteratorCount, 5);
    assert.deepEqual(result, [1,3,5]);
  });

  it('The opposite of _.filter; this method returns the elements of an OBJECT that predicate does not return truthy for.', function() {
    var iteratorCount = 0;
    var result = _.reject({a:1,b:2,c:3,d:4,e:5}, function(item) { 
      iteratorCount ++; 
      return item % 2 === 0; 
    });

    assert.equal(iteratorCount, 5);
    assert.deepEqual(result, [1,3,5]);
  });

});

describe('#sample', function() {

  it('Gets n random elements from a collection.', function() {
    var result = _.sample([1,2,3], 2);

    assert.equal(result.length, 2);
  });

});
