# Searching Algorithms

## Linear Search

Linear search or sequential search is a method for finding a particular value in a list, that consists of checking every one of its elements, one at a time and in sequence, until the desired one is found. Linear search is the simplest search algorithm; it is a special case of brute-force search.

Linear search runs on average at O(n)

## Binary Search

The key here is that we have a array of n element

Binary search or half-interval search algorithm finds the position of a specified input value (the search "key") within an array sorted by key value. For binary search, the array should be arranged in ascending or descending order. In each step, the algorithm compares the search key value with the key value of the middle element of the array. If the keys match, then a matching element has been found and its index, or position, is returned. Otherwise, if the search key is less than the middle element's key, then the algorithm repeats its action on the sub-array to the left of the middle element or, if the search key is greater, on the sub-array to the right. If the remaining array to be searched is empty, then the key cannot be found in the array and a special "not found" indication is returned.

Binary search runs on average at O(log n) -> THIS IS FAST!

## Resources:

[https://github.com/gSchool/searching-algorithms](https://github.com/gSchool/searching-algorithms)

### Other links

[Visualization](https://www.cs.usfca.edu/~galles/visualization/DFS.html)
