package main;

public class Stack {
  private int size;
  private int stackLength = 20;
  private int[] stack = new int[stackLength];

  public Stack() {
    size = 0;
  }

  public void push(int value) {
    stack[size] = value;
    size += 1;
  }

  public int pop() {
    if (size == 0) {
      throw new IllegalArgumentException("Empty Stack.");
    }
    size -= 1;
    return stack[size];
  }

  public int peek() {
    if (size == 0) {
      throw new IllegalArgumentException("Empty Stack.");
    }
    return stack[size - 1];
  }

  public boolean isEmpty() {
    if (size > 0) {
      return false;
    }
    return true;
  }

}
