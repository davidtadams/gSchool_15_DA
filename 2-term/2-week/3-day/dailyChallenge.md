# Garland Word

A garland word is one that starts and ends with the same N letters in the same order, for some N greater than 0, but less than the length of the word. I'll call the maximum N for which this works the garland word's degree. For instance, "onion" is a garland word of degree 2, because its first 2 letters "on" are the same as its last 2 letters. The name "garland word" comes from the fact that you can make chains of the word in this manner:

`onionionionionionionionionionion...`

Write a function `garland` that, given a lowercase word, returns the degree of the word if it's a garland word, and 0 otherwise.

## Samples

```js
garland('programmer') //0
garland('ceramic') //1
garland('onion') //2
garland('alfalfa') //4
garland('hotshots') //4
garland('abracadabra') //4
garland('couscous') //4
```
