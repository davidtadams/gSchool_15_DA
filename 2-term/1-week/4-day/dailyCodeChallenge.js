/* answer to the up down daily challenge */
function upDown(array) {
  var retArr = [];
  for (var i = 0; i < array.length; i++) {
    if (i != 0) {
      if (array[i] > array[i - 1]) {
        //current number is higher than previous number
        retArr.push("up");
      }
      else if (array[i] < array[i - 1]) {
        //current number is lower than previous number
        retArr.push("down");
      }
      else {
        //current numbre is equal to previous number
        retArr.push("even");
      }
    }
  }
  return retArr;
}

console.log(upDown([6,3,5,4,3,4,4,5]));


/* answer to the longest string challenge */
function longestString(array) {
  var longestLength = 0;
  var longestString;
  for (var i = 0; i < array.length; i++) {
    if (longestLength < array[i].length) {
      longestLength = array[i].length;
      longestString = array[i];
    }
  }
  return {[longestString]: longestLength};
}

console.log(longestString(["truck", "sidewalk", "book"]));
