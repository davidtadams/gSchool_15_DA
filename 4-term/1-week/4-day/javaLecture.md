
## Java for JavaScript Developers

![java](https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fsharealogo.com%2Fwp-content%2Fuploads%2FJava_ai.png&f=1)

---

# Standards

* Classical object-oriented programming
* Writing object-oriented programs in Java

---

# Success Criteria

* Convert basic JavaScript programs to Java programs
* Compile and run basic Java programs

---

## Java

* Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.

* "write once, run anywhere" (WORA), meaning that compiled Java code (bytecode) can run on all platforms that support Java without the need for recompilation.

* The language derives much of its syntax from C and C++, but it has fewer low-level facilities than either of them.

---

## History

![james](http://www.javatpoint.com/images/j1.jpg)

* Java was originally developed by James Gosling at Sun Microsystems (which has since been acquired by Oracle Corporation) and released in 1995 as a core component of Sun Microsystems' Java platform.

[http://oracle.com.edgesuite.net/timeline/java/](http://oracle.com.edgesuite.net/timeline/java/)

Notable years: 1991, 1995, 2006, 2009

---

# Compiled

---

```sh
javac HelloWorld.java
java HelloWorld
```

---

# Statically typed

---

### You need to explicitly specify the type of the following:

* variables
* parameters of methods
* return values of methods
* Arrays, HashMaps etc...

[DataTypes](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

---

# Requires a `main` method

---

```java
class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello world");
  }
}
```

---

## Uses `System.out.println` to print to the console

---

# Requires semicolons

---

# Requires you to declare `void`

---

# Uses types to declare variables

---

# Single / Double quotes are different

---

# Arrays are more primitive

---

# Array literals use curly braces

---

# Uses classes instead of simple objects

---

# Class definitions are very different

---

# Properties and method invocations

---

# Simpler `this`

---

## Lets convert this to Java

```js
var names = ["Alice", "Bob", "Cory"]
var result = ""
for (var i = 0; i < names.length; i++) {
  result += names[i]
}
console.log(result);
```

---

# Exercise 1

Unit-1-Syntax/Exercise01

---

# Exercise 2

Unit-1-Syntax/Exercise02

---

# Review

* What does void indicate?
* What steps do you need to take in order to write the simplest Java program?
* What is a type?
---

# Success Criteria

* Convert basic JavaScript programs to Java programs
* Compile and run basic Java programs

---
