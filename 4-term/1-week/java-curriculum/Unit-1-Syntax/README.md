# From JavaScript to Java

There are several differences between JavaScript and Java.  Here's a quick list of some of the main differences you'll run into as you get started.  This is by no means an exhaustive list, but should be enough to get you started.

## Objectives

By the end of this lesson you should be able to:

- Compile and run basic Java programs
- Convert basic JavaScript program to Java programs

## Java is Compiled

When you write in JavaScript, you can execute a `.js` file directly, like so:

```
node app.js
```

In Java there are 2 steps.  First you have to _compile_ your code, then you can _execute_ the compiled code.

When you install Java, you get both the `javac` compiler and the `java` command that can run your code.

So if your program is named `DoStuff`, you would run some variation of these two commands:

```
javac DoStuff.java
java DoStuff
```

After running `javac` list the contents of this directory.  What did `javac` create?

## Java is statically typed

In JavaScript, you don't have to tell the interpreter anything about what data _types_ exist in the program.  JavaScript just figures it out.  So you can write code like this:

```js
var foo = function (x, y) {
  return x + y;
}
var var1 = foo(1, 2) // => 3
var var2 = foo("hello", "world") // => helloworld
```

In Java, you need to explicitly specify the _type_ of the following:

- variables
- parameters of methods
- return values of methods
- Arrays, HashMaps etc...

```java
class DoStuff {
  String foo(int x, int y) {
    return
  }
}
```

## Java requires a `main` method

When you write in JavaScript, you can just put statements at the top-level in your program.  For example:

```js
console.log("Hello world");
```

When you write in Java, your statements need to be inside of class declarations.  By default, when you run a program, it will look for a `main` method, that looks like this:

```java
class DoStuff {
  public static void main(String[] args) {
    System.out.println("Hello world")
  }
}
```

When you compile this program and run `DoStuff`, Java will look for the `main` method of `DoStuff` and will run it.

## Java uses `System.out.println` to print to the console

In JavaScript this line:

```js
console.log("Foo")
```

Becomes:

```java
System.out.println("Hello World")
```

## Java requires semicolons

In JavaScript, there are certain circumstances which require you to add a semicolon to the end of a statement, but in general it's OK to leave them off.  For example:

```js
function foo() {
  var a = 1
  var b = a
  return b
}
```

In Java, every statement requires a semicolon.  Like JavaScript, class definitions and method definitions do _not_ require semicolons.

```java
class DoStuff {
  public static void main(String[] args) {
    DoStuff stuff = new DoStuff();
    System.out.println(stuff.foo(1, 2));
  }

  int foo(int x, int y) {
    x = x * 4;    // semicolons are required for every statement
    return x + y; // semicolons are required for every statement
  } // no semicolon required on method definitions
} // no semicolon required on class declarations
```

## Java requires you to declare `void`

In JavaScript, you can write methods that return values or not:

```js
function foo() {
  return "bar"
}

function bar() {
  console.log("something")
} // returns undefined
```

In Java, in addition to specifying what type a method returns, you must also specify if a method doesn't return anything by adding the `void` keyword:

```java
class DoStuff {
  void foo() {
    System.out.println("something");
  }
}
```

## Java uses types to declare variables

In JavaScript you declare variables with `var x = 0;`

In Java, you declare variables by using their _type_, such as:

```java
String foo;     // declares a variable named foo, of type String
int bar = 0;    // declares a variable named bar, of type int, with a value 0
char[] letters; // declares an array, of type char
```

## Java single / double quotes are different

In JavaScript, you can use single or double quotes for strings, like so:

```js
var foo = 'hello'
var bar = "world"
```

In Java, double quotes refer to the `String` data type, whereas single quotes refer to the `char` data type.  They are _not_ interchangeable:

```java
String foo = "hello";
char bar = 'w';
```

Using single / double quotes in the wrong place will cause a compile-time error.

## Java Arrays are more primitive

In JavaScript, Arrays are objects.  You can add as many properties (indices) as you want, and you can put whatever you want into them, like so:

```js
var a = []
a.push("a string")
a.push(1)
a.push(true)
a.push({some: "object"})
```

In Java, Arrays are extremely primitive.  They have no methods, and only a `length` property.  You have to tell Java both _how many_ things you want to put in the Array, and also _what type_.  Like so:

```java
String[] names = new String[4]; // creates a new Array that will only take Strings, and will only take 4 items
System.out.println(names.length); // 4
names[0] = "Hello";
names[1] = "World";
System.out.println(names.length); // 4
System.out.println(names); // [Ljava.lang.String;@7852e922
```

NOTE: `System.out.println` is not _quite_ as nice as `console.log` is in JavaScript.  See [here](http://stackoverflow.com/questions/409784/whats-the-simplest-way-to-print-a-java-array) for some ways to print arrays in a more useful way.

There are other classes such as `ArrayList` that provide additional functionality.

## Java Array literals use curlies

In JavaScript you can create new arrays using literal syntax like so:

```js
var names = ["Su", "Will"];

var fullNames = [
  ["First", "Su"],
  ["Last", "Sylvester"],
];
```

In Java, Array literal syntax uses curly braces, and you still need to define the _type_ of thing that will go in the array, and also how deeply nested the array will be.

```java
String[] names = { "Su", "Will", };
System.out.println(names[0]);

String[][] fullNames = {
  {"First", "Su"},
  {"Last", "Sylvester"},
};
System.out.println(fullNames[0][0]);
```

## Java uses classes instead of simple objects

In JavaScript, whenever you want to represent an object, you can do so without having to define a class, like so:

```js
var person = {first: "Su", last: "Sylvester"};
```

In Java, while there is a `HashMap` class, you will mostly create classes for each type of data you work with, such as:

```java
class Person {
  String first;
  String last;

  Person(String first, String last) {
    this.first = first;
    this.last = last;
  }
}

class DoStuff {
  public static void main(String[] args) {
    Person person = new Person("Su", "Sylvester");
    System.out.println(person.first);
  }
}
```

## Java's class definitions are very different

In JavaScript:

- every function _can_ be called as a constructor (using `new`)
- you can define properties right in the constructor
- you have to add methods to the prototype
- you can add properties at any point
- you _must_ use `this` to refer to properties inside methods

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
}

Person.prototype.fullName = function () {
  return this.first + " " + this.last;
};

var will = new Person("Will", "Schuester");
will.foo = "bar";
will.fullName();
```

In Java:

- classes and constructors are separate
- properties (called "fields" or "instance variables") need to be defined as part of the class definition
- you cannot define new fields at runtime, like you can with JavaScript objects
- methods are defined inside the class definition
- you don't need `this` unless there's parameter shadowing happening

```java
class Person {
  String first;
  String last;

  Person(String first, String last) {
    // since the instance variable `first`
    // "shadows" the parameter `first`, you need to use `this.first`
    this.first = first;
    this.last = last;
  }

  // the `fullName` method is added inside the class definition
  // NOTE that you do not need `this` here
  String fullName() {
    return first + " " + last;
  }
}

class DoStuff {
  public static void main(String[] args) {
    Person person = new Person("Su", "Sylvester");
    System.out.println(person.first);
  }
}
```

## Java properties and method invocations

In JavaScript, if you reference a function, but don't _invoke_ it with parenthesis, you just get a reference to the function:

```js
var foo = function(){};
var bar = foo; // bar is a reference to the `foo` function
bar();
```

In Java, if you call a method name without parenthesis, it will think it's a _field_.  Otherwise it'll blow up.

```java
class Car {
  public int miles = 0;
  public int miles() {
    return 12;
  }
}

Car car = new Car();
car.miles; // 0
car.miles(); // 12
```

## Java has a simpler `this`

In JavaScript, the `this` keyword is determined by a complex set of rules based on how the function was _invoked_.

In Java, `this` is very simple - it always just refers to that _instance_.

## Resources

- http://www.open.ac.uk/StudentWeb/m874/!synterr.htm

## A quick comic strip

![](http://i.imgur.com/76Wtthy.jpg)
