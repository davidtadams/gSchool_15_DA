<style type="text/css">
.reveal .slides .stack > section > p {
  text-align: left;
}
code {
  color: hsl(0, 100%, 80%);
}
</style>

# Hash Tables

> a data structure used to implement an associative array, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

<img height="100" src="https://mcdonalds.com.au/sites/mcdonalds.com.au/files/hero_pdt_hash_brown.png">

---

## Hash, What is it good for? Absolutely something.

* Hash Table, Hash Set, Hash Map, Dictionary, etc.
* Similar to an Object in JavaScript. `{}`
* Solves the infinite array problem (sparse arrays)
* Offers quick indexing
* Can be very performant on huge data structures if configured correctly
* Used by many databases to improve lookup time (index)

---

## Big O

* Access: `O(*)` (depends on implementation of collisions)
* Search: `O(n)`
* Insert: `O(n)`
* Delete: `O(n)`

The real kicker is average time for these is `1`, constant!

---

# DRAW IT!

Be sure to include:

* Theoretical Infinite Array
* Hash Function / Hash Table
* Collision Resolution

---

# [Hash Exercise](https://github.com/gSchool/computer-science-exercises/blob/master/src/main/java/HashTable.java)
