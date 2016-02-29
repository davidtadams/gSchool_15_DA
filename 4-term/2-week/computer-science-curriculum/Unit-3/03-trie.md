### Trie

Trees can also have nodes with text in them. In computer science, a trie, also called digital tree and sometimes radix tree or prefix tree (as they can be searched by prefixes), is an ordered tree data structure that is used to store strings. Unlike a binary search tree, no node in the tree stores the key associated with that node; instead, its position in the tree defines the key with which it is associated. All the descendants of a node have a common prefix of the string associated with that node, and the root is associated with the empty string

![Trie](http://www.cs.duke.edu/courses/fall12/cps100/Recitations/images/trie.jpg)

Tries are exceptionally powerful and used in dictionary lookups, such as one found on a mobile telephone or for autocompletion and spell-checking.

You should trie to implement one [here](https://github.com/gSchool/trie-js)!

### Other types of trees

####  AVL Tree

AVL (or height-balanced) binary search tree is any node-based binary search tree that automatically keeps its height (maximal number of levels below the root) small in the face of arbitrary item insertions and deletions

#### B Tree

B-tree is a tree data structure that keeps data sorted and allows searches, sequential access, insertions, and deletions in logarithmic time. Unlike a binary tree, a node in the B-tree can have much more than two children (Comer 1979, p. 123). Unlike self-balancing binary search trees, the B-tree is optimized for systems that read and write large blocks of data. It is commonly used in databases and filesystems to make lookup of data faster.

## Resources + Exercises

[https://github.com/gSchool/binary-tree-js/tree/master](https://github.com/gSchool/binary-tree-js/tree/master)

[https://github.com/gSchool/BinarySearchTreeRuby](https://github.com/gSchool/BinarySearchTreeRuby)

[http://visualgo.net/bst.html](http://visualgo.net/bst.html)
