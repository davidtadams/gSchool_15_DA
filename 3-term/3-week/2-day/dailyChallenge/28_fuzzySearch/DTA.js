module.exports = function(word, array, doFuzzySearch, tolerance) {
  //handle empty string input
  if (word.length === 0) {
    return []
  }

  //handle case differences
  var lowerCaseWord = word.toLowerCase()
  var lowerCaseArray = array.map(function(val) {
    return val.toLowerCase()
  })

  //handle whitespace in input
  lowerCaseWord = lowerCaseWord.replace(/\s/g,'')

  if (doFuzzySearch) {
    return fuzzySearch(lowerCaseWord, lowerCaseArray, tolerance)
  } else {
    return nonFuzzySearch(lowerCaseWord, lowerCaseArray);
  }
}

function fuzzySearch(word, array, tolerance) {
  return array.filter(function(val, pos, self) {
    var unique = self.indexOf(val) === pos
    var offCharCount = 0
    for (var i = 0; i < word.length; i++) {
      if (val[i] != word[i]) {
        offCharCount += 1
      }
    }
    return offCharCount <= tolerance && unique
  })
}

function nonFuzzySearch(word, array) {
  return array.filter(function(val, pos, self) {
    return word === val && self.indexOf(val) === pos
  })
}
