var split = function (array, n) {
  var result = [];
  while (array.length) {
    var group = [];
    for (var i = 0; i < n; i++) {
      var random = Math.floor(Math.random()*array.length);
      var student = array.splic(random, 1);
      group.push(student);
    }
    
  }
}

var result = split(students, 8);
console.log(result);
