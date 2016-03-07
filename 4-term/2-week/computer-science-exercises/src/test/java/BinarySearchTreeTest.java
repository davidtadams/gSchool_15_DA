package main;

import org.junit.Before;
import org.junit.Test;
import org.junit.Assert;

public class BinarySearchTreeTest {
  //
  // @Test
  // public void CanInsert() {
  //   Integer[] a = {1,5,2,7,4,9,6,8,3,12,10,11,15,13,14,99,27,18};
  //   BinarySearchTree bst = new BinarySearchTree();
  //   for(Integer n : a) bst.insert(n);
  //
  //   Assert.assertEquals(1, bst.getRoot().value);
  //
  //   Assert.assertEquals(5, bst.getRoot().right.value);
  //   Assert.assertEquals(2, bst.getRoot().right.left.value);
  //   Assert.assertEquals(4, bst.getRoot().right.left.right.value);
  //   Assert.assertEquals(3, bst.getRoot().right.left.right.left.value);
  //
  //   Assert.assertEquals(7, bst.getRoot().right.right.value);
  //   Assert.assertEquals(6, bst.getRoot().right.right.left.value);
  //
  //   Assert.assertEquals(9, bst.getRoot().right.right.right.value);
  //   Assert.assertEquals(8, bst.getRoot().right.right.right.left.value);
  //
  //   Assert.assertEquals(12, bst.getRoot().right.right.right.right.value);
  //   Assert.assertEquals(10, bst.getRoot().right.right.right.right.left.value);
  //   Assert.assertEquals(11, bst.getRoot().right.right.right.right.left.right.value);
  //
  //   Assert.assertEquals(15, bst.getRoot().right.right.right.right.right.value);
  //   Assert.assertEquals(13, bst.getRoot().right.right.right.right.right.left.value);
  //   Assert.assertEquals(14, bst.getRoot().right.right.right.right.right.left.right.value);
  //
  //   Assert.assertEquals(99, bst.getRoot().right.right.right.right.right.right.value);
  //   Assert.assertEquals(27, bst.getRoot().right.right.right.right.right.right.left.value);
  //   Assert.assertEquals(18, bst.getRoot().right.right.right.right.right.right.left.left.value);
  //
  // }
  //
  // @Test
  // public void CanSearch() {
  //   Integer[] a = {1,5,2,7,4,9,6,8,3,12,10,11,15,13,14,99,27,18};
  //   BinarySearchTree bst = new BinarySearchTree();
  //   for(Integer n : a) bst.insert(n);
  //
  //   Assert.assertEquals(true, bst.search(1));
  //   Assert.assertEquals(true, bst.search(5));
  //   Assert.assertEquals(true, bst.search(2));
  //   Assert.assertEquals(true, bst.search(7));
  //   Assert.assertEquals(true, bst.search(4));
  //   Assert.assertEquals(true, bst.search(9));
  //   Assert.assertEquals(true, bst.search(6));
  //   Assert.assertEquals(true, bst.search(8));
  //   Assert.assertEquals(true, bst.search(3));
  //   Assert.assertEquals(true, bst.search(12));
  //   Assert.assertEquals(true, bst.search(10));
  //   Assert.assertEquals(true, bst.search(11));
  //   Assert.assertEquals(true, bst.search(15));
  //   Assert.assertEquals(true, bst.search(13));
  //   Assert.assertEquals(true, bst.search(14));
  //   Assert.assertEquals(true, bst.search(99));
  //   Assert.assertEquals(true, bst.search(27));
  //   Assert.assertEquals(true, bst.search(18));
  //
  //   Assert.assertEquals(false, bst.search(100));
  //   Assert.assertEquals(false, bst.search(17));
  //   Assert.assertEquals(false, bst.search(26));
  // }
  //
  // @Test
  // public void CanDeleteLeafNodes() {
  //   Integer[] a = {1,5,2,7,4,9,6,8,3,12,10,11,15,13,14,99,27,18};
  //   BinarySearchTree bst = new BinarySearchTree();
  //   for(Integer n : a) bst.insert(n);
  //
  //   Assert.assertEquals(3, bst.getRoot().right.left.right.left.value);
  //   bst.delete(3);
  //   Assert.assertEquals(null, bst.getRoot().right.left.right.left);
  //
  //   Assert.assertEquals(6, bst.getRoot().right.right.left.value);
  //   bst.delete(6);
  //   Assert.assertEquals(null, bst.getRoot().right.right.left);
  //
  //   Assert.assertEquals(8, bst.getRoot().right.right.right.left.value);
  //   bst.delete(8);
  //   Assert.assertEquals(null, bst.getRoot().right.right.right.left);
  //
  //   Assert.assertEquals(11, bst.getRoot().right.right.right.right.left.right.value);
  //   bst.delete(11);
  //   Assert.assertEquals(null, bst.getRoot().right.right.right.right.left.right);
  //
  //   Assert.assertEquals(14, bst.getRoot().right.right.right.right.right.left.right.value);
  //   bst.delete(14);
  //   Assert.assertEquals(null, bst.getRoot().right.right.right.right.right.left.right);
  //
  //   Assert.assertEquals(18, bst.getRoot().right.right.right.right.right.right.left.left.value);
  //   bst.delete(18);
  //   Assert.assertEquals(null, bst.getRoot().right.right.right.right.right.right.left.left);
  // }
  //
  // @Test
  // public void CanDeleteNodesWithSingleChild() {
  //   Integer[] a = {1,5,2,7,4,9,6,8,3,12,10,11,15,13,14,99,27,18};
  //   BinarySearchTree bst = new BinarySearchTree();
  //   for(Integer n : a) bst.insert(n);
  //
  //   Assert.assertEquals(4, bst.getRoot().right.left.right.value);
  //   bst.delete(4);
  //   Assert.assertEquals(3, bst.getRoot().right.left.right.value);
  //
  //   Assert.assertEquals(2, bst.getRoot().right.left.value);
  //   bst.delete(2);
  //   Assert.assertEquals(3, bst.getRoot().right.left.value);
  //
  //   Assert.assertEquals(10, bst.getRoot().right.right.right.right.left.value);
  //   bst.delete(10);
  //   Assert.assertEquals(11, bst.getRoot().right.right.right.right.left.value);
  //
  //   Assert.assertEquals(13, bst.getRoot().right.right.right.right.right.left.value);
  //   bst.delete(13);
  //   Assert.assertEquals(14, bst.getRoot().right.right.right.right.right.left.value);
  //
  //   Assert.assertEquals(27, bst.getRoot().right.right.right.right.right.right.left.value);
  //   bst.delete(27);
  //   Assert.assertEquals(18, bst.getRoot().right.right.right.right.right.right.left.value);
  // }
  //
  // @Test
  // public void CanDeleteNodesWithTwoChildren() {
  //   Integer[] a = {1,5,2,7,4,9,6,8,3,12,10,11,15,13,14,99,27,18};
  //   BinarySearchTree bst = new BinarySearchTree();
  //   for(Integer n : a) bst.insert(n);
  //
  //   Assert.assertEquals(true, bst.search(5));
  //   bst.delete(5);
  //   Assert.assertEquals(false, bst.search(5));
  //
  //   Assert.assertEquals(true, bst.search(2));
  //   Assert.assertEquals(true, bst.search(4));
  //   Assert.assertEquals(true, bst.search(7));
  //   Assert.assertEquals(true, bst.search(6));
  //   Assert.assertEquals(true, bst.search(9));
  //
  //   Assert.assertEquals(true, bst.search(7));
  //   bst.delete(7);
  //   Assert.assertEquals(false, bst.search(7));
  //
  //   Assert.assertEquals(true, bst.search(6));
  //   Assert.assertEquals(true, bst.search(9));
  //   Assert.assertEquals(true, bst.search(8));
  //   Assert.assertEquals(true, bst.search(12));
  //
  //   Assert.assertEquals(true, bst.search(9));
  //   bst.delete(9);
  //   Assert.assertEquals(false, bst.search(9));
  //
  //   Assert.assertEquals(true, bst.search(8));
  //   Assert.assertEquals(true, bst.search(12));
  //   Assert.assertEquals(true, bst.search(10));
  //   Assert.assertEquals(true, bst.search(15));
  //
  //   Assert.assertEquals(true, bst.search(12));
  //   bst.delete(12);
  //   Assert.assertEquals(false, bst.search(12));
  //
  //   Assert.assertEquals(true, bst.search(10));
  //   Assert.assertEquals(true, bst.search(15));
  //   Assert.assertEquals(true, bst.search(11));
  //   Assert.assertEquals(true, bst.search(13));
  //   Assert.assertEquals(true, bst.search(99));
  //
  //   Assert.assertEquals(true, bst.search(15));
  //   bst.delete(15);
  //   Assert.assertEquals(false, bst.search(15));
  //
  //   Assert.assertEquals(true, bst.search(13));
  //   Assert.assertEquals(true, bst.search(99));
  //   Assert.assertEquals(true, bst.search(14));
  //   Assert.assertEquals(true, bst.search(27));
  // }

}
