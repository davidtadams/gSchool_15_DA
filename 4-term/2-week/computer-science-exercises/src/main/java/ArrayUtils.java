package main;

public class ArrayUtils {

  public static int[] reverse(int[] array) {
    int temp = 0;

    for (int i = 0; i < array.length / 2; i++) {
      temp = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }

    return array;
  };

  public static int[] push(int[] array, int num) {
    int[] newArray = new int[array.length + 1];

    for (int i = 0; i < array.length; i++) {
      newArray[i] = array[i];
    }

    newArray[newArray.length - 1] = num;

    return newArray;
  };

  public static void print(int[] array) {
    System.out.print('[');
    for(int i=0; i<array.length; i++){
      if (i == array.length -1) {
        System.out.print(array[i] + "]");
      } else {
        System.out.print(array[i] + ", ");
      }
    }
    System.out.print('\n');
  };

}
