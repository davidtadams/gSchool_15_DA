var yourCode = require('../src');

describe('person', function() {
  it('returns an object with first_name = "John", last_name = "Mayer"', function() {
    var person = yourCode.person();
    expect(person.firstName).toEqual('John');
    expect(person.lastName).toEqual('Mayer');
  });
});

describe('sweetnesssProperty', function() {
  it('returns the value of the `sweetness` key', function() {
    var obj = {
      lastName: 'cool',
      sweetness: 'super',
      extraName: 'cat'
    };
    expect(yourCode.sweetnessProperty(obj)).toEqual('super');
  });

  it('returns undefined when there is no `sweetness` key', function() {
    expect(yourCode.sweetnessProperty({})).toEqual(undefined);
  });
});

describe('savorynessProperty', function() {
  it('returns the value of the `savory-ness` key', function() {
    var obj = {
      lastName: 'cool',
      "savory-ness": 'super',
      extraName: 'cat'
    };
    expect(yourCode.savorynessProperty(obj)).toEqual('super');
  });

  it('returns undefined when there is no `savory-ness` key', function() {
    expect(yourCode.savorynessProperty({})).toEqual(undefined);
  });
});

describe('keys', function() {
  it('returns the keys of the given object as an Array', function() {
    var obj = {
      the: true,
      best: [1,2,3],
      object: false
    };
    expect(yourCode.keys(obj)).toEqual(['the', 'best', 'object']);
  });

  it('returns an empty Array when given an empty object', function() {
    expect(yourCode.keys({})).toEqual([]);
  });
});

describe('sortedKeys', function() {
  it('returns the keys of the given object, sorted alphabetically', function() {
    var obj = {
      the: true,
      best: [1,2,3],
      object: false
    };
    expect(yourCode.sortedKeys(obj)).toEqual(['best', 'object', 'the']);
  });

  it('returns an empty Array when given an empty object', function() {
    expect(yourCode.sortedKeys({})).toEqual([]);
  });
});

describe('reverseSortedKeys', function() {
  it('returns the keys of the given object, sorted reverse alphabetically', function() {
    var obj = {
      the: true,
      best: [1,2,3],
      object: false
    };
    expect(yourCode.reverseSortedKeys(obj)).toEqual(['the', 'object', 'best']);
  });

  it('returns an empty Array when given an empty object', function() {
    expect(yourCode.reverseSortedKeys({})).toEqual([]);
  });
});
