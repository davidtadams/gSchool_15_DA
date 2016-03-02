package main;

import org.junit.Before;
import org.junit.Test;
import org.junit.Assert;

public class BinarySearchTreeTest {

  // @Test
  // public void CanInsert() {
  //   Integer[] a = {1,5,2,7,4,9,6,8,3,12,10,11,15,13,14,99,27,18};
  //   BinarySearchTree bst = new BinarySearchTree();
  //   for(Integer n : a) bst.insert(n);
  //
  //   Assert.assertEquals("1 l-null r-5--5 l-2 r-7--2 l-null r-4--4 l-3 r-null--3 l-null r-null--7 l-6 r-9--6 l-null r-null--9 l-8 r-12--8 l-null r-null--12 l-10 r-15--10 l-null r-11--11 l-null r-null--15 l-13 r-99--13 l-null r-14--14 l-null r-null--99 l-27 r-null--27 l-18 r-null--18 l-null r-null--", bst.traverse(bst.getRoot()));
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
  //   Assert.assertEquals(true, bst.search(3));
  //   bst.delete(3);
  //   Assert.assertEquals(false, bst.search(3));
  //
  //   Assert.assertEquals("1 l-null r-5--5 l-2 r-7--2 l-null r-4--4 l-null r-null--7 l-6 r-9--6 l-null r-null--9 l-8 r-12--8 l-null r-null--12 l-10 r-15--10 l-null r-11--11 l-null r-null--15 l-13 r-99--13 l-null r-14--14 l-null r-null--99 l-27 r-null--27 l-18 r-null--18 l-null r-null--", bst.traverse(bst.getRoot()));
  //
  //   Assert.assertEquals(true, bst.search(6));
  //   bst.delete(6);
  //   Assert.assertEquals(false, bst.search(6));
  //
  //   Assert.assertEquals("1 l-null r-5--5 l-2 r-7--2 l-null r-4--4 l-null r-null--7 l-null r-9--9 l-8 r-12--8 l-null r-null--12 l-10 r-15--10 l-null r-11--11 l-null r-null--15 l-13 r-99--13 l-null r-14--14 l-null r-null--99 l-27 r-null--27 l-18 r-null--18 l-null r-null--", bst.traverse(bst.getRoot()));
  //
  //   Assert.assertEquals(true, bst.search(8));
  //   bst.delete(8);
  //   Assert.assertEquals(false, bst.search(8));
  //
  //   Assert.assertEquals("1 l-null r-5--5 l-2 r-7--2 l-null r-4--4 l-null r-null--7 l-null r-9--9 l-null r-12--12 l-10 r-15--10 l-null r-11--11 l-null r-null--15 l-13 r-99--13 l-null r-14--14 l-null r-null--99 l-27 r-null--27 l-18 r-null--18 l-null r-null--", bst.traverse(bst.getRoot()));
  //
  //   Assert.assertEquals(true, bst.search(11));
  //   bst.delete(11);
  //   Assert.assertEquals(false, bst.search(11));
  //
  //   Assert.assertEquals("1 l-null r-5--5 l-2 r-7--2 l-null r-4--4 l-null r-null--7 l-null r-9--9 l-null r-12--12 l-10 r-15--10 l-null r-null--15 l-13 r-99--13 l-null r-14--14 l-null r-null--99 l-27 r-null--27 l-18 r-null--18 l-null r-null--", bst.traverse(bst.getRoot()));
  //
  //   Assert.assertEquals(true, bst.search(14));
  //   bst.delete(14);
  //   Assert.assertEquals(false, bst.search(14));
  //
  //   Assert.assertEquals("1 l-null r-5--5 l-2 r-7--2 l-null r-4--4 l-null r-null--7 l-null r-9--9 l-null r-12--12 l-10 r-15--10 l-null r-null--15 l-13 r-99--13 l-null r-null--99 l-27 r-null--27 l-18 r-null--18 l-null r-null--", bst.traverse(bst.getRoot()));
  //
  //   Assert.assertEquals(true, bst.search(18));
  //   bst.delete(18);
  //   Assert.assertEquals(false, bst.search(18));
  //
  //   Assert.assertEquals("1 l-null r-5--5 l-2 r-7--2 l-null r-4--4 l-null r-null--7 l-null r-9--9 l-null r-12--12 l-10 r-15--10 l-null r-null--15 l-13 r-99--13 l-null r-null--99 l-27 r-null--27 l-null r-null--", bst.traverse(bst.getRoot()));
  //
  // }
  //
  // @Test
  // public void CanDeleteNodesWithSingleChild() {
  //   Integer[] a = {1,5,2,7,4,9,6,8,3,12,10,11,15,13,14,99,27,18};
  //   BinarySearchTree bst = new BinarySearchTree();
  //   for(Integer n : a) bst.insert(n);
  //
  //   Assert.assertEquals(true, bst.search(4));
  //   bst.delete(4);
  //   Assert.assertEquals(false, bst.search(4));
  //
  //   Assert.assertEquals("1 l-null r-5--5 l-2 r-7--2 l-null r-3--3 l-null r-null--7 l-6 r-9--6 l-null r-null--9 l-8 r-12--8 l-null r-null--12 l-10 r-15--10 l-null r-11--11 l-null r-null--15 l-13 r-99--13 l-null r-14--14 l-null r-null--99 l-27 r-null--27 l-18 r-null--18 l-null r-null--", bst.traverse(bst.getRoot()));
  //
  //   Assert.assertEquals(true, bst.search(2));
  //   bst.delete(2);
  //   Assert.assertEquals(false, bst.search(2));
  //
  //   Assert.assertEquals("1 l-null r-5--5 l-3 r-7--3 l-null r-null--7 l-6 r-9--6 l-null r-null--9 l-8 r-12--8 l-null r-null--12 l-10 r-15--10 l-null r-11--11 l-null r-null--15 l-13 r-99--13 l-null r-14--14 l-null r-null--99 l-27 r-null--27 l-18 r-null--18 l-null r-null--", bst.traverse(bst.getRoot()));
  //
  //   Assert.assertEquals(true, bst.search(10));
  //   bst.delete(10);
  //   Assert.assertEquals(false, bst.search(10));
  //
  //   Assert.assertEquals("1 l-null r-5--5 l-3 r-7--3 l-null r-null--7 l-6 r-9--6 l-null r-null--9 l-8 r-12--8 l-null r-null--12 l-11 r-15--11 l-null r-null--15 l-13 r-99--13 l-null r-14--14 l-null r-null--99 l-27 r-null--27 l-18 r-null--18 l-null r-null--", bst.traverse(bst.getRoot()));
  //
  //   Assert.assertEquals(true, bst.search(13));
  //   bst.delete(13);
  //   Assert.assertEquals(false, bst.search(13));
  //
  //   Assert.assertEquals("1 l-null r-5--5 l-3 r-7--3 l-null r-null--7 l-6 r-9--6 l-null r-null--9 l-8 r-12--8 l-null r-null--12 l-11 r-15--11 l-null r-null--15 l-14 r-99--14 l-null r-null--99 l-27 r-null--27 l-18 r-null--18 l-null r-null--", bst.traverse(bst.getRoot()));
  //
  //   Assert.assertEquals(true, bst.search(27));
  //   bst.delete(27);
  //   Assert.assertEquals(false, bst.search(27));
  //
  //   Assert.assertEquals("1 l-null r-5--5 l-3 r-7--3 l-null r-null--7 l-6 r-9--6 l-null r-null--9 l-8 r-12--8 l-null r-null--12 l-11 r-15--11 l-null r-null--15 l-14 r-99--14 l-null r-null--99 l-18 r-null--18 l-null r-null--", bst.traverse(bst.getRoot()));
  //
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
