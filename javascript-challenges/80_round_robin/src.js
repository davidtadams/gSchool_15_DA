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
  var result = [];
  var firstSplit = [];
  var secondSplit = [];
  var i,j = 0;

  //make sure input array is not empty
  if (input.length === 0) {
    return result;
  }

  //check if input array has odd number of elements
  if (input.length % 2 != 0) {
    input.push('(none)');
  }

  //initialize first and second split arrays
  firstSplit = input.slice(0, input.length / 2);
  secondSplit = input.slice(input.length / 2).reverse();

  //add round 1 to result array
  result.push([]);
  for (j = 0; j < firstSplit.length; j++) {
    result[0].push([ firstSplit[j], secondSplit[j] ]);
  }

  //rotate array for rounds 2 through 4 and add results to result array
  for (i = 1; i < input.length - 1; i++) {
    //push the last element of first array onto end of second array
    secondSplit.push(firstSplit.slice(-1)[0]);

    //rotate elements in first array down except for first 2
    for (j = firstSplit.length - 1; j > 1; j--) {
      firstSplit[j] = firstSplit[j - 1];
    }

    //remove first element in second array and place in index 1 for first array
    firstSplit[1] = secondSplit.shift();

    //add new pairs
    result.push([]);
    for (j = 0; j < firstSplit.length; j++) {
      result[i].push([ firstSplit[j], secondSplit[j] ]);
    }
  }

  return result;
};
