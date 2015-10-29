var yourCode = require('../src');

describe("helloWorld", function() {

  it("returns the string Hello World", function() {
    expect(yourCode.helloWorld()).toEqual("Hello World");
  });

});

describe("hello", function() {

  it("returns Hello plus the string you pass it", function() {
    expect(yourCode.hello('Frog')).toEqual("Hello Frog");
  });

});

describe("shout", function() {

  it("returns Hello plus the string you pass it, upper case", function() {
    expect(yourCode.shout('Frog')).toEqual("Hello FROG");
  });

});

describe("whisper", function() {

  it("returns Hello plus the string you pass it, lower case", function() {
    expect(yourCode.whisper('Frog')).toEqual("Hello frog");
  });

});

describe("separate", function() {

  it("returns the characters of the given word as an array", function() {
    expect(yourCode.separate('jumbo')).toEqual(['j', 'u', 'm', 'b', 'o']);
  });

});

describe("reverseJoin", function() {

  it("returns the characters of the given array, reversed and joined", function() {
    expect(yourCode.reverseJoin(['j', 'u', 'm', 'b', 'o'])).toEqual('o,b,m,u,j');
  });

});

describe("reverseJoinCompact", function() {

  it("returns the characters of the given array, reversed and joined by nothing", function() {
    expect(yourCode.reverseJoinCompact(['j', 'u', 'm', 'b', 'o'])).toEqual('obmuj');
  });

});

describe("backwardsDay", function() {

  it("returns Hello plus the string you pass it, reversed", function() {
    expect(yourCode.backwardsDay('Frog')).toEqual("Hello gorF");
  });

});
