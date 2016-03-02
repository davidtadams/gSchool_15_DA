# Tree

>A collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the "children"), with the constraints that no reference is duplicated (a child can only have 1 parent), and none points to the root.

---

# Recursive Definition

* One node is designated as the root
* The root node can have many children (nodes)
* Each child node is the root of a subtree

---

## What type of graph does this describe?

----

## Directed Graph

With constraints:

* No two references point to the same node
* Each node has at most a single parent (in fact exactly one parent, except for the root)

---

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/440px-Binary_tree.svg.png" style="background:white;">

----

## Terminology

* Root – The top node in a tree.
* Child – A node directly connected to another node when moving away from the Root.
* Parent – The converse notion of a child.
* Siblings – Nodes with the same parent.

----

## Terminology

* Descendant – A node reachable by repeated proceeding from parent to child.
* Ancestor – A node reachable by repeated proceeding from child to parent.
* Leaf – A node with no children.
* Internal node – A node with at least one child
* External node – A node with no children.

----

## Terminology

* Degree – Number of sub trees of a node.
* Edge – Connection between one node to another.
* Path – A sequence of nodes and edges connecting a node with a descendant.

----

## Terminology

* Level – The level of a node is defined by 1 + (the number of connections between the node and the root).
* Height of node – The height of a node is the number of edges on the longest downward path between that node and a leaf.
* Height of tree – The height of a tree is the height of its root node.
* Depth – The depth of a node is the number of edges from the node to the tree's root node.

---

## Advantages:

* Reflect structural relationships in the data
* Are used to represent hierarchies
* Provide efficient insertion and searching
* Are very flexible, allowing to move subtrees around with minimum effort

---

# Binary Tree

* A tree in which each node has at most 2 children

![binary](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/pix/binaryTree.bmp)

---

## Binary Search Tree (BST)

![binary](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/pix/pix03.bmp)

Provides an efficient way of sorting, searching and retrieving.

---

A BST is a binary tree where nodes are ordered in the following way:

* Each node contains one key (also known as data)
* The keys in the left subtree are less then the key in its parent node, in short L < P;
* The keys in the right subtree are greater the key in its parent node, in short P < R;
* Duplicate keys are not allowed.

---

## BST Insertion

We start at the root and recursively go down the tree searching for a location in a BST to insert a new node. If the element to be inserted is already in the tree, we are done (we do not insert duplicates).

![insert](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/pix/insert.bmp)

---

## Insertion Complexity

* O(log n)

---

## BST Search

* Searching in a BST always starts at the root.
* We compare a data stored at the root with the key we are searching for (let us call it as toSearch).
* If the node does not contain the key we proceed either to the left or right child depending upon comparison. If the result of comparison is negative we go to the left child, otherwise - to the right child. The recursive structure of a BST yields a recursive algorithm.

---

## Search Complexity

Since a binary search tree with n nodes has a minimum of O(log n) levels, it takes at least O(log n) comparisons to find a particular node. Unfortunately, a binary search tree can degenerate to a linked list, reducing the search time to O(n).

---

## BST Delete

* If the node to be deleted is a leaf node, just delete it
* If a node to be deleted has only one child the procedure of deletion is identical to deleting a node from a linked list - we just bypass that node being deleted

![delete](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/pix/del01.bmp)

---

## BST Delete

* If a node to be deleted has 2 children, we split a tree into two subtrees
* Then replace the node being deleted with the largest node in the left subtree and then delete that largest node.
* By symmetry, the node being deleted can be swapped with the smallest node in the right subtree.

![tree](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/pix/del02.bmp)

---

* Delete	O(log n)

---

Draw a binary search tree by inserting the following numbers from left to right

11, 6, 8, 19, 4, 10, 5, 17, 43, 49, 31

---

![tree](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/pix/insertEx.bmp)

---

What does the tree look like after removing 11?

---

2 Answers:

![answer](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/pix/deletionEx.bmp)

---

# Review

---

What is the recursive definition of a tree?

---

## Is this a tree?

![wat](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Directed_graph_with_branching_SVG.svg/153px-Directed_graph_with_branching_SVG.svg.png)

---

Draw a binary search tree by inserting the following numbers from left to right

22, 3, 44, 5, 16, 8, 99, 24, 33

---

fin
