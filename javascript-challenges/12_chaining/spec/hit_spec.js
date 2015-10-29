var Game = require('../game');

describe("Game", function() {
  describe("hit / miss", function() {

    it("returns Game so it can be chained", function() {
      pending();
      expect(Game.score).toEqual(0);

      Game.hit();
      expect(Game.score).toEqual(1);

      Game.miss();
      expect(Game.score).toEqual(0);

      Game.miss().miss().hit();
      expect(Game.score).toEqual(-1);
    });

  });
});
