/* Created by David Adams December 15 2015 */
function calculateRPN(string) {
  var num1, num2;
  var stack = [];
  var input = string.split(' ');

  for (var i = 0; i < input.length; i++) {
    if (input[i] != '+' && input[i] != '-' && input[i] != 'x'
        && input[i] != '/' && input[i] != '*') {
      stack.push(parseInt(input[i]));
    }
    else {
      if (stack.length < 2) {
        return 'ERROR!';
      }

      num2 = stack.pop();
      num1 = stack.pop();

      if (input[i] === '+') {
        stack.push(num1 + num2);
      }
      else if (input[i] === '-') {
        stack.push(num1 - num2);
      }
      else if (input[i] === 'x' || input[i] === '*') {
        stack.push(num1 * num2);
      }
      else if (input[i] === '/') {
        stack.push(num1 / num2);
      }
    }
  }

  if (stack.length > 1) {
    return 'ERROR!'
  }

  return stack.pop();
}

console.log(calculateRPN('5 1 2 + 4 x + 3 -')) //14
console.log(calculateRPN('1 2 + 4 5 6 8 * - + +')) //-36
