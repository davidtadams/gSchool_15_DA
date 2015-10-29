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
  }
}

for (var i = 1; i <= 50; i++) {
  console.log(module.exports.fizzbuzz(i));
}
