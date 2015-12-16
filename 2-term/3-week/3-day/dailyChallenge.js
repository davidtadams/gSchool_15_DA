/* Answer for Curry function challenge */
function add(num1) {
  return function(num2) {
    return num1 + num2;
  }
}

console.log(add(1)(1));   // returns 2
console.log(add(20)(20));   // returns 40
console.log(add(100)(5));   // returns 105
console.log(add(40)(2));   // returns 42


/* answer for Zip Arrays challenge */
function zipArrays1(arr1, arr2) {
  var retArr = [];

  if (arr1.length < arr2.length) {
    //arr1 is smaller
    for (var i = 0; i < arr1.length; i++) {
      retArr.push(arr1[i]);
      retArr.push(arr2[i]);
    }

    //append rest of arr2
    retArr = retArr.concat(arr2.slice(i));
  }
  else if (arr1.length > arr2.length) {
    //arr2 is smaller
    for (var i = 0; i < arr2.length; i++) {
      retArr.push(arr1[i]);
      retArr.push(arr2[i]);
    }

    //append rest of arr1
    retArr = retArr.concat(arr1.slice(i));
  }
  else {
    //arr1 length == arr2 length
    for (var i = 0; i < arr1.length; i++) {
      retArr.push(arr1[i]);
      retArr.push(arr2[i]);
    }
  }

  return retArr;
}

// console.log(zipArrays1([1,2,3], [4,5,6]));       //[1,4,2,5,3,6]
// console.log(zipArrays1([1,2], [3,4,5,6,7]));     //[1,3,2,4,5,6,7]
// console.log(zipArrays1([1,2,3,4,5], [6,7]));     //[1,6,2,7,3,4,5]


/* answer for Zip Arrays challenge */
function zipArrays(arr1, arr2) {
  var tail, length;
  var retArr = [];

  if (arr1.length < arr2.length) {
    //array 1 is shorter than array 2
    tail = arr2.slice(arr1.length)
    length = arr1.length;
  }
  else {
    //array 2 is shorter than array 1
    tail = arr1.slice(arr2.length)
    length = arr2.length;
  }

  for (var i = 0; i < length; i++) {
    retArr.push(arr1[i]);
    retArr.push(arr2[i]);
  }

  return retArr.concat(tail);
}

console.log(zipArrays([1,2,3], [4,5,6]));       //[1,4,2,5,3,6]
console.log(zipArrays([1,2], [3,4,5,6,7]));     //[1,3,2,4,5,6,7]
console.log(zipArrays([1,2,3,4,5], [6,7]));     //[1,6,2,7,3,4,5]


/* BEN's solution */
function zipArrays2(array1, array2) {
  var ret = [];
  for (var i = 0; i < Math.max(array1.length, array2.length); i++) {
    if (i < array1.length) ret.push(array1[i]);
    if (i < array2.length) ret.push(array2[i]);
  }
  return ret;
}

// console.log(zipArrays2([1,2,3],[4,5,6]));
// console.log(zipArrays2([1,2,3,4],[5,6,7]));
