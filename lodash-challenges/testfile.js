var file = require('./lodash');

file.filter('pickle', function(item) {
  return item === 'p';
});

// console.log(file.difference([1, 2, 3], [4, 2]));

console.log(file.shuffle([1,2,3,4,5]));
