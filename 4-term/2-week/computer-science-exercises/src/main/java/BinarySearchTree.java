package main;

public class BinarySearchTree {

  private Node root;

  BinarySearchTree() {}

  BinarySearchTree(int rootValue) {
    root = new Node(rootValue);
  }

  public void insert(int value) {
    insert(root, value);
  }

  private void insert(Node node, int value) {
    //TODO
  }

  public boolean search(int value) {
    return search(root, value);
  }

  private boolean search(Node node, int value) {
    //TODO
    return false;
  }

  public void delete(int value)
  {
     root = delete(root, value);
  }

  private Node delete(Node node, int value)
  {
    //TODO
    
     return node;
  }

  public Node getRoot() {
    return root;
  }

  public String traverse(Node node)
  {
    if (node != null)
    {
       String tree = node + " l-" + node.left + " r-" + node.right + "--";
       tree += traverse(node.left);
       tree += traverse(node.right);
       return tree;
    } else {
      return "";
    }
  }

  private class Node
  {
     private int value;
     private Node left;
     private Node right;

     public Node(int value)
     {
        this(value, null, null);
     }

     public Node(int value, Node left, Node right)
     {
        this.value = value;
        this.left = left;
        this.right = right;
     }

     public String toString()
     {
        return Integer.toString(value);
     }
  }
}
