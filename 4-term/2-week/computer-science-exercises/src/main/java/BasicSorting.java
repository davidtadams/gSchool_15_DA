package main;

public class BasicSorting {

  public static int[] bubble(int[] array) {
    boolean swapped = true;
    int temp;
    while (swapped) {
      swapped = false;
      for (int i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
          temp = array[i];
          array[i] = array[i - 1];
          array[i - 1] = temp;
          swapped = true;
        }
      }
    }
    return array;
  }

  public static int[] selection(int[] array) {
    int minIndex;
    int temp;
    for (int i = 0; i < array.length - 1; i++) {
      minIndex = i;
      for (int j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex != i) {
        temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
      }
    }
    return array;
  }

  public static int[] insertion(int[] array) {
    int temp;
    for (int i = 1; i < array.length; i++) {
      int j = i;
      while (j > 0 && array[j - 1] > array[j]) {
        temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
        j--;
      }
    }
    return array;
  }

}
