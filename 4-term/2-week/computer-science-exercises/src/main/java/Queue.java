package main;

public class Queue {
  private int size;
  private int front;
  private int back;
  static final int CAPACITY = 20;
  private int[] queueArr = new int[CAPACITY];

  public Queue() {
    size = 0;
    front = 0;
    back = -1;
  }

  public boolean isEmpty() {
    return size == 0;
  }

  public void enqueue(int value) {
    size += 1;
    if (++back == queueArr.length) {
      back = 0;
    }
    queueArr[back] = value;
  }

  public int getFront() {
    if (size == 0) {
      throw new IllegalArgumentException("Empty Stack.");
    }
    return queueArr[front];
  }

  public int dequeue() {
    if (size == 0) {
      throw new IllegalArgumentException("Empty Stack.");
    }
    int frontItem = queueArr[front];
    size -= 1;
    if (++front == queueArr.length) {
      front = 0;
    }
    return frontItem;
  }

  public void clear() {
    size = 0;
    front = 0;
    back = -1;
  }

}
