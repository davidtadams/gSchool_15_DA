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
_.difference = function() {
	// Place your solution here
  
};

// Create a duplicate free version of the array
// _.uniq([2, 1, 2]);
// → [2, 1]
_.uniq = function() {
	// Place your solution here
};

// Returns maximum value in an array
_.max = function() {
	// Place your solution here
};

// Returns min value in an array
_.min = function() {
	// Place your solution here
};

// Returns index of matched value, else return -1
_.indexOf = function() {
	// Place your solution here
};

/*************** BONUS ***************/
// Retuns a new shuffled array
_.shuffle = function() {
	// Place your solution here
};

/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of the collection
_.size = function() {
	// Place your solution here
};

// Iterates on each item of the collection and then returns the original collection
_.forEach = function() {
	// Place your solution here
};

// Returns a new array with the filtered items
_.filter = function() {
	// Place your solution here
};

// Returns a new array with the unfiltered items
_.reject = function() {
	// Place your solution here
};

/*************** BONUS ***************/
// Returns n random items
_.sample = function() {
	// Place your solution here
};


module.exports = _;
