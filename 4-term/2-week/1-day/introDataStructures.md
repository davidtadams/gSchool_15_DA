# Introduction to Data Structures

---

# Standards

* Implement, evaluate, and use some common data structures
* Identify and diagram common data structures
* Determine the correct data structure for interview-style problems

---

# Success Criteria

* Articulate the importance of Data Structures and their associated efficiency
* Define Abstract Data Type

---

## Data Structures

* The most _fundamental_ concept in Computer Science
* The building blocks of the computing world
* Knowledge of data structures and their performance is *required* to build efficient software systems

---

_Data is everywhere_

The way we store, organize and group data *matters*

---

<img src="http://pediaa.com/wp-content/uploads/2015/10/Difference-Between-Dictionary-and-Thesaurus-dictionary.jpg" style="width:90% !important;height:auto !important;">

---

<img src="http://i.imgur.com/R5ggEVL.jpg" style="width:90% !important;height:auto !important;">

---

<img src="table.png" style="width:55%;height:auto;">

---

_Different_ structures are needed to organize _different_ kinds of data

* text
* images
* videos
* relational
* geospatial
* etc.

---

How we store, organize and group data _matters_

If we do not use the right kind of logical structures to store our data, our software systems will not be efficient

---

# efficient

---

# Data Structure

A way to store and organize data in a computer, so that it can be used _efficiently_.

Efficiency of the data structure and it's operations will depend on the structure used.

---

# Why care about efficiency?

---

Computer memory and speed are finite resources.

----

# Memory Management

* In lower level languages like C and C++ you must manually allocate and deallocate memory as you use it.
* JavaScript and Java both use automatic memory management called "Garbage Collection"

----

# Bits & Bytes

* At the smallest scale, information is stored as bits and bytes.
* More on this later, for now:
 * 8 bits == 1 byte

---


## We talk about data structures in 2 ways.

* Mathematical and Logical Models
 * Abstract Data Type (ADT)
* Implementation

---

# Abstract View

![tv](https://media.giphy.com/media/BhLSwwk08irM4/giphy.gif)

* Turned on/off
* Receive signals
* Audio/Video

---

# Abstract Data Type

define data items and operations, but no implementation

----

## Programming Language Support for ADT

* Class in C++, C#, Java, Python etc.

## Class

* defining something in terms of data and operations, allows for information hiding

---

# List ADT

* Store a given number of elements of a given type
* Read elements by position
* Modify element at a position

---

What data structure do you know of that has these features?

---

# List ADT

* empty list has size 0
* insert
* remove
* count
* read elements by position
* modify elements by position

---

# Model a reservation system

![seats](http://cdn2.hubspot.net/hub/72211/file-15476322-jpg/images/istock_000000581126xsmall.jpg?t=1454962365965)

----

What data do you store?

----

* Seats
* Seats reserved or available

----

What operations do you provide?

----

* Determine available seats
* Reserve a seat
* Cancel a reservation
* Find a block of available seats

----

# Implementing Seats

* Declare n `char` variables for n seats

----

# Using n char variables

* All variables initially marked with 'A' (Available)
* Reserved seats will be marked with an 'R' (Reserved)

----

How do we go about listing available seats?

----

Troublesome with lots of variables

* s1: 'A'
* s2: 'R'
* s3: 'A'
* .
* .
* sN: 'A'

----

# Implementing Seats

Create a `char` array of size n for n seats

----

# Using a `char` array

* All elements initially marked with 'A' (Available)
* Reserved seats will be marked with 'R' (Reserved)

----

How do we go about listing available seats?

----

|||||
---|---|---|---|---
'A'|'R'|'A'|...|'A'
0|1|2||n-1

---

# Common Operations

* Sorting
* Searching
* Inserting
* Removing
* Modifying
* Traversing

---

## Data Structures

* Arrays
* Linked List
* Stacks
* Queues
* Graphs
* Trees
* Hash Map

---

## We'll study the following characteristics of the data structures

1. Logical View
2. Operations (members)
3. Cost of Operations (efficiency)
4. Implementation

---

# Data Structure

A way to store and organize data in a computer, so that it can be used _efficiently_.

Efficiency of the data structure and it's operations will depend on the structure used.

---

# Review

* Articulate the importance of Data Structures and their associated efficiency
* Define Abstract Data Type
