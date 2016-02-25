# Encapsulation

## Objectives

By the end of this unit, you should be able to:

- Describe encapsulation
- Implement encapsulation in Java using private fields and public getter / setter methods

## Visibility

In order to understand Encapsulation, you must know about the concept of _visibility_.  Java allows you to define which classes, methods and variables are visible to which pieces of code.  The 2 main visibilites you should start out with are:

- public
- private

When a method / field is marked as `private`, only code _inside_ the class definition can see that method / field.

You can set the visibility of methods / properties like so:

```java
private int count = 0;

public void increment(int num) {
  count++;
}
```

To get familiar with visibility, run the following:

```
javac -d bin Encapsulation01.java && java -cp bin galvanize.Encapsulation01
```

You should see the following error:

```
error: allInFavor has private access in Proposal
```

Fix the `Encapsulation01.java` file.

## Private fields / public methods

The main idea behind encapsulation is that you want to make _private fields_, and provide _public methods_ that will internally modify those fields.

A private field looks something like this:

```java
class Person {
  private String name = "";
}
```

A getter method looks something like this:

```java
public String getName() {
  return name;
}
```

A setter method looks something like this:

```java
public void setName(String name) {
  this.name = name;
}
```

In the `Encapsulation02` example, the program accesses the `Proposal` object's fields directly.  Alter `Proposal` to have:

- a private name field
- a public getter method that returns the name
- a public setter method that sets the name to whatever is passed in

```
javac -d bin Encapsulation02.java && java -cp bin galvanize.Encapsulation02
```

You don't always need strict getter and setter methods (`getThing`, `setThing`).  Instead you could implement methods that more naturally fit into your domain.  In `Encapsulation03`, the program accesses the public `balance` property directly.  Make the following changes to `Account`:

- make `balance` private
- create a `balance()` method that returns the balance
- create a `deposit()` method that takes an int and adds money to the balance
- create a `withdraw()` method that takes an int removes that much from the balance
- refactor the `main` method to work, now that you've made those changes

```
javac -d bin Encapsulation03.java && java -cp bin galvanize.Encapsulation03
```

## Seeing it in action

Why would you want to encapsulate data in your object?  All Object Oriented practices exist to help keep the cost of change low.  Consider the following example:

In the previous example you saw an account.  The account had a `balance` field.  That field kept track of the balance.  Let's say that instead of keeping a balance field, you instead want to _calculate_ the balance based on the transaction history.

So now you want to store an internal array of transactions.  Then you want the concept of `balance` to be the sum of the transactions, not to be a field itself.

If your program exposed the `balance` field to the world, when you make this change you might have to refactor hundreds or thousands of lines of code throughout your program.  But if you have a `balance()` method, you can change the _internal_ implementation and the outside world won't even know that it happened.

Refactor the `Encapsulation03` example such that:

- there's an internal private Array field called `transactions`
  - NOTE: for now just hardcode it to be 10 items long
- `deposit()` should insert a positive integer
  - NOTE: you can't push into an array, so keep track of the last index with a private `index` variable
- `withdraw()` should insert a negative integer
- `balance()` should return the sum of all of the elements in the array

Notice how even though you did some major surgery to that class, the code that _used_ that class didn't change at all.

```
javac -d bin Encapsulation03.java && java -cp bin galvanize.Encapsulation03
```

## Resources

- https://docs.oracle.com/javase/tutorial/java/concepts/index.html
