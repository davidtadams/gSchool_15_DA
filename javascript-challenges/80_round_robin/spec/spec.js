var roundRobin = require('../src');

describe('roundRobin', function () {

  it('returns an empty array when given an empty array', function () {
    var input = [];
    var result = roundRobin(input);
    expect(result).toEqual([]);
  });

  it('returns round 1 for a 6-element array correctly', function () {
    var input = [1,2,3,4,5,6];
    var result = roundRobin(input);

    // [1,2,3]
    // [6,5,4]
    expect(result[0]).toEqual([
      [1,6],
      [2,5],
      [3,4],
    ]);
  });

  it('returns round 2 for a 6-element array correctly', function () {
    pending();
    var input = [1,2,3,4,5,6];
    var result = roundRobin(input);

    // [1,6,2]
    // [5,4,3]
    expect(result[1]).toEqual([
      [1,5],
      [6,4],
      [2,3],
    ]);
  });

  it('returns round 3 for a 6-element array correctly', function () {
    pending();
    var input = [1,2,3,4,5,6];
    var result = roundRobin(input);

    // [1,5,6]
    // [4,3,2]
    expect(result[2]).toEqual([
      [1,4],
      [5,3],
      [6,2],
    ]);
  });

  it('returns round 4 for a 6-element array correctly', function () {
    pending();
    var input = [1,2,3,4,5,6];
    var result = roundRobin(input);

    // [1,4,5]
    // [3,2,6]
    expect(result[3]).toEqual([
      [1,3],
      [4,2],
      [5,6]
    ]);
  });

  it('returns round 5 for a 6-element array correctly', function () {
    pending();
    var input = [1,2,3,4,5,6];
    var result = roundRobin(input);

    // [1,3,4]
    // [2,6,5]
    expect(result[4]).toEqual([
      [1,2],
      [3,6],
      [4,5],
    ]);
  });

  it('returns undefined for round 6 of a 6-element array', function () {
    pending();
    var input = [1,2,3,4,5,6];
    var result = roundRobin(input);
    expect(result[5]).toEqual(undefined);
  });

  it('adds the string "(none)" if there are an odd number of teams', function () {
    pending();
    var input = [1,2,3,4,5];
    var result = roundRobin(input);

    expect(result[0]).toEqual([
      [1,'(none)'],
      [2,5],
      [3,4],
    ]);

    expect(result[1]).toEqual([
      [1,5],
      ['(none)',4],
      [2,3],
    ]);

    expect(result[2]).toEqual([
      [1,4],
      [5,3],
      ['(none)',2],
    ]);

    expect(result[3]).toEqual([
      [1,3],
      [4,2],
      [5,'(none)']
    ]);

    expect(result[4]).toEqual([
      [1,2],
      [3,'(none)'],
      [4,5],
    ]);
  });

  it('returns rounds for 8 correctly', function () {
    pending();
    var input = [1,2,3,4,5,6,7,8];
    var result = roundRobin(input);

    // [1,2,3,4]
    // [8,7,6,5]
    expect(result[0]).toEqual([
      [1,8],
      [2,7],
      [3,6],
      [4,5],
    ]);

    // [1,8,2,3]
    // [7,6,5,4]
    expect(result[1]).toEqual([
      [1,7],
      [8,6],
      [2,5],
      [3,4],
    ]);

    // [1,7,8,2]
    // [6,5,4,3]
    expect(result[2]).toEqual([
      [1,6],
      [7,5],
      [8,4],
      [2,3],
    ]);

    // [1,6,7,8]
    // [5,4,3,2]
    expect(result[3]).toEqual([
      [1,5],
      [6,4],
      [7,3],
      [8,2],
    ]);

    // [1,5,6,7]
    // [4,3,2,8]
    expect(result[4]).toEqual([
      [1,4],
      [5,3],
      [6,2],
      [7,8],
    ]);

    // [1,4,5,6]
    // [3,2,8,7]
    expect(result[5]).toEqual([
      [1,3],
      [4,2],
      [5,8],
      [6,7],
    ]);

    // [1,3,4,5]
    // [2,8,7,6]
    expect(result[6]).toEqual([
      [1,2],
      [3,8],
      [4,7],
      [5,6],
    ]);

    expect(result[7]).toEqual(undefined);
  });


});
