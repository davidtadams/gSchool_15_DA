var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // Returns the first element of an array
_.first = function(arr) {
	// Place your solution here
  return arr[0];
};

 // Returns the first n number of elements in an array.
_.take = function(arr, n) {
	// Place your solution here
  n = n || 1;
  return arr.slice(0, n);
};

// Returns the last element of an array
_.last = function(arr) {
	// Place your solution here
  return arr[arr.length - 1];
};

// Returns the last n number of elements in an array.
_.takeRight = function(arr, n) {
	// Place your solution here
  n = n || 1;
  if (n > arr.length) {
    n = arr.length;
  }
  return arr.slice(arr.length - n, arr.length);
};

// Creates a new array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(arr) {
  // Place your solution here
  var retArr = [];
  for(var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      retArr.push(arr[i]);
    }
  }
  return retArr;
};

// Creates an array of unique array values not included in the other provided arrays
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(arr1, arr2) {
	// Place your solution here
  var retArr = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      retArr.push(arr1[i]);
    }
  }
  return retArr;
};

// Create a duplicate free version of the array
// _.uniq([2, 1, 2]);
// → [2, 1]
_.uniq = function(arr) {
	// Place your solution here
  return arr.filter(function(value, index, self) {
    return self.indexOf(value) == index;
  }).sort()
};

// Returns maximum value in an array
_.max = function(arr) {
	// Place your solution here
  var max = 0;
  for(var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};

// Returns min value in an array
_.min = function(arr) {
	// Place your solution here
  if (!arr.length) {
    return undefined;
  }

  var min = arr[0];
  for(var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
};

// Returns index of matched value, else return -1
_.indexOf = function(arr, val) {
	// Place your solution here
  return arr.indexOf(val);
};

/*************** BONUS ***************/
// Retuns a new shuffled array
_.shuffle = function(arr) {
	// Place your solution here
  var random = 0;
  var retArr = [];
  while (retArr.length < arr.length) {
    random = Math.floor(Math.random() * arr.length);
    if (arr[random] != null) {
      retArr.push(arr[random]);
      arr[random] = null;
    }
  }
  return retArr;
};

/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of the collection
_.size = function(input) {
	// Place your solution here
  var count = 0;
  for (var n in input) {
    if (input.hasOwnProperty(n)) {
      count++;
    }
  }
  return count;
};

// Iterates on each item of the collection and then returns the original collection
_.forEach = function(input, funct) {
	// Place your solution here
  for (var n in input) {
    funct(n);
  }
  return input;
};

// Returns a new array with the filtered items
_.filter = function(input, funct) {
	// Place your solution here
  var retArr = [];
  for (var n in input) {
    if (funct(input[n])) {
      retArr.push(input[n]);
    }
  }
  return retArr;
};

// Returns a new array with the unfiltered items
// _.reject = function(input, funct) {
// 	// Place your solution here
//   var retArr = [];
//   for (var n in input) {
//     if (!funct(input[n])) {
//       retArr.push(input[n]);
//     }
//   }
//   return retArr;
// };

// Make reject function with previous filter function
_.reject = function(input, funct) {
	// Place your solution here
  return _.filter(input, function(item) {
    return !funct(item);
  });
};

/*************** BONUS ***************/
// Returns n random items
_.sample = function(arr, n) {
	// Place your solution here
  var retArr = [];
  while (retArr.length < n) {
    random = Math.floor(Math.random() * arr.length);
    if (arr[random]) {
      retArr.push(arr[random]);
      arr[random] = null;
    }
  }
  return retArr;
};


module.exports = _;
