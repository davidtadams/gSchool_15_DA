module.exports = {
  fizzbuzz: function (num) {
    if (num % 5 === 0) {
      if (num % 3 === 0) {
        return 'FizzBuzz';
      }
      return 'Buzz';
    }
    else if (num % 3 === 0) {
      return 'Fizz';
    }
    else {
      return num;
    }
  },

  fizzbuzz2: function (num) {
    var retArr = [];
    if (num <= 0) {
      return 0;
    }

    for (var i = 1; i <= num; i++) {
      retArr.push(this.fizzbuzz(i));
    }

    return retArr;
  }
}

// for (var i = 1; i <= 50; i++) {
//   console.log(module.exports.fizzbuzz(i));
// }
