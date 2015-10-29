var yourCode = require('../src');

describe('person', function() {
  it('returns an object with first_name = "John", last_name = "Mayer"', function() {
    var person = yourCode.person();
    expect(person.firstName).toEqual('John');
    expect(person.lastName).toEqual('Mayer');
  });
});

describe('sweetnesssProperty', function() {
  xit('returns the value of the `sweetness` key', function() {
    var obj = {
      lastName: 'cool',
      sweetness: 'super',
      extraName: 'cat'
    };
    expect(yourCode.sweetnessProperty(obj)).toEqual('super');
  });

  xit('returns undefined when there is no `sweetness` key', function() {
    expect(yourCode.sweetnessProperty({})).toEqual(undefined);
  });
});

describe('savorynessProperty', function() {
  xit('returns the value of the `savory-ness` key', function() {
    var obj = {
      lastName: 'cool',
      "savory-ness": 'super',
      extraName: 'cat'
    };
    expect(yourCode.savorynessProperty(obj)).toEqual('super');
  });

  xit('returns undefined when there is no `savory-ness` key', function() {
    expect(yourCode.savorynessProperty({})).toEqual(undefined);
  });
});

describe('keys', function() {
  xit('returns the keys of the given object as an Array', function() {
    var obj = {
      the: true,
      best: [1,2,3],
      object: false
    };
    expect(yourCode.keys(obj)).toEqual(['the', 'best', 'object']);
  });

  xit('returns an empty Array when given an empty object', function() {
    expect(yourCode.keys({})).toEqual([]);
  });
});

describe('sortedKeys', function() {
  xit('returns the keys of the given object, sorted alphabetically', function() {
    var obj = {
      the: true,
      best: [1,2,3],
      object: false
    };
    expect(yourCode.sortedKeys(obj)).toEqual(['best', 'object', 'the']);
  });

  xit('returns an empty Array when given an empty object', function() {
    expect(yourCode.sortedKeys({})).toEqual([]);
  });
});

describe('reverseSortedKeys', function() {
  xit('returns the keys of the given object, sorted reverse alphabetically', function() {
    var obj = {
      the: true,
      best: [1,2,3],
      object: false
    };
    expect(yourCode.reverseSortedKeys(obj)).toEqual(['the', 'object', 'best']);
  });

  xit('returns an empty Array when given an empty object', function() {
    expect(yourCode.reverseSortedKeys({})).toEqual([]);
  });
});
