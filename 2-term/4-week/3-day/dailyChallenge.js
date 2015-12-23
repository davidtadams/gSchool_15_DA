function wordCloudify(quoteData) {
  var optimizedData = {}

  for (var person in quoteData) {
    quoteData[person].join(' ').toLowerCase().split(' ').forEach(function(word) {
        if (!optimizedData[word]) {
          optimizedData[word] = {
            count: 0,
            people: []
          }
        }

        if (optimizedData[word].people.indexOf(person) < 0) {
          optimizedData[word].people.push(person)
        }

        optimizedData[word].count += 1
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
