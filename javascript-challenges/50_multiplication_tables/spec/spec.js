var yourCode = require('../src');

describe('twoTimesTable', function() {
  it('returns a String representing the "times" tables for 2', function() {
    pending();
    var expectedOutput = '   1 2\n' +
                         ' 1 1 2\n' +
                         ' 2 2 4';

    expect(yourCode.twoTimesTable()).toEqual(expectedOutput);
  });
});

describe('timesTable', function() {
  it('returns a string representing the "times" tables for the provided argument, correctly handling spacing', function(){
    pending();
    var expectedOutput = '     1  2  3  4\n' +
                         '  1  1  2  3  4\n' +
                         '  2  2  4  6  8\n' +
                         '  3  3  6  9 12\n' +
                         '  4  4  8 12 16';

    expect(yourCode.timesTable(4)).toEqual(expectedOutput);
  });
});
