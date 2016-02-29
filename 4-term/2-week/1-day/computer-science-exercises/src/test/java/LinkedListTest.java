package main;

import org.junit.Before;
import org.junit.Test;
import org.junit.Assert;

public class LinkedListTest {

  @Test
  public void ShouldAdd() {
    LinkedList linkedList = new LinkedList();
    linkedList.add(4);
    linkedList.add(8);
    linkedList.add(15);
    linkedList.add(16);
    linkedList.add(23);
    linkedList.add(42);
    Assert.assertEquals(15, linkedList.get(2));
    Assert.assertEquals(42, linkedList.get(5));
  }

  @Test
  public void ShouldAddToIndex() {
    LinkedList linkedList = new LinkedList();
    linkedList.add(4);
    linkedList.add(8);
    linkedList.add(15);
    Assert.assertEquals(15, linkedList.get(2));
    linkedList.add(42, 2);
    Assert.assertEquals(42, linkedList.get(2));
  }

  @Test
  public void ShouldRemove() {
    LinkedList linkedList = new LinkedList();
    linkedList.add(10);
    linkedList.add(15);
    Assert.assertEquals(15, linkedList.get(1));
    linkedList.remove(1);
    linkedList.add(20);
    Assert.assertEquals(20, linkedList.get(1));
  }

  @Test
  public void ShouldReturnSize() {
    LinkedList linkedList = new LinkedList();
    linkedList.add(10);
    linkedList.add(15);
    linkedList.add(3);
    linkedList.remove(2);
    linkedList.add(20);
    Assert.assertEquals(3, linkedList.size());
  }

}
