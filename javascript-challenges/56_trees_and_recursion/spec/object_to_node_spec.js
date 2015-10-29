var objectToNode = require('../object_to_node');

describe('objectToNode', function() {

  it("turns an object into a node", function () {
    pending();
    var input = {
      name: 'a',
      children: []
    };
    var rootNode = objectToNode(input);
    expect(rootNode.name).toEqual('a');
  });

  it("handles deeply nested objects", function () {
    pending();
    var input = {
      name: 'a',
      children: [
        {
          name: 'b',
          children: [
            {
              name: 'c',
              children: [
                {
                  name: 'd',
                  children: []
                }
              ]
            }
          ]
        }
      ]
    };
    var rootNode = objectToNode(input);
    expect(rootNode.name).toEqual('a');
    expect(rootNode.children[0].name).toEqual('b');
    expect(rootNode.children[0].children[0].name).toEqual('c');
    expect(rootNode.children[0].children[0].children[0].name).toEqual('d');
  });
});
