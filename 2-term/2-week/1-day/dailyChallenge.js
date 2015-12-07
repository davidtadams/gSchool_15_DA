/* Daily challenge for the day */
function findGreater(array, num) {
  var retArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > num) {
      retArr.push(array[i]);
    }
  }
  return retArr;
}

//another way to do it with filter
function findGreater2(array, num) {
  return array.filter(function(element) {return element > num;});
}

console.log(findGreater([1,2,3,4,5,6,7,8], 5));
console.log(findGreater2([1,2,3,4,5,6,7,8], 5));


/* answer for exercise 08 */
function alphaSort(array1, array2) {
  return array1.concat(array2).sort();
}

console.log(alphaSort([ "cat", "dog", "fish", "zebra" ], ["lion", "aardvark", "gorilla"]));
