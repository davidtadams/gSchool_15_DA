You work for a tech conference company. Somebody transcribes all the noteworthy quotes from all the speakers, and enters them into a system. This system outputs a JSON file that looks like this:
```
{
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
}
```
Your mission is to turn that data into an object that can be used by a word cloud. The output should look like this:
```
{
  "optimize" : { count: 1, people: ["Ila Huels"] },
  "web-enabled" : { count: 1, people: ["Ila Huels"] },
  "supply-chains" : { count: 1, people: ["Ila Huels"] },
  "brand" : { count: 2, people: ["Ila Huels", "Cristopher Feest"] },
  "sexy" : { count: 2, people: ["Ila Huels", "Cristopher Feest"] },
  "channels" : { count : 2, people : ["Ila Huels", "Cristopher Feest"] },
  "envisioneer" : { count: 1, people: ["Ila Huels"] },
  "robust" : { count: 1, people: ["Ila Huels"] },
  "e-commerce" : { count: 1, people: ["Ila Huels"] },
  "transform" : { count: 1, people: ["Ila Huels"] },
  "wireless" : { count: 1, people: ["Ila Huels"] },
  "architectures" : { count: 1, people: ["Ila Huels"] },
  "benchmark" : { count: 3, people: ["Ila Huels", "Cristopher Feest"] },
  "cross-platform" : { count: 2, people: ["Ila Huels", "Cristopher Feest"] },
  "partnerships" : { count: 2, people: ["Ila Huels", "Cristopher Feest"] },
  "24/7" : { count: 1, people: ["Cristopher Feest"] },
  "paradigms" : { count: 1, people: ["Cristopher Feest"] }
}
```
