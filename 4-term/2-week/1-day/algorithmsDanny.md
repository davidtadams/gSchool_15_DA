<style type="text/css">
.reveal .slides .stack > section > p {
  text-align: left;
}
code {
  color: hsl(0, 100%, 80%);
}
</style>

# Algorithms

> In mathematics and computer science, an algorithm is a self-contained step-by-step set of operations to be performed.
> Algorithms exist that perform calculation, data processing, and automated reasoning.

-- [Wikipedia](https://en.wikipedia.org/wiki/Algorithm)

---

## What You Should Get Out of This

* Describe what an algorithm is
* Understand the vast general use of algorithms
* Be able to talk about Big O in interviews
* Understand there are classes of Big O and identify them

---

## Description

* Elevator Pitch: A set of steps to solve a certain problem
* Generally very reusable between seemingly unrelated problem types
* Functions and procedures you have written are probably algorithms already defined in history. You just might not know the names
* A thing Computer Scientists love. `P=NP`??? `P!=NP`???

---

## Types

* Exhaustive / Brute Force
* Divide and Conquer
* Search
* Randomized
* Reduction of Complexity
* Etc.

---

## Algorithmic Complexity

----

### Quick Review of Discrete Math & Calculus

<img height=300 src="http://i.imgur.com/rBftJ4O.png">
<img height=300 src="http://i.imgur.com/8ocknro.png">

----

# Just Kidding!

# <img src="http://gifsec.com/wp-content/uploads/GIF/2014/03/Oh-You-GIF-5.gif?gs=a">

----

### Time & Space

<img src="http://i.kinja-img.com/gawker-media/image/upload/bwr62518kjnqgejq9nkv.jpg">

----

### Big O

Big O (`O()`) is a mathematical notation to describe the worst case complexity of a function.

If I'm running an algorithm over `n` items. How long will it take? How much space in memory will it consume?

**Examples:**

* `O(100)`
* `O(n+1)`
* `O(n^2+n)`
* `O(20*logn)`

Let's run some numbers.

----

### Common Big O Levels

# <img height=400 src="http://bigocheatsheet.com/img/big-o-complexity.png">

* Why don't we care about things like
  * `O(n+1)`
  * `O(n^2 + n)`?

----

### Data Structure Algorithms and Big O

* `O(1)`, `O(logn)`, `O(n)`
  * Access time for most data structures
* `O(logn)`, `O(n)`
  * Search time for most data structures
* `O(n)`
  * Space for most data structures
* `O(n logn)`, `O(n^2)`
  * Time of most sort algorithms

*[Big O Cheatsheet](http://bigocheatsheet.com/)*

----

# <img height=400 src="http://bigocheatsheet.com/img/big-o-complexity.png">

* Where does each data structure algorithm type live on this graph? [graph](https://www.desmos.com/calculator/qb1bhagbpa)
* Let's run some numbers again by assuming we are accessing, searching, or sorting

---

## Examples (Abridged) (VERY ABRIDGED!)

[Complexity Garden](https://complexityzoo.uwaterloo.ca/Complexity_Garden)

---

### Procedural Art Algorithms

----

#### Maze Generation

  * Kruskal's

  <video controls data-autoplay loop height="200px">
    <source data-src="https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6f/KruskalGeneratedMaze.webm/KruskalGeneratedMaze.webm.360p.webm" type="video/webm" />
  </video>

  * Prim's

  <video controls data-autoplay loop height="200px">
    <source data-src="https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b1/MAZE_30x20_Prim.ogv/MAZE_30x20_Prim.ogv.360p.webm" type="video/webm" />
  </video>


----

#### Perlin Noise

  Perlin noise is a type of gradient noise developed by Ken Perlin in 1983 as a result of his frustration with the "machine-like" look of computer graphics at the time.

  <img src="http://flafla2.github.io/img/2014-08-09-perlinnoise/raw2d.png" height="200px">
  <img src="http://flafla2.github.io/img/2014-08-09-perlinnoise/use2d.png" height="200px">
  <img src="http://flafla2.github.io/img/2014-08-09-perlinnoise/use3d.png" height="200px">
  <video controls data-autoplay loop height="200px">
    <source data-src="http://fat.gfycat.com/DetailedSmugEmu.webm" type="video/webm" />
  </video>

----

#### Markov Chain

  a stochastic model describing a sequence of possible events in which the probability of each event depends only on the state attained in the previous event.

  [Garkov (Garfield generated with Markov Chains)](http://joshmillard.com/garkov/)

  <img src="http://i.imgur.com/gbhsyWS.png">

----

#### World Generation

  <img src="http://www-cs-students.stanford.edu/~amitp/game-programming/polygon-map-generation/overview.png">

----

#### Ray Tracing

  In computer graphics, ray tracing is a technique for generating an image by tracing the path of light through pixels in an image plane and simulating the effects of its encounters with virtual objects.

  <iframe width="854" height="480" src="https://www.youtube.com/embed/vNSdZBbuFJI?loop=1" frameborder="0" data-autoplay loop></iframe>

---

### Geometric

----

#### Splines

  * Least-Squares
  * Fourier Series

  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/B%C3%A9zier_2_big.gif">
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/B%C3%A9zier_3_big.gif">

----

### Convex-Hull
  * Gift Wrapping
  * Graham-Scan
  * Chan's

  <iframe width="640" height="400" src="https://www.youtube.com/embed/BTgjXwhoMuI?loop=1" frameborder="0" data-autoplay></iframe>

----

### Collision Algorithms

  * Axis-Aligned Bounding-Box (AABB)
  * Gilbert–Johnson–Keerthi (GJK) https://github.com/vrld/HC/issues/9

  [reddit gamephysics](https://www.reddit.com/r/gamephysics)

  <video controls data-autoplay loop height="300px">
    <source data-src="https://giant.gfycat.com/ShallowPleasingIridescentshark.webm" type="video/webm">
  </video>

----

### Partitioning

* Fortune's
* Sweep Line

<iframe width="854" height="480" src="https://www.youtube.com/embed/k2P9yWSMaXE?loop=1" frameborder="0" data-autoplay></iframe>

---

### Fast Fourier Transform (FFT)

The Fourier transform decomposes a function of time (a signal) into the frequencies that make it up, similarly to how a musical chord can be expressed as the amplitude (or loudness) of its constituent notes.

Used in JPEG & MP3 encoding

<img src="http://www-rohan.sdsu.edu/~jiracek/DAGSAW/images/fig3-4.gif">

---

### Search Algorithms

----

#### Binary Search

Finds an element in an array by dividing it in half until there is a single element

<img src="http://panthema.net/2013/0504-STX-B+Tree-Binary-vs-Linear-Search/thumb.gif" width="600">

----

#### Hill Climbing

starts with an arbitrary solution to a problem, then attempts to find a better solution by incrementally changing a single element of the solution. If the change produces a better solution, an incremental change is made to the new solution, repeating until no further improvements can be found.

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Hill_Climbing_with_Simulated_Annealing.gif">

----

#### Genetic

a search heuristic that mimics the process of natural selection.

<iframe width="640" height="480" src="https://www.youtube.com/embed/pgaEE27nsQw?start=57" frameborder="0" data-autoplay></iframe>

---

### Sorting

<video controls data-autoplay loop height="500px">
  <source data-src="http://img-9gag-fun.9cache.com/photo/aPyoG4P_460sv_v1.mp4" type="video/mp4">
</video>

---

### Graph Algorithms

----

#### Min Spanning Tree

a spanning tree of a connected, undirected graph. It connects all the vertices together with the minimal total weighting for its edges.

<iframe width="854" height="480" src="https://www.youtube.com/embed/Kr-8MkDvOio?start=12" frameborder="0" data-autoplay></iframe>

----

#### Optimal Route

* Djkistra
* A*
* Floyd-Warshall

<img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif" height="300">
<img src="https://upload.wikimedia.org/wikipedia/commons/2/23/Dijkstras_progress_animation.gif" height="300">

----

#### Traveling Salesman

Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city exactly once and returns to the origin city? It is an NP-hard problem in combinatorial optimization, important in operations research and theoretical computer science.


<img src="http://blogs.mathworks.com/images/pick/will_campbell/potw_salesman/traveling_salesman.gif" height="300">

---

### Mathematics

----

### Prime Algorithms

* Trial Division
  * Brute Force

* Sieve of Eratosthenes

<img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif">

----

#### Other

* Derivative Approximations
  * Newton Raphson
  * Secant
* Linear System Approximations
  * Gaussian
  * Seidel
* Polynomial Approximations
  * Taylor Series
  * Lagrange
* Differential Solutions
  * Euler's Method
  * Runge Kuttas

---

# [Big O Exercise](https://github.com/gSchool/computer-science-curriculum/blob/master/Unit-1/02-big-o-notation.md)
