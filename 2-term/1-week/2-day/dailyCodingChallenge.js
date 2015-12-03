/* Challenge #1 */
function countLetters(str) {
  var results = {};
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 &&  str.charCodeAt(i) <= 122) {
      if (results[str[i]] > 0) {
        results[str[i]] += 1;
      }
      else {
        results[str[i]] = 1;
      }
    }
  }

  // for (var i in results) {
  //   process.stdout.write(i + ':' + results[i] + ' ');
  // }

  // return JSON.stringify(results);

  /* another way to print it out */
  console.log('\n' + JSON.stringify(results));
}

console.log('Testing the countLetters function:');
console.log('Answer for string "Hello World"');
countLetters("Hello World");
console.log('\n');
console.log('Answer for sring quick brown fox');
countLetters("The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.");
console.log('\n');

/* Challenge #2 */
function rampNumber(num) {
  numStr = num.toString();
  for (var i = 0; i < numStr; i++) {
    if (i != 0) {
      if (numStr[i - 1] > numStr[i]) {
        return false;
      }
    }
  }
  return true;
}

console.log('Testing the function rampNumber:');
console.log(rampNumber(1234));
console.log(rampNumber(1124));
console.log(rampNumber(1032));
console.log(rampNumber(111111101));
console.log(rampNumber(13579));
console.log(rampNumber(135792));


/* ----------------------------------------------------------------------------
                                  SOLUTIONS
------------------------------------------------------------------------------*/
/* Danny's solution */
// function countLetters (input) {
// 	return printPaths(sanitize(input).split('').reduce(incrementPath, {}));
// }
//
// function incrementPath (object, path) {
// 	if (!object[path]) {
// 		object[path] = 0;
// 	}
// 	object[path] += 1;
// 	return object;
// }
//
// function sanitize (input) {
// 	return input.toLowerCase().replace(/[^a-z]/ig, '');
// }
//
// function formatLetter (letter, count) {
// 	return letter + ':' + count;
// }
//
// function printPaths (object) {
// 	return Object.keys(object).map(function (key) {
// 		return formatLetter(key, object[key]);
// 	}).join(' ');
// }
//
// console.log(countLetters("Hello World"));
//
// /* CJ's solution */
// function countLetters(input) {
//     // a place to store the counters
//     var counters = {};
//
//     // convert input to lowercase
//     input = input.toLowerCase();
//
//     // iterate over the chars of the string
//     for (var i = 0; i < input.length; i++) {
//         // check to see if a letter
//         if(input[i] <= 'z' && input[i] >= 'a') {
//             // convert the char to lowercase - str.toLowerCase();
//             if(counters.hasOwnProperty(input[i])) {
//                 // increment counter for given char obj[char]++
//                 counters[input[i]]++;
//             }
//             else {
//                 counters[input[i]] = 1;
//             }
//         }
//     }
//
//     // print out the char counts
//     return JSON.stringify(counters);
// }
//
// var result = countLetters('The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.');
// console.log(result);
