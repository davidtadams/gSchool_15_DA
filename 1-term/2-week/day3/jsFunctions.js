//using the arguments keyword for a function

function args() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);

}

args('apple', 'pear');
args(1, 2, 3, 4, 5);
