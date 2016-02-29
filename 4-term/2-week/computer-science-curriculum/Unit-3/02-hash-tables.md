# Hash Tables

A hash table is a data structure that maps a set of keys to a set of values.  A hash table is often called by many different names including:

* Hash Table
* Hash
* Hash map
* Map
* Table
* Dictionary

In javascript, the closest data structure to a hash table is the object.  In the following example notice how an object maps keys to values:

```
myObj = {};
myObj['key'] = 'value';
myObj[1] = 'another value';
myObj['1'] // returns the string 'another value'
test = {}
test[myObj] = 'the last value';
test['[object Object]'] // returns the string 'the last value'
```

The example above also illustrates why an object in javascript is not quite a hash table.  All keys of an object are turned into a string. This means that complex objects cannot be used as keys in another object. 

## How Hash Tables Work Internally

Now that we understand how to use a hash table, let's understand how it works internally.  Once you understand how the hash table works, it is much easier to understand the big O performance characteristics of a hash table.

__Array Access Is Constant Time__

First, recall that an array has constant time access because all items in the array are stored contiguously in memory.  Looking up any one item is simply a mathematical operation that uses the start of the array's memory address and adds the index to find the memory address of the index that is desired. 

__Imagine An Infinitely Long Array__

![](http://s14.postimg.org/ho496a4k1/infinite_Array.png)

If an infinitely long array existed, and we have numbers as keys, we could just use this infinitely long array as our hash table. In the example above:

```
arr[1] = "value 1";
arr[5001] = "value 2";
```

Any time we have a new key that we would like to add, we simply assign a value to an index in the array.

__What is the problem with an infinite array implementation?__

It is extremely wasteful because we have to create a very large array to hold all possible keys.  A better way to solve the problem would be to map the set of keys into a smaller space.

### Hash Function: Maps a Set of Keys to a Smaller Space

A hash function is a function that maps keys into a smaller space.  This way, a hash table can take any key as input, and the hash function is responsible for mapping it into a smaller array.  A basic hash function looks like the following

```
hash_key = (key * LARGE_PRIME) % smaller_array_size
```

The function takes an arbitrary key, multiplies it times a large number to give it some entropy, and then mods the result by the size of a finite array (the max size of the new space).

For example, if the smaller array has a length of 59, and the large prime number we choose is 122611, then our has function is:

```
hash_key = (key * 122611) % 59
```

Let's map the two keys from the infinite array example:

```
key = 1, hash_key = (1 * 122611) % 59 = 9
key = 5001, hash_key = (5001 * 122611) % 59 = 51
```

Notices that the hash key that is generated is always in the range 0 to 58 in this case.  The range is within the bounds of the array of size 59 that we have created to store the values for our hash.

Now we have a funciton that maps an seemingly infinite set of keys to a finite set of keys between 0 and 58.

### Hash Collisions

A collision occurs in the hash table when two keys map to the same index.  The hash table has to have some policy for handling these issues so that a previously hashed key with the same index does not get written over.  One policy to fix the problem is __chaining__.

__Chaining__

Chaining is way to resolve collisions in a hash table. Instead of starting with an empty array, each array element contains a data structure to store collisions.  A common data structure to use is a linked list, but others can be used such a binary search tree or even another hash table.  Whenever an element is inserted, both the key and the value are inserted into the data structure as that index (linked list for example).

__Linear Probing__

Another category of solving collision problems is probing.  Linear probing is one such scheme.  Rather than solve a collsion with an extra data structure, the scheme tries to put the key and value in a different spot in the array.  With linear probing, if there is a collision at index i, the algorithm tries to put the key and value at index i + 1, then index i + 2, etc. Until it finds an open slot.  To find out of a key is in the hash, the algorithm must hash to an index.  If the key and value exists at that index, then it is found.  If the key and value do no exist at that index, then continue looking linearly through the array until the key and value are found, or an empty space is found in the array.  If there is an empty space, you know the key and value are not in the array.

## Big O Runtime of Hash Tables

A hash table has impressive performance characteristics: 

* __Inserting__: O(1)
* __Removing__: O(1)
* __Accessing a Value Using a Key__: O(1)
* __Finding A Value (without key)__: O(n)
* __Space Complexity__: O(n)

