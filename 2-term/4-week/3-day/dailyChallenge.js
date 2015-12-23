function wordCloudify(quoteData) {
  var optimizedData = {}

  for (var person in quoteData) {
    quoteData[person].forEach(function(phrase) {
      phrase.split(' ').forEach(function(word) {
        lowerCaseWord = word.toLowerCase()

        if (!optimizedData[lowerCaseWord]) {
          optimizedData[lowerCaseWord] = {
            count: 0,
            people: []
          }
        }

        if (optimizedData[lowerCaseWord].people.indexOf(person) < 0) {
          optimizedData[lowerCaseWord].people.push(person)
        }

        optimizedData[lowerCaseWord].count += 1
      })
    })
  }

  return optimizedData
}

var data = {
  "Ila Huels": [
    "OPTIMIZE WEB-ENABLED SUPPLY-CHAINS",
    "brand sexy channels",
    "ENVISIONEER ROBUST E-COMMERCE",
    "TRANSFORM WIRELESS ARCHITECTURES",
    "BENCHMARK CROSS-PLATFORM PARTNERSHIPS"
  ],
  "Cristopher Feest": [
    "BENCHMARK CROSS-PLATFORM PARTNERSHIPS",
    "brand sexy channels",
    "BENCHMARK 24/7 PARADIGMS"
  ]
};

console.log(wordCloudify(data));
