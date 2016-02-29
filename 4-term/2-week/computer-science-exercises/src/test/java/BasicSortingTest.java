package main;

import org.junit.Before;
import org.junit.Test;
import org.junit.Assert;

public class BasicSortingTest {

  @Test
  public void BubbleSort() {
    int[] numArray = {42, 23, 16, 15, 8, 4};
    int[] sortedArray = {4, 8, 15, 16, 23, 42};
    Assert.assertArrayEquals(sortedArray, BasicSorting.bubble(numArray));
  }

  @Test
  public void SelectionSort() {
    int[] numArray = {42, 23, 16, 15, 8, 4};
    int[] sortedArray = {4, 8, 15, 16, 23, 42};
    Assert.assertArrayEquals(sortedArray, BasicSorting.selection(numArray));
  }

  @Test
  public void InsertionSort() {
    int[] numArray = {42, 23, 16, 15, 8, 4};
    int[] sortedArray = {4, 8, 15, 16, 23, 42};
    Assert.assertArrayEquals(sortedArray, BasicSorting.insertion(numArray));
  }

}
