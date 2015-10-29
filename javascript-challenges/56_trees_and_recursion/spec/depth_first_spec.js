var depthFirst = require('../depth_first');
var Node = require('../node');

describe('depthFirst', function() {

  it("calls the given function for each node in the tree", function () {
    pending();
    var root = new Node('root');
    var child1 = new Node('child1');
    var child2 = new Node('child2');
    var grandchild = new Node('grandchild');
    child1.addChild(grandchild);
    root.addChild(child1);
    root.addChild(child2);

    var result = [];
    depthFirst(root, function (node, level) {
      result.push([node.name, level]);
    });

    expect(result).toEqual([
      ['root', 0],
      ['child1', 1],
      ['grandchild', 2],
      ['child2', 1]
    ]);
  });

});
