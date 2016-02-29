package main;

public class HashTable {

  //Type here is dependent on what you want to store in the HashTable
  String[] table;
  //Size determines how many elements can be stored in the HashTable
  int size;
  //Stores how many values are in the HashTable
  int items = 0;

  // Instantiate the HashTable
  public HashTable(int size) {
    System.out.println("Initializing Hash Table");
    this.size = size;
    table = new String[size];
  }

  // Create a hash function to map the ID to an index
  // The resulting index should be bounded from [0, size)
  public int hashFunction(int id) {
    return -1;
  }

  // Insert a value into the HashTable given an ID
  public Boolean set(int id, String name) {
    return false;
  }

  // Access a value in the HashTable given an ID
  public String get(int id) {
    return "Not Implemented";
  }

  // Delete a value in the HashTable given an ID
  public Boolean remove(int id) {
    return false;
  }

  // Return the number of items stored in the HashTable
  public int items() {
    return 0;
  }

}
