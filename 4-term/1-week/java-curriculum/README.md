# Classical Object Oriented Programs in Java

## Learning Standards

- Classical object-oriented programming
- Writing object-oriented programs in Java

## Intro

Java is a statically typed, classical inheritance programming language used in a wide array of environments. Today, Java can be compiled and run on virtually any hardware, ranging from IoT and mobile devices (Android) to large, distributed environments or web applications.

We'll use Java Standard Edition (Java SE) which is the core functionality of the Java programming language. Other editions exist including Java Enterprise Edition (Java EE) which extends Java SE to add additional APIs and a runtime environment for "developing and running large-scale, multi-tiered, scalable, reliable, and secure network applications." Java Micro Edition (Java ME) is a subset of the Java SE API and includes other libraries useful for developing applications for small devices.

Later, we'll use Gradle which is a build tool for compiling Java applications and loading any necessary dependencies. You can think of it like NPM and Gulp.js rolled into one.

## Setting Up a Java Development Environment

1. Install [Java8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).
Under "Java SE Development Kit 8u74", click the link beside Mac OS X 64 to download the correct package.
To confirm, run `java -version`. The computer should display `java version "1.8.0_XX"`.
1. Install [Gradle](http://www.gradle.org/) using `brew update` then `brew install gradle`.
To confirm, run `gradle -version`. The computer should display `Gradle 2.XX`.
1. [optional] It's also recommended to add a Java linter for pre-compile error checking in your editor. A good one for atom is 'linter-javac' which will check for errors when java files are saved.

## Progression

- [Unit 1 - Java for Javascript Developers](./Unit-1-Syntax)
- [Unit 2 - Encapsulation](./Unit-2-Encapsulation)
- [Unit 3 - Inheritance](./Unit-3-Inheritance)
- [Unit 4 - Polymorphism](./Unit-4-Polymorphism)
- [Unit 5 - junit and Gradle](./Unit-5-junit)


### References
- [The Java Programming Language Platforms](http://docs.oracle.com/javaee/6/firstcup/doc/gkhoy.html)
- [Getting Started with Gradle](http://gradle.org/getting-started-gradle-java/)
