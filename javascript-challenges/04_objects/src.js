module.exports = {
  person: function() {
    // your code here
    return {firstName: 'John', lastName: 'Mayer'};
  },

  sweetnessProperty: function(obj) {
    return obj.sweetness;
  },

  savorynessProperty: function(obj) {
    return obj['savory-ness'];
  },

  keys: function(obj) {
    return Object.keys(obj);
  },

  sortedKeys: function(obj) {
    return Object.keys(obj).sort();
  },

  reverseSortedKeys: function(obj) {
    return Object.keys(obj).sort().reverse();
  }

};
