![gif](http://media.giphy.com/media/quEsMOrr3hmQ8/giphy.gif)

# Matrix

In mathematics, a matrix (plural matrices) is a rectangular array of numbers, symbols, or expressions, arranged in rows and columns that is interpreted and manipulated in certain prescribed ways. One such way is to state the dimensions of the matrix. For example, the dimensions of the matrix below are 2 × 3 (read "two by three"), because there are two rows and three columns.

```
var matrix = [[1, 64, 23],
              [22, 50, 2]];
```

## Challenge

First, write a function that returns the dimensions of a matrix. For example, with the matrix above, it should return a string "2x3".

Then, write a function that rotates the matrix 90 degrees to the right. In the example above, it changes the dimensions from "2x3" to "3x2". The resulting matrix from the example above would be:

```
[[22, 1],
 [50, 64],
 [2, 23]]
```

### Matrices

```
var matrix1 = [[44, 23],
               [21, 10],
               [9, 28],
               [85, 16],
               [33, 18]];

var dimensions1 = "5x2";

var result1 = [[33, 85,9, 21, 44],
               [18, 16, 28, 10, 23]];

var newDimensions1 = "2x5";

var matrix2 = [[29,62,8], [12,60, 31], [99,79,12]];
var dimensions2 = "3x3";
var result2 = [[99, 12, 29], [79, 60, 62], [12, 31, 8]];
var newDimensions2 = "3x3";
```
