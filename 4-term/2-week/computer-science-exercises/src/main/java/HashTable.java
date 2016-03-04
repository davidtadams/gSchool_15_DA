package main;

public class HashTable {

  //Type here is dependent on what you want to store in the HashTable
  String[] table;
  //Size determines how many elements can be stored in the HashTable
  int size;
  //Stores how many values are in the HashTable
  int items = 0;

  private int curSize;

  // Instantiate the HashTable
  public HashTable(int size) {
    this.size = size;
    table = new String[size];
    curSize = 0;
  }

  // Create a hash function to map the ID to an index
  // The resulting index should be bounded from [0, size)
  public int hashFunction(int id) {
    return id % size;
  }

  // Insert a value into the HashTable given an ID
  public void set(int id, String name) {
    int hashIdx = hashFunction(id);
    if (table[hashIdx] == null) {
      table[hashIdx] = name;
      curSize += 1;
    }
  }

  // Access a value in the HashTable given an ID
  public String get(int id) {
    return table[hashFunction(id)];
  }

  // Delete a value in the HashTable given an ID
  public void remove(int id) {
    table[hashFunction(id)] = null;
    curSize -= 1;
  }

  // Return the number of items stored in the HashTable
  public int items() {
    return curSize;
  }

}
