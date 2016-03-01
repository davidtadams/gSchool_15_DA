<style type="text/css">
.reveal .slides .stack > section > p {
  text-align: left;
}
code {
  color: hsl(0, 100%, 80%);
}
</style>

# Graphs

> A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

<img height="100" src="http://web.cecs.pdx.edu/~sheard/course/Cs163/Graphics/graph1.png">

---

### This ain't your ancestors' graph!

* Not related to charts, bar graphs, etc.
* Used to define nodes with connecting edges.
* Sometimes referred to as a web outside of Computer Science.
* Used to solve a huge swath of problems:
  * Accessible Data Storage (Binary Tree)
  * Trees (DOM, XML, etc.)
  * Path Finding
  * Linguistics
  * Flow Control
  * Search Engine Ranking
  * Abstract Syntax Trees (Lexing, JS, etc.)
  * Neural Network
  * Bayesian Network
  * etc.

---

## Big O

* `V` = Vertices, `E` = Edges
* Time complexity changes based on the backing storage type. We're going to assume an Adjacency List.
* Add Vertex: `O(1)`
* Add Edge: `O(1)`
* Remove Vertex: `O(E)`
* Delete Edge: `O(E)`
* Query if Nodes are adjacent: `O(V)`
* Shortest Path: `O(E+VlogV)` (Dijkstra's)
* Min Span Tree: `O(V`<sup>`2`</sup>`)` (Prim's)

---

## DRAW IT!

### Nodes and Edges
  * Values
  * Weights
  * Directed / Undirected
  * Cyclic / Acyclic

----

### Examples of Graphs
  * DOM
  * Binary Tree (Lesson after this)
  * Linear Linked List (Yesterday)
  * Finite State Machine ([regexper](http://regexper.com/))
  * Road System
  * Social Network
  * Network Topology
  * Organization Charts

---

## How many degrees?

* [Six Degrees of Kevin Bacon](https://en.wikipedia.org/wiki/Six_Degrees_of_Kevin_Bacon)
* [Erdős number](https://en.wikipedia.org/wiki/Erd%C5%91s_number)

<img height=200 src="https://i.ytimg.com/vi/YRCzEqkCoiM/maxresdefault.jpg">

My professor at Purdue was Mikhail Atallah, a 2 in Erdős. Making me a 3, and you all a 4! Bask in the glory of being a non-6'er.

---

# [Graph Exercise](https://github.com/gSchool/computer-science-exercises/blob/master/src/main/java/Graph.java)
