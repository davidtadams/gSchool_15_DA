var Node = require('../node');

describe('Node', function() {
  describe('addChild', function() {
    it("sets the child node's to itself", function () {
      pending();
      var node = new Node('root');
      var child = new Node('child');

      node.addChild(child);

      expect(child.parent).toEqual(node);
    });

    it("adds the child to the parents children array", function () {
      pending();
      var node = new Node('root');
      var child = new Node('child');

      node.addChild(child);

      expect(node.children).toContain(child);
    });
  });
});
