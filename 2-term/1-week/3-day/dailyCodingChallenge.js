/* Solution for creating a palindrome test */
function palindrome(phrase) {
  phrase = sanitize(phrase);
  if (phrase[0] != phrase[phrase.length - 1]) {
    return false;
  }
  return phrase === reverse(phrase);
}

function reverse(string) {
  //other way to reverse - actually more efficient
  // var revString = '';
  // for (var i = string.length - 1; i >=0; i--) {
  //   revString += string[i];
  // }
  // return revString;
  return string.split('').reverse().join('');
}

function sanitize(string) {
  return string.toLowerCase().replace(/\s/g, '');
}

console.log('Testing for palindrome function');
console.log(palindrome("poop"));
console.log(palindrome("A but tuba"));
console.log(palindrome("Alula"));
console.log(palindrome("apple"));
console.log(palindrome("This is a sentence"));

/* Solution for creating an anagram test */
function anagram(word1, word2) {
  if (word1.length != word2.length) {
    return false;
  }
  word1 = sanitize(word1);
  word2 = sanitize(word2);
  if (sortWord(word1) === sortWord(word2)) {
    return true;
  }
  return false;
}

function sortWord(word) {
  return word.split("").sort().join("");
}

/* Testing for anagram function */
console.log('\nTesting for anagram function');
console.log(anagram("examples", "pameesxl"));
console.log(anagram("examples", 'lesexamp'));
console.log(anagram("examples", 'leseasdmp'));
console.log(anagram("apple", 'a'));
console.log(anagram("apple", 'eLppa'));
console.log(anagram("apple", 'Ppale'));
