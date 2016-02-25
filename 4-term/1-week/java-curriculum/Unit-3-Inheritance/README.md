# Classical Object Oriented Programming

## Objectives

By the end of this unit, you should be able to:

- Describe and give examples of inheritance
- Describe method overloading
- Describe method overriding
- Implement inheritance in Java using constructors and method overriding

## Concept

Inheritance is the way in which a sub class can access fields and methods defined in a parent class, and can optionally do things such as:

- add new fields and methods
- override methods to change their behavior

Classes can only inherit from _one_ other class.

## Method Signatures / Overloading

In order to fully understand inheritance and how constructors work, you must understand the concepts of method signatures.

A **method signature** is comprised of:

- the method name
- the number of parameters
- the types of parameters
- the order of parameters

Because Java has types, it can be very specific in how it chooses which method to call.  The concept of having different methods with the same is called _method overloading_.

The following are all _different method signatures_:

```java
class Doer {

  void doStuff() {
    System.out.println("Version 1");
  }

  void doStuff(String message) {
    System.out.println("Version 2");
  }

  void doStuff(String message, boolean important) {
    System.out.println("Version 3");
  }

  void doStuff(boolean important, String message) {
    System.out.println("Version 4");
  }

}
```

You would say that you have "overloaded" the `doStuff` method 3 times.

When you call `doStuff`, the JVM figures out which one to call:

```java
Doer doer = new Doer();

doer.doStuff();                       // calls version 1
doer.doStuff("with a string");        // calls version 2
doer.doStuff("with a string", true);  // calls version 3
doer.doStuff(false, "with a string"); // calls version 4
```

Try it yourself.  Run the following file:

```
javac -d bin Inheritance01.java && java -cp bin galvanize.Inheritance01
```

Then:

- overload the `printName` method with a new method with signature that has another parameter `middle` and prints the first / middle / last
- overload the `printName` method with a new method with signature that has another parameter `lastFirst` that prints the name in the format "last, first"

## Inheriting

The basic syntax for inheriting from another class looks like this:

```java
class Vehicle {
}

class Car extends Vehicle {
}
```

In the example above, `Car` is a subclass of `Vehicle`.

Run the following code:

```
javac -d bin Inheritance02.java && java -cp bin galvanize.Inheritance02
```

- alter `Manager` such that it is a subclass of `Employee`
- remove the `status` field from `Manager` as well as the `getStatus` method and re-run

## Method Overriding and `super.method`

If a subclass defines a method with the same _method signature_ of its parent class, it _overrides_ that method.

Take the following example:

```java
class Person {
  void speak(String message) {
    System.out.println(message);
  }
  void speak(String message, boolean shout) {
    System.out.println(message.toUpperCase());
  }
}

class Smoker extends Person {
  void speak(String message) {
    System.out.println("*cough*... " + message);
  }
}

class RunIt {
  public static void main(String[] args){
    Smoker smoker = new Smoker();

    smoker.speak("hello");        // prints *cough*... hello (from the subclass)
    smoker.speak("hello", true);  // prints HELLO (from the superclass)
  }
}
```

Notice how calling the `smoker`'s `speak` method with just a string called the subclass's `speak` method.  That's because it matched the _method signature_ exactly.

Do it yourself:

```
javac -d bin Inheritance03.java && java -cp bin galvanize.Inheritance03
```

In `Inheritance03` _override_ the `getStatus` method such that it prints "this manager is employed".

**Overridden methods can call the superclass method**

```java
class Person {
  String speak(String message) {
    return "I'd like to say " + message;
  }
}

class Smoker extends Person {
  String speak(String message) {
    return "*cough*... " + super.speak(message);
  }
}

class Scratch {
  public static void main(String[] args){
    Smoker smoker = new Smoker();

    System.out.println(smoker.speak("howdy"));
  }
}
```

Notice the call to `super.speak(message)` - you can call the superclass method by using the `super` keyword.

## Constructors, Inheritance and `super()`

Every class in Java has a constructor.  By default it's a no-op (that is, it does nothing) method that takes no parameters.

```java
class Order {
  // default constructor is added automatically
}
Order order = new Order();
```

The code above is the same as:

```java
class Order {
  Order() {
  }
}
Order order = new Order();
```

**Constructors are called from the top down**

When you instantiate an object, all matching constructors are called in order:

```java
class Order {
  Order() {
    System.out.println("From Order");
  }
}
class SpecialOrder extends Order {
  SpecialOrder() {
    System.out.println("From Special Order");
  }
}
class VerySpecialOrder extends SpecialOrder {
  VerySpecialOrder() {
    System.out.println("From Very Special Order");
  }
}
VerySpecialOrder order = new VerySpecialOrder();
```

If you run that code, you'll see:

```
From Order
From Special Order
From Very Special Order
```

This is different from JavaScript.  In JavaScript you have to _manually_ call other constructor functions.

**Constructors are not inherited, but can call parent constructors with `super()`**

If you define a constructor in a base class that takes parameters, subclasses won't be able to use it:

```java
class Order {
  Order(int amount) {
    System.out.println("From Order");
  }
}
class SpecialOrder extends Order {
}
SpecialOrder order = new SpecialOrder(2);
```

Instead, you need to define a Constructor with like so:

```java
class Order {
  Order(int amount) {
    System.out.println("From Order");
  }
}
class SpecialOrder extends Order {
  SpecialOrder(int amount) {
    super(amount); // call the superclass constructor
    System.out.println("From Order");
  }
}
SpecialOrder order = new SpecialOrder(2);
```

Do it yourself:

```
javac -d bin Inheritance04.java && java -cp bin galvanize.Inheritance04
```

Update `Inheritance04` such that `Adder`, `Subtractor` and `Multiplier` all inherit from a class named `Calculator` and all have a constructor that calls `super` appropriately.

## How does it know?

Lets say you have a `Customer` class that inherits from a `Person` class.

When you run the following code `Customer bob = new Customer('Bob', '123 Main St')`, the JVM will do the following:

- Find the `Customer` class
- Finds a constructor on `Customer` that matches the _method signature_ `String, String`
- Calls all of the appropriate superclass constructors based on how what's in the `Customer` constructor

So the same concepts of method _overloading_ apply to constructors.

## Seeing it in action

Why would you want to use inheritance in an application?  Inheritance lowers the cost of change by keeping your code DRY.  Take the following scenario:

- You have an app where you track Customers and Orders
- Both Customers and Orders make connections to databases, so they have private `query` methods
- One day you realize you want to log out the database calls, so you have to add log statements in _both_ classes
- Imagine that but times hundreds of classes

With inheritance, Customers and Orders could inherit from a `DatabaseQuery` class, and could _inherit_ the `query` method, such that when you make a change to the query method, it affects all classes.

## Resources

- http://stackoverflow.com/questions/14643362/overriding-constructors
- http://docstore.mik.ua/orelly/java-ent/jnut/ch03_04.htm
- https://dzone.com/articles/design-patterns-template-method
