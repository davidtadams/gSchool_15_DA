package main;

public class AdvancedSorting {

  public static int[] mergesort(int[] array) {
    mergesort(array, 0, array.length - 1);
    return array;
  }

  private static void mergesort(int[] array, int left, int right) {
    int middle;
    if (left < right) {
      middle = (left + right) / 2;
      mergesort(array, left, middle);
      mergesort(array, middle + 1, right);
      merge(array, left, middle, right);
    }
  }

  private static void merge(int[] array, int left, int middle, int right) {
    int i;
    int j;
    int k;
    int number1 = middle - left + 1;
    int number2 = right - middle;
    int[] leftArr = new int[number1 + 1];
    int[] rightArr = new int[number2 + 1];

    for (i = 0; i < number1; i++) {
      leftArr[i] = array[left + i];
    }
    leftArr[number1] = 2147483647;

    for (j = 0; j < number2; j++) {
      rightArr[j] = array[middle + j + 1];
    }
    rightArr[number2] = 2147483647;

    i = 0;
    j = 0;
    for (k = left; k <= right; k++) {
      if (leftArr[i] <= rightArr[j]) {
        array[k] = leftArr[i];
        i += 1;
      } else {
        array[k] = rightArr[j];
        j += 1;
      }
    }
  }

  public static int[] quicksort(int[] array) {
    quicksort(array, 0, array.length - 1);
    return array;
  }

  private static void quicksort(int[] array, int start, int end) {
    if (start < end) {
      int pivot = partition(array, start, end);
      quicksort(array, start, pivot - 1);
      quicksort(array, pivot + 1, end);
    }
  }

  public static int partition(int[] array, int start, int end) {
    System.out.println("Start: " + start);
    System.out.println("End: " + end);
    System.out.println("partition begin: ");
    ArrayUtils.print(array);

    int i = start - 1;
    System.out.println("pivot(x): " + array[end]);
    System.out.println("i: " + i);
    int temp;

    for (int j = start; j < end; j++) {
      if (array[j] <= array[end]) {
        i += 1;
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      ArrayUtils.print(array);
    }
    System.out.println("i: " + i);
    //swap a[i + 1] with a[r]
    temp = array[i + 1];
    array[i + 1] = array[end];
    array[end] = temp;

    System.out.println("partition end: ");
    ArrayUtils.print(array);
    System.out.println("i + 1: " + (i + 1));

    return i + 1;
  }

}
