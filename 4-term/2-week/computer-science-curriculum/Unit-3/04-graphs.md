# Graphs

Also a non-linear data structure, a hierarchical structure!

A graph is a collection of objects we call nodes or vertices connect to each other through a set of edges. In a tree there are rules dictating edges, in a graph we have none! In a tree, all nodes must be accessible from the root. So in short, a tree is just a type of graph.

In a graph there are no rules. It has a set of nodes and edges. So if you think about it some more, a tree is a special kind of graph!

##### If you want to get more into the math....

Graph = A graph G is an ordered pair of a set V or vertices and a set of E edges G = (V , E). V is the first object and E is the second

(V, E) is not equal to (E, V) if E is not equal to V

{V, E} is an unordered pair

Nodes can be named V1….Vn

V = {V1, V2…..Vn}

##### moving on...

There are lots of different types of graphs, but here are a few examples.

- Undirected Graph

![](http://www.xatlantis.ch/examples/graphics/graph1_example.png)


- Directed Graph

![directed graph](http://upload.wikimedia.org/wikipedia/commons/a/a0/CPT-Graphs-directed-weighted-ex2.svg)

- Directed Acyclic Graph (DAG)

![](https://upload.wikimedia.org/wikipedia/commons/4/4b/Directed_acyclic_graph.svg)

If you're interested in learning more about graphs, check out [this](https://www.youtube.com/watch?v=gXgEDyodOJU&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=38) video


### Where do we see graphs in the real world?

A social network is an undirected graph -> The Facebook graph API!

* Let's think some more about that? How do you suggest friends? Suggest friends of friends who are not connected (nodes that are not linked).

How about some more examples?

- Interlinked Web Pages - A directed graph! A webpage is a URL, if the page contains a link to another, it has

- Web Crawling - browse pages to collect + store data. Web crawling = Graph Traversal (act of visiting all nodes in a graph).  

-  Graphs are the fundamental data structure for technologies like GPS/Maps how do you pick the best route from one city to another?

Weighted vs. Unweighted Graphs
Some connections are more weighted
roads between cities (are of different lengths)
label edges with weights

Unweighted - weighted where weight is the same (all 1)

Some more examples of weighted vs unweighted and directed vs undirected graphs:

- Intercity Network - Weighted, Undirected graph
- Social Network - Unweighted, Undirected graph
- World Wide Web - Unweighted, Directed graph
- Intracity - Weighted, Directed graph

### Graph Exercises

#### Graphs in object oriented JavaScript
https://github.com/gSchool/graph-js/tree/master


#### Graphs in python
https://github.com/gSchool/graphs
