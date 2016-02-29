package main;

public class LinkedList {
	// reference to the head and tail node.
	private Node head;
	private Node tail;
	private int listCount;

	// LinkedList constructor
	public LinkedList() {
		// this is an empty list
		listCount = 0;
	}

  // appends the specified element to the end of this list.
	public void add(int data) {
		Node newNode = new Node(data);
		if (listCount == 0) {
			head = newNode;
			tail = newNode;
		} else {
			tail.setNext(newNode);
			tail = newNode;
		}
		listCount++;
	}

  // inserts the specified element at the specified position in this list.
	public void add(int data, int index) {
		Node tempNode = head;
		Node newNode = new Node(data);
		if (index == 0) {
			newNode.setNext(tempNode);
			head = newNode;
		} else {
			for (int i = 1; i < index; i++) {
				tempNode = tempNode.getNext();
			}
			newNode.setNext(tempNode.getNext());
			tempNode.setNext(newNode);
		}
		listCount++;
	}

  // returns the element at the specified position in this list.
	public int get(int index) {
		Node tempNode = head;
		for (int i = 0; i < index; i++) {
			tempNode = tempNode.getNext();
		}
		return tempNode.getData();
	}

  // removes the element at the specified position in this list.
	public void remove(int index) {
		if (index == 0) {
			head = head.getNext();
		} else {
			Node tempNode = head;
			for (int i = 1; i < index; i++) {
				tempNode = tempNode.getNext();
			}
			if (index == listCount - 1) {
				tempNode.setNext(null);
				tail = tempNode;
			} else {
				tempNode.setNext(tempNode.getNext().getNext());
			}
		}
		listCount--;
	}

  // returns the number of elements in this list.
	public int size() {
		return listCount;
	}

	public String toString() {
		Node current = head;
		String output = "";
		while(current != null) {
			output += "[" + String.valueOf(current.getData()) + "]";
			current = current.getNext();
		}
		return output;
	}

  // reference to the next node in the chain,
  // or null if there isn't one.
	private class Node {
		Node next;
		// data carried by this node (currently int, could be any other type).
		int data;
		// Node constructor
		public Node(int _data) {
			next = null;
			data = _data;
		}
		// another Node constructor if we want to
		// specify the node to point to.
		public Node(int _data, Node _next) {
			next = _next;
			data = _data;
		}
		// these methods should be self-explanatory
		public int getData() {
			return data;
		}
		public void setData(int _data) {
			data = _data;
		}
		public Node getNext() {
			return next;
		}
		public void setNext(Node _next) {
			next = _next;
		}
	}
}
