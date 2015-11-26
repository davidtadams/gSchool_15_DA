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
      return array.slice(0, array.length);
    }
    return array.slice(array.length - num, array.length);
  },

  union: function(array1, array2) {
    
  },

  intersection: function(array) {

  }
}
