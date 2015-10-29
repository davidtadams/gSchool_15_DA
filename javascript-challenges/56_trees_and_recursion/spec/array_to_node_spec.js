var arrayToNode = require('../array_to_node');

describe('arrayToNode', function() {
  it("turns a two-element arrays into a node", function () {
    pending();
    var input = [
      'a',
      []
    ];
    var rootNode = arrayToNode(input);
    expect(rootNode.name).toEqual('a');
  });

  it("turns nested arrays into child nodes", function () {
    pending();
    var input = [
      'a',
      [
        [
          'b',
          []
        ],
        [
          'c',
          []
        ]
      ]
    ];
    var rootNode = arrayToNode(input);
    expect(rootNode.name).toEqual('a');
    expect(rootNode.children[0].name).toEqual('b');
    expect(rootNode.children[1].name).toEqual('c');
  });

  it("handles deeply nested nodes", function () {
    pending();
    var input = [
      'a',
      [
        [
          'b',
          [
            [
              'c',
              [
                [
                  'd',
                  []
                ]
              ]
            ]
          ]
        ]
      ]
    ];
    var rootNode = arrayToNode(input);
    expect(rootNode.name).toEqual('a');
    expect(rootNode.children[0].name).toEqual('b');
    expect(rootNode.children[0].children[0].name).toEqual('c');
    expect(rootNode.children[0].children[0].children[0].name).toEqual('d');
  });
});
