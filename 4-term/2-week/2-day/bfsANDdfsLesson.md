# Breadth First Search

Algorithm for searching graph-like data structures, one level at a time.

----

## Step by Step

- Start a queue
- Check current node - if false, mark as visited, continue
- Add all unvisited, connected nodes to queue
- Check one by one like the previous node and repeat

----

![bfs](https://camo.githubusercontent.com/f945bc2e7222c500f0aa2f8b5654e4573e992d6b/687474703a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f352f35642f427265616474682d46697273742d5365617263682d416c676f726974686d2e676966)

----

## JS Example

```js
function bfs(value, tree) {

  queue = [];

  queue.unshift(tree);

  while (queue.length > 0) {
    curNode = queue.pop();
    if (curNode.value === value) {
      return curNode;
    }

    var len = curNode.children.length;

    for (var i = 0; i < len; i++) {
      queue.unshift(curNode.children[i]);
    }
  }

  return null;
}
```

----

## Complexity

O(n^2)

----

## When to Use

- Solution is not far from the root of the tree
- Tree is very deep and solutions are rare

---

# Depth First Search

Algorithm for searching graph-like data structures... aggresively.

----

## Step by Step

- Check current node - if found, return node
- For that node find the length of children
- For that length, recursively repeat search

----

![bfs](https://camo.githubusercontent.com/29107129919ce67ed4fc9408c3cb03c5da84211f/687474703a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37662f44657074682d46697273742d5365617263682e676966)

----

## JS Examples

----

### Example One
```js
function dfs(value, node) {

  if (node.value === value) {
    return node;
  }

  var len = node.children.length;

  for (var i = 0; i < len; i++) {
    var foundNode = dfs(value, node.children[i]);
    if (foundNode) {
      return foundNode;
    }
  }
  return null;
}
```

----

### Example Two
```js
function dfs(value, node) {

  stack = [];

  stack.push(node);

  while (stack.length != 0) {
    var curNode = stack.peek()
    if (curNode.value == value) {
      return curNode;
    }
    curNode.visited = true
    stack.push(getFirstUnvistedNode(curNode));
  }

}
```

----

## Complexity

O(n^2)

----


- Much lower memory requirements (compared to BFS)
- Common, usually far from root
