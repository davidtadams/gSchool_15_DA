# Stacks and Queues

## Stacks

Stack - both insertion and removal happen from same end we call this a LIFO (last-in-first-out) structure

![http://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/2000px-Data_stack.svg.png](http://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/2000px-Data_stack.svg.png)

You can think of a stack simply as some items stacked on top of each other just like these cups!

![http://files.mom.me/photos/2012/05/22/6-3681-stacked_cups-1337654706.jpg](http://files.mom.me/photos/2012/05/22/6-3681-stacked_cups-1337654706.jpg)

### Where do we see stacks in the real world?

- How about the call stack? Remember what that is? [http://en.wikipedia.org/wiki/Call_stack](http://en.wikipedia.org/wiki/Call_stack)
- The 'undo' command in a text editor can be modeled with a stack. 
- We use stacks to help in the implementation of more complex data structures and algorithms
- A stack is an extremely useful and efficient data structure for solving algorithms like figuring out a palindrome.
- Typical application areas include compilers, operating systems, handling of program memory (nested function calls)


## Queues

Queue - insertion must happen from rear/tail end of queue and removal must happen from front/head. We call this a FIFO (first-in-first-out) structure

Queue - list or collection with the restriction that insertion ca be performed at one end and deletion can be performed at the other front

Queue operations - These are all O(1)

insertion - enqueue/push/insert
deletion -  dequeue/pop/remove/delete
front/peek - find the head element (just return the element at front)
isEmpty - check if empty
IsFull - if there is a limited size

![http://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/2000px-Data_Queue.svg.png](http://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/2000px-Data_Queue.svg.png)

Or a real life example of a queue

![http://goodmenproject.com/wp-content/uploads/2012/09/Screen-Shot-2012-09-15-at-9.16.04-AM.png](http://goodmenproject.com/wp-content/uploads/2012/09/Screen-Shot-2012-09-15-at-9.16.04-AM.png)

### Where do we use queues?

- Batch processing: For operations where various entities are stored and held to be processed later, the queue performs the function of a buffer.
- Typical application areas include print job scheduling, operating systems (process scheduling).

And remember, the regular Array structure in Javascript is a Stack (first in, last out) and can also be used as a Queue (first in, first out) depending on the calls you make.

## Exercises

* [Data Structures in Ruby](https://github.com/gSchool/data-structures-ruby)
* [Data Structures in JS](https://github.com/gSchool/data-structures-js)
* If you've implemented linked lists already, modify them to create implementations for stacks and queues.
