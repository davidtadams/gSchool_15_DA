# Intro to Controllers

In MVC, controllers provide properties and functionality for use in the view. Angular controllers are no different. They are just functions that provide data for use in the views.

Angular takes care of the hard part - connecting our controllers and views together. All we have to do is add various properties to the `$scope` and use them inside of our views.

When a new controller is created, Angular automatically gives it a brand new `$scope`. The `$scope` object is a JavaScript object that glues together controllers and views. Properties that are on the `$scope` object are available to both the view and the controller. *Don't worry. This will make more sense after a few examples!*

**All properties added to the `$scope` are automatically available in our view.**

Let's write our first controller! Inside a new JS file called `app.js` add

```javascript
var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope){
  $scope.name = "Severus Snape";
})
```

The first line tells Angular to create a **module** named `firstApp`. `angular.module('firstApp', [])` returns a new module which we use on the next line when we call `.controller()` on `app`.

Back in our view, we need to specify which module our `ng-app` should use. Update the `<html>` element to `<html ng-app="firstApp">`.

**Question: What are Angular modules? Why should we use them?**

We're declaring a new controller named "MyFirstController". The first argument to `.controller()` is just the name of the new controller, and the second argument is a function that defines the functionality of the controller. Inside of "MyFirstController", we're adding a `name` property to the `$scope` with the value "Severus Snape".

> Note: This is just one way of writing a controller and adding properties to the `$scope`. We will discuss some others in the "Controllers Revisited" lesson.

Now let's use the `name` property inside of our view.

Before we can access the `name` property, we need to specify which part of our template is "inside" of of our controller. To do that, we use the directive `ng-controller`.

In `index.html`, add the following code:

```html
<div ng-controller="MyFirstController">
</div>
```

Just like how `ng-app` declares that the elements inside of a particular element are part of an Angular app, `ng-controller` declares that the elements in side of a particular element belong to a controller.

Now we have access to any properties that we set inside of "MyFirstController", as long as we access them within the `<div>`.

Let's reuse our code from the very first example. Try this

```html
<div ng-controller="MyFirstController">
  <h1>My name is: {{name}}</h1>
  <input ng-model="name" type="text" placeholder="What is your name">
</div>
```

When you run this in your browser, you'll see that the initial value that we set for `name` in our controller is displayed both inside of the text `input` and `h1` tags. When we refer to `name`, Angular automatically looks for a property called `name` on the `$scope`.

Try moving the `h1` and `input` tags somewhere outside of the `div`. Notice that we no longer have access to the initial value of "Severus Snape".

**Why doesn't this cause an error message?**

To wrap up, according to the Angular Docs you should use controllers to:

* Set up the initial state of the `$scope` object.
* Add behavior to the `$scope` object.

In essence, they manage the view.

**EXERCISE**

Requirements:

1. Write another controller called "ExercisesController" which you will use for the next 3 exercises.
1. Add a property called `FavColor` and give it an initial value of your favorite color. Display it in the view.
1. Add another property called `secondsInACentury`. It should be equal to the number of seconds in a century (don't worry about leap years and leap seconds). Make sure you actually calculate the answer with code, instead of just looking it up. Finally, display the answer in your template inside of an `h3` tag. Use a built-in filter to format the huge number with commas in the right place.
1. Create a property called `rightNow` in the controller that is equal to the current time (use a built-in JS function to find the time). Display it in the view and format it nicely (using a built-in filter) so that it looks something like this:

```
Sunday, October 20, 2015
```

**EXERCISE**

Let's refactor your Mad Libs app to use a controller. The end product should look and feel *exactly* the same as the original.

Start by adding an external JavaScript file, *main.js*, to create a module with a controller. Utilize `ng-app` and `ng-controller` to link both back to the HTML document. Then abstract out the all the logic from the HTML to the newly created controller.

## Questions

* What is `$scope`?
* What are Angular modules? What's the syntax for defining a module?
* Why do we pass in `$scope` as an argument to controller functions?
* In Express, what are Angular controllers most analogous to?

## Resources:

* [Controllers Docs](https://docs.angularjs.org/guide/controller)
