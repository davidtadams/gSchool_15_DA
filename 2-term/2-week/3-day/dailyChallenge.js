/* Daily challenge code for Garland world */

/* This was incorrect - alfalfa case messed this up */
// function garland(word) {
//   var degree = 0;
//   var mid = Math.floor(word.length / 2);
//
//   for (var i = 1; i <= mid; i++) {
//     var leftString = word.substr(0, i);
//     var rightString = word.substr(word.length - i, word.length);
//     if (leftString === rightString) {
//       degree = i;
//     }
//   }
//
//   return degree;
// }
// console.log(garland('programmer'));
// console.log(garland('ceramic'));
// console.log(garland('onion'));
// console.log(garland('alfalfa'));
// console.log(garland('hotshots'));
// console.log(garland('abracadabra'));
// console.log(garland('couscous'));

console.log('Starting Iterative Solution');

function garland2(word) {
  var degree = 0;
  for (var i = 1; i < word.length; i++) {
    var leftString = word.substr(0, i);
    var rightString = word.substr(word.length - i);
    if (leftString === rightString) {
      degree = i;
    }
  }
  return degree;
}

console.log(garland2('programmer'));
console.log(garland2('ceramic'));
console.log(garland2('onion'));
console.log(garland2('alfalfa'));
console.log(garland2('hotshots'));
console.log(garland2('abracadabra'));
console.log(garland2('couscous'));

console.log('\nStarting Recursive Solution');

//this would work well with a recursive solution
//do that last
//for recursion you would pass in the spliced string each time
function garland3(word1, word2) {
  if (word1 === word2) {
    return word1.length;
  }

  if (word2 === undefined) {
    word2 = word1;
  }

  return garland3(word1.substr(0, word1.length - 1), word2.substr(1));
}

console.log(garland3('programmer'));
console.log(garland3('ceramic'));
console.log(garland3('onion'));
console.log(garland3('hotshots'));
console.log(garland3('abracadabra'));
console.log(garland3('couscous'));
