package main;

public class BinarySearchTree {

  private BSTNode root;

  BinarySearchTree() {}

  BinarySearchTree(int rootValue) {
    root = new BSTNode(rootValue);
  }

  public void insert(int value) {
    insert(root, value);
  }

  private void insert(BSTNode node, int value) {
    //TODO
  }

  public boolean search(int value) {
    return search(root, value);
  }

  private boolean search(BSTNode node, int value) {
    //TODO
    return false;
  }

  public void delete(int value)
  {
     root = delete(root, value);
  }

  private BSTNode delete(BSTNode node, int value)
  {
    //TODO
     return node;
  }

  public BSTNode getRoot() {
    return root;
  }
}
