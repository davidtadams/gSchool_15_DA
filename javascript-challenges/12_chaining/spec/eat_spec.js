var Person = require('../person');

describe("Person", function() {
  describe("eat", function() {

    it("returns the person, so it can be chained", function() {
      pending();
      var person = new Person('vic', 5);

      person.eat();
      expect(person.weight).toEqual(6);

      person.eat().eat().eat();
      expect(person.weight).toEqual(9);
    });

  });
});
