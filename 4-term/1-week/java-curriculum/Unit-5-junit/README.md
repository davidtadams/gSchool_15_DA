# Overview

## Objectives

By the end of this unit, you should be able to:

1. Describe what a build system is (Gradle)
1. Interpret error messages
1. Work with Arrays and HashMaps
1. Write simple type casting
1. Write/consume interfaces (Describe polymorphism/abstraction)
1. Write and run junit tests

## Running the Tests

COMMENT OUT the tests that you're not working on. After completing one test and receiving a `BUILD SUCCESSFUL` message from gradle, uncomment the subsequent test, one at a time.  

Make sure you have gradle installed:

```
brew update
brew install gradle
```

Configure the gradle build daemon, for faster builds:

```
touch ~/.gradle/gradle.properties && echo "org.gradle.daemon=true" >> ~/.gradle/gradle.properties
```

Run a single test with:

```
gradle test --tests ZombieTest
```

Run all tests from the root folder with:

```
gradle test
```

## Challenge #1 - Zombie Apocalypse

![Zombie Apocalypse](http://vignette2.wikia.nocookie.net/zombie/images/4/41/Zombiegroup02.jpg/revision/latest?cb=20100111201702)

My worst nightmare has come true-- Zombies are taking over the world! Turns out, Galvanize students are the only ones who can help. Good thing we've got a bunch of those.

**Your task:** Write a program that fulfills several tests developed by the CDC so we can keep track of the Zombies, identify their victims, and learn Java doing it! It's the only way we can end the carnage and reestablish peace. Get going!

### CDC's Instructions

You should see a folder named `src`, which contains a `main` folder and a `test` folder. The former contains the code you will be implementing and the latter contains the test file you'll be checking your work against. Explore both folders on your own.

Let's go over the `ZombieTest.java` file first.

```java
@Test
public void createZombie_ShouldHaveName() {
	Zombie zombie = new Zombie("Killer");
    assertEquals("Killer", zombie.name);
}
```

You'll see that the tests start with an `@Test` suffix. Each test is a method whose name gives a good hint as to what should happen if the test method is executed successfully. For example, `createZombie_ShouldHaveName()` means that once you instantiate a Zombie, it is expected that it will have a name. The validity of the test is measured with the `assertEquals()` method, which takes two parameters, testing to see if the parameters are the same, using the following syntax: `assertEquals(expected, actual)`.

## Challenge #2 - Porting JavaScript to Java

Checkout the `js-src` directory.  You'll see a fully-implemented `car_spec.js` and `car.js` file.

Your job is to reimplement that in JavaScript.  Note that not only is the implementation incomplete, but not all of the tests have been ported over.  So your job is to add the two missing tests, and also make all of the tests pass.

## Resources

* https://docs.gradle.org/current/userguide/java_plugin.html#sec:java_test
