# Memory Management

So....what's the difference between Ruby and Java? PHP and C? Javascript and C++? One of the main differences is that some of these languages are compiled (C, C++, Java) and others are interpreted (Ruby, PHP)!

Don't know what a compiler is or what it does? Check out [this](https://www.youtube.com/watch?v=CSZLNYF4Klo&list=PLhQjrBD2T380dhmG9KMjsOQogweyjEeVQ&index=13) quick video for a good introduction.

There is another huge difference between C, C++ and all the other languages listed.  C and C++ does not include memory management for you.  You must manually allocate and deallocate memory as you use it.  As a programmer that is familiar with higher level languages such as ruby, PHP and even Java, this concept may be new to you.  In all of the higher level languages mentioned, memory is automatically allocated for you.  Here is an example:

```ruby
my_ruby_hash = Hash.new
```
In the above ruby code, memory is allocated by the ruby interpreter for your new hash that was created.  But you do not have to write any extra code to make sure that memory exists, ruby does it for you.  Additionaly, when that memory is no longer needed, it will be removed from your computer.  This process is known as __grabage collection__.

# Garbage collector

In computer science, garbage collection (GC) is a form of automatic memory management. The garbage collector, or just collector, attempts to reclaim garbage, or memory occupied by objects that are no longer in use by the program. Garbage collection was invented by John McCarthy around 1959.

Garbage collection is often portrayed as the opposite of manual memory management, which requires the programmer to specify which objects to deallocate and return to the memory system. However, many systems use a combination of approaches, including other techniques such as stack allocation and region inference. Like other memory management techniques, garbage collection may take a significant proportion of total processing time in a program and can thus have significant influence on performance.

How does memory management work in JavaScript? Read about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)

# Threads

In computer science, a thread of execution is the smallest sequence of programmed instructions that can be managed independently by a scheduler (typically as part of an operating system). The implementation of threads and processes differs from one operating system to another, but in most cases, a thread is a component of a process. Multiple threads can exist within the same process and share resources such as memory, while different processes do not share these resources - this is known as multi-threading.

If you want to learn more about this, check out this [video](https://www.youtube.com/watch?v=3YD66bHehhQ&list=PLhQjrBD2T380dhmG9KMjsOQogweyjEeVQ&index=48)

# Bits & Bytes

At the smallest scale in the computer, information is stored as bits and bytes. We will explore this a bit more later, but for know just know that 8 bits make up a byte.

Read some more [here](https://web.stanford.edu/class/cs101/bits-bytes.html)

# Stack & Heap

One of the most essential concepts in memory management is the Stack and the Heap.

The stack is the memory set aside as scratch space for a thread of execution. When a function is called, a block is reserved on the top of the stack for local variables and some bookkeeping data. When that function returns, the block becomes unused and can be used the next time a function is called. The stack is always reserved in a LIFO (last in first out) order; the most recently reserved block is always the next block to be freed. This makes it really simple to keep track of the stack; freeing a block from the stack is nothing more than adjusting one pointer.

The heap is memory set aside for dynamic allocation. Unlike the stack, there's no enforced pattern to the allocation and deallocation of blocks from the heap; you can allocate a block at any time and free it at any time. This makes it much more complex to keep track of which parts of the heap are allocated or free at any given time; there are many custom heap allocators available to tune heap performance for different usage patterns.

Here is a nice visual:

![stack and heap](http://techinerd.com/wp-content/uploads/2014/05/stack_heap.jpg)


Read [more](http://stackoverflow.com/questions/79923/what-and-where-are-the-stack-and-heap) on StackOverflow
