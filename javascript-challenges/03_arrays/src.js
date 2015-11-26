module.exports = {

  first: function(array) {
    return array[0];
  },

  last: function(array) {
    return array[array.length - 1];
  },

  empty: function(array) {
    return !array.length
  },

  first_n: function(array, num) {
    return array.slice(0, num);
  },

  last_n: function(array, num) {
    if (array.length - num < 0) {
      return array.slice(0, array.length);
    }
    return array.slice(array.length - num, array.length);
  },

  drop: function(array, num) {
    if (array.length - num < 0) {
      return [];
    }
    return array.slice(array.length - num, array.length);
  },

  union: function(array1, array2) {
    var newArr = array1;
    var found;

    for (var i = 0; i < array2.length; i++) {
      found = false;
      for (var j = 0; j < array1.length; j++) {
        if (array2[i] === newArr[j]) {
          found = true;
        }
      }
      if (!found) {
        newArr.push(array2[i]);
      }
    }

    return newArr
  },

  intersection: function(array1, array2) {
    var newArr = [];
    var found;

    for (var i = 0; i < array2.length; i++) {
      found = false;
      for (var j = 0; j < array1.length; j++) {
        if (array2[i] === array1[j]) {
          found = true;
        }
      }
      if (found) {
        newArr.push(array2[i]);
      }
    }

    return newArr
  }
}
