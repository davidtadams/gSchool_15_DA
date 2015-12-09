/* Daily challenge code for Garland world */

//this would work well with a recursive solution
//do that last

function garland(word) {
  var degree = 0;
  var leftString = "";
  var rightString = "";

  if (word.length % 2 == 0) {
    var mid = Math.floor(word.length / 2);
  }
  else {
    var mid = Math.floor(word.length / 2) + 1;
  }

  for (var i = 0; i < mid; i++) {
    // leftString = word.slice(0, i + 1);
    // rightString = word.slice(word.length - i - 1, word.length);
    leftString = word.substr(0, i + 1);
    rightString = word.substr(mid, i + 1);
    console.log(leftString, rightString);
  }
  return true;
}


console.log(garland('programmer'));
console.log(garland('ceramic'));
// console.log(garland('onion'));
// console.log(garland('alfalfa'));
// console.log(garland('hotshots'));
// console.log(garland('abracadabra'));
// console.log(garland('couscous'));
