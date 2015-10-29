module.exports = {
  /*
    Recall that a recursive function is a function that calls itself (Eloquent JS).
    More formally, a recursive algorithm is an algorithm for which the solution to
    the problem is solved by solving progressive sub-problems, until a know, or
    "base" case is reached.

    The classical example of a recursive algorithm is computing the factorial. Recall
    from math class that the factorial of an Integer, n, is the product of all positive,
    Integer values less than or equal to n. For example,

      6! = 6*5*4*3*2*1

    Alternatively, we can view this computation as:

      6! = 6*5!

    recursively applying this, we would then have

      5! = 5*4!

    and so on, until we hit:

      1! = 1

    at which point the final value could be computed back up the chain (this is similar
    to our substitution principle). By construction, 0! = 1 (hint: could this be the
    base case?).

    Given this information about recursion, write a JavaScript function named `factorial`
    that takes an Integer argument (you do not need to check the argument) and
    recursively computes the factorial.
  */

  factorial: function(n) {

    

  }
}
