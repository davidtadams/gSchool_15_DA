var yourCode = require('../src');

describe('peak', function() {
  it('returns a string representing a peak', function() {
    expect(yourCode.peak()).toEqual('/\\'); // /\ without the escape character ('\')
  });
});

describe('valley', function() {
  xit('returns a string representing a valley', function() {
    expect(yourCode.valley()).toEqual('___');
  });
});

describe('peaks', function() {
  xit('returns the number of peaks provided as an argument', function() {
    expect(yourCode.peaks(3)).toEqual('/\\/\\/\\');
  });
});

describe('valleys', function() {
  xit('returns the number of valleys provided as an argument', function() {
    expect(yourCode.valleys(2)).toEqual('______');
  });
});

describe('peaksAndValleys', function() {
  xit('returns the number of peaks and valleys provided as arguments', function() {
    expect(yourCode.peaksAndValleys(2,1)).toEqual('/\\/\\___');

  });

  // Once you're done uncomment these 4-lines:
  // console.log("\n");
  // console.log('Nice job! Now enjoy some mountains:')
  // console.log(yourCode.peaksAndValleys(2,1) + yourCode.peaksAndValleys(3,1) + yourCode.peaksAndValleys(1,0));
  // console.log("\n");
});
