/*
  Round-Robin is a way to rotate an array of elements such that each element
  can be paired with every other element exactly once.  In sports, this means
  each team plays every other team exactly once.

  Imagine you have an array like [a,b,c,d,e,f].  First, split the array in half:

  [a,b,c]
  [d,e,f]

  Then reverse the second array:

  [a,b,c]
  [f,e,d]

  For the first rotation, keep `a` in the same position, but _rotate_ all the other
  elements clockwise:

  [a,f,b]
  [e,d,c]

  Then, take each pair.

  [a,f,b]  => [ [a,e], [f,d], [b,c] ]
  [e,d,c]

  Continue doing this until the array is back at the original position.

*/

module.exports = function (input) {
};
