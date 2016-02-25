# Classical Object Oriented Programming

## Objectives

By the end of this unit, you should be able to:

- Describe and give examples polymorphism
- Implement polymorphism using subclasses
- Implement polymorphism using interfaces

## Abstract Classes

In order to understand Polymorphism, it's helpful to understand the Abstract classes.  Abstract classes are classes that can define fields and methods, but cannot be instantiated.  You can define Abstract classes like so:

```java
abstract class Importer {
  int importCount = 0;
  abstract void getCount();
}

class JSONImporter extends Importer {
  public void getCount(){
    System.out.println(importCount);
  }
}
```

## Polymorphism and Inheritance

Polymorphism is a power software design principle.  Polymorphism is a _way of programming_, not an explicit language feature.  You can program polymorphic code in either a Functional style or an Object-Oriented style.  You can write polymorphic code in statically typed or dynamically typed languages.

Polymorphism consists of two parts:

- A method or statement that can works with objects of _different types_
- A number of different _types_ that methods with the same _method signature_

Polymorphism describes a way for a single statement to call the same method on multiple different instances.  Here's an example:

```java
abstract class SomeBaseClass {
  abstract void doStuff();
}

class SomeClass extends SomeBaseClass {
  void doStuff(){
    System.out.println("Doing stuff");
  }
}

class SomeOtherClass extends SomeBaseClass {
  void doStuff(){
    System.out.println("Doing other stuff");
  }
}

class Runner {
  void run(SomeBaseClass o) {
    o.doStuff();
  }
}

class Junk {
  public static void main(String[] args){
    Runner runner = new Runner();
    runner.run(new SomeClass());
    runner.run(new SomeOtherClass());
  }
}
```

**How is Polymorphism different from Inheritance?**

Inheritance is one way to _achieve_ polymorphism, if and only if

- methods are defined in the base class
- only behaviors are overridden in the sub classes (not method signatures)

There are other ways to achieve polymorphism, such as Interfaces.

**Do it yourself**

Run the following command:

```
javac -d bin Polymorphism01.java && java -cp bin galvanize.Polymorphism01
```

Now make all classes inherit from a common abstract base class, and remove the `instanceof` / `if` statements.

NOTE: `import` is a keyword, so if try to use `import` as a method name, it will raise a cryptic syntax error.

## Polymorphism and Interfaces

Inheritance is one way to achieve polymorphism.  Java provides another way to achieve polymorphism: Interfaces.

Interfaces are similar to Abstract Classes, with a few key differences:

- they cannot define fields (only methods)
- they cannot define any implementation, just method signatures
- classes can _implement_ several interfaces, whereas they can only _extend_ one parent class

```java
interface Importer {
  void doImport();
}

class JSONImporter implements Importer {
  public void doImport(){
    System.out.println("Importing JSON");
  }
}

class XMLImporter implements Importer {
  public void doImport(){
    System.out.println("Importing XML");
  }
}

class CSVImporter implements Importer {
  public void doImport(){
    System.out.println("Importing CSV");
  }
}
```

Run the following command:

```
javac -d bin Polymorphism02.java && java -cp bin galvanize.Polymorphism02
```

Now create a similar fix as you did to `Polymorphism02` but use an interface instead.

## When to use polymorphism

Any time you see `instanceof` in your code, you should consider whether you can replace it with polymorphism.

Polymorphism forms the basis of non-declarative Dependency Injection.  For example using an interface:

```java
interface Importer {
  abstract void importData();
}

class CSVImporter implements Importer {
  public void importData() {
    System.out.println("Importing!!");
  }
}

class ETL {
  Importer importer;

  ETL(Importer importer) {
    this.importer = importer;
  }

  void run() {
    this.importer.importData();
  }
}

class Junk {
  public static void main(String[] args){
    ETL etl = new ETL(new CSVImporter());
    etl.run();
  }
}
```

## Resources

- http://docs.oracle.com/javase/tutorial/java/TOC.html
- https://en.wikipedia.org/wiki/Polymorphism_(computer_science)
- http://www.codejava.net/java-core/the-java-language/12-rules-of-overriding-in-java-you-should-know
- http://www.artima.com/objectsandjava/webuscript/PolymorphismInterfaces1.html
