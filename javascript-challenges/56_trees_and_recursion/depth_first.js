/*

  A tree can be represented by a single root node that has child nodes,
  which in turn have child nodes etc...

       A
      /\
    B   C
   /\
  D E

  You can write code that "visits" every node, and there are two strategies:

    * depth first: A, then B, then D and E, then back to C
    * depth first: A, then B, then C, then D and E

  Given a node, write a depthFirst function that will go through each node
  and execute a callback on each node.

  Imlement using recursion.

*/

var depthFirst = function(node, callback, level) {
};

module.exports = depthFirst;
