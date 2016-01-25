#Dependency Injection

### What is it?

From [Wikipedia](https://en.wikipedia.org/wiki/Dependency_injection): 

"In software engineering, dependency injection is a software design pattern that implements inversion of control for resolving dependencies. Dependency injection means giving an object its instance variables. Really. That's it."

Hmm...that might not be terribly helpful (but if it is - feel free to skip ahead to the bottom section!). If not - let's try this again.

### A bit more about DI

In order to understand more about dependency injection, we have to first understand where the need for this pattern came from. The need for this pattern came when applications started to become more "modular".

As a quick refresher - when writing modular code, we break apart our application into smaller pieces (that are not always related to each other) so that we can write more testable and maintainable code. You can read more about modular programming [here](https://en.wikipedia.org/wiki/Modular_programming).

Now this all sounds wonderful, but in order to write more modular code, we need a set of rules to govern how best to do this. One of those rules is the **Separation of Concerns**. You might have heard about this before, if not let's see what Wikipedia has to say about it:

"In computer science, separation of concerns (SoC) is a design principle for separating a computer program into distinct sections, such that each section addresses a separate concern. A concern is a set of information that affects the code of a computer program. A concern can be as general as the details of the hardware the code is being optimized for, or as specific as the name of a class to instantiate. A program that embodies SoC well is called a modular program. Modularity, and hence separation of concerns, is achieved by encapsulating information inside a section of code that has a well-defined interface. Encapsulation is a means of information hiding.

**Exercise** - What design patterns and programming techniques have you seen/used so far that help separate concerns?

**Exercise** - Define the following terms

- Single Responsibility Principle
- Interface (you can start [here](http://stackoverflow.com/questions/3710275/does-javascript-have-the-interface-type-such-as-javas-interface))
- Duck Typing 
- Law of Demeter
- Tight Coupling (in contrast with Loose Coupling)
- Separation of Concerns (in your own words :P )

After reading about Separation of Concerns, the Single Responsibility Principle and Law of Dememter - you now have a much better understanding of what writing modular entails (and how it can be done in languages that support or do not support interfaces!). These terms will appear all over programming documentation and in interviews as well - make sure you at least understand them at a high level!

### Now we're getting somewhere!

Now that we are building an understanding of what modular code is - we are also beginning to understand that in order for us to write modular code, we need our small containers (modules) to be dependent upon other modules! This means that when we are modular, we are also dependent! 

So how can we share dependencies amongst our modules and still write clean code?

From the angular docs:

There are only three ways a component (object or function) can get a hold of its dependencies:

1. The component can create the dependency, typically using the `new` operator.
2. The component can look up the dependency, by referring to a global variable.
3. The component can have the dependency passed to it where it is needed.

**EXERCISE** - What are some potential issues with the first two options?

The first two options of creating or looking up dependencies are not optimal because they hard code the dependency to the component. This makes it difficult, if not impossible, to modify the dependencies. This is especially problematic in tests.

The third option is the most viable, since it removes the responsibility of locating the dependency from the component. The dependency is simply handed to the component.

In angular, we take our dependencies (which we call services - we will learn more about these in another unit) and inject them into a dependent object (controller/directive/filter). This separates the creation of the dependency from its behavior and enables the client to abide by the single responsibility principle. 

We are not going to go into how angular implements dependency injection under the hood, but if you would like to learn more about how this works, check out these articles: 

[https://docs.angularjs.org/guide/di](https://docs.angularjs.org/guide/di) 

[https://github.com/angular/angular.js/wiki/Understanding-Dependency-Injection](https://github.com/angular/angular.js/wiki/Understanding-Dependency-Injection) 


### So where do we see this in action?

We might have taken this for granted a bit, but think about a simple example where we create a controller - maybe something like this.

```js
angular.module('myApp', []).controller('FirstController', function($scope){
	// now we can do all sorts of cool things with scope
})
```

We see in this example, we are injecting the `$scope` service to our controller, but something seems a bit odd....where did `$scope` come from? And how is it possible that if I just pass in `$scope` as a parameter (or even `$rootScope`), angular will just know what it is? Even more - If we don't pass in `$scope` as the first parameter, it will still work! Let's see this example:

```js
angular.module('myApp', []).controller('FirstController', function($rootScope, $http, $q, $scope){
	// I have now added a whole bunch of dependencies (don't worry if you don't know what $http and $q are, we'll get there) - and the order in which I put the in does not matter!
})
```

So how does angular possibly know how to find each parameter correctly and create the right object?!

### How does this happen?

We just put $scope in our controller and it didn't even matter if it was the first or fifth parameter - Angular was just able to find it and give us the right data! How did that possibly happen? In order to understand this we need to first review JavaScript functions and strings.

Let's assume we have a function called sayHi that takes in a few parameters:

```js
var sayHi = function(firstName, lastName, favoriteColor){
	return "Hi " + firstName + " " + lastName + ". It looks like your favorite color is " + favoriteColor
}
```

We can call this function, but when we just type in `sayHi` in our console, we will see the actual function definition, and if we call `.toString()` on this function, we can see a representation of this function as a string! That's incredible! Here's why:

This means that if we can take any function and get its string representation - we could parse that string and figure out the expected names of the parameters to the function. If we do this correctly, it does not matter what order the parameters come in as, as long as we know what their value is!

So how does angular do it? Let's open up an angular application and add the code above to the console and then type the following line (this code is for demonstration purposes - you will most likely **never** write code like this in a production application):

`angular.injector().annotate(sayHi)`

It should return: 

`["firstName", "lastName", "favoriteColor"]`

Now imagine that instead of `["firstName", "lastName", "favoriteColor"]` we had `["$scope", "$rootScope"]`. Angular would now be able to assign the correct values to each of these and their order would not make any difference! Using this technique (of calling `.toString()` on a `function`), angular can create an object and pass it in that spot. So all we have to do is name our parameter correctly and angular can find wherever it is and add the correct value for us!

### Different ways to define dependencies 

We have been using __implicit annotation__ so far. You can read more about it in the following exercise:

**EXERCISE:** Research and figure out the other two ways by reading the documentation on Dependency Annotation [here](https://docs.angularjs.org/guide/di)

Angular supports 3 ways to annotate our code (define dependencies):

1.  Implicit annotation
2.  Inline array annotation
3.  $inject property annotation

__The implicit annotation dependency injection will break when you minify your code.__   This happens because minification tools rename variables to a something smaller, but the minification tool doesn't know that the variable name in the function is meaningful to angular.

For now, use inline array annotation (it is the most commonly seen and is stated as "preferred" by the angular docs). In more recent style guides however, it is recommended that the `$inject` property be used. 

### Answer the following questions

- What is dependency injection? 
- How does angular implement dependency injection?
- What are the three ways to annotate our code with service names (dependencies)? Write three code examples with each one of these options.

### Exercises

```js
app.controller('SampleController', function($scope, $rootScope){
  $scope.val = "some value from $scope";
  $rootScope.val = "some value from $rootScope"
});
```


- In the above example (`SampleController`) does the order of the dependencies matter?  Does `$scope` have to come before `$rootScope`?  Do the names matter?  Could we have named them something else?

- Look at an angular app you have made previous (reddit clone or your portfolio site).  What dependencies are there?  Where do you see dependencies other than the controller?

- In production code, you typically want your javascript file to be as small as possible so that it can be downloaded faster.  To make the files smaller, developers minify their js files.  Find a minification tool and minify your js code.  Update your html file so that it now points to your newly minified js files.  Does your angular app still work?  If it stopped working, what is the problem?

- Fix the app you minified earlier to use inline array annotation.  Minify the javascript files again.  Verify that the code still works when using the minified js.

- When using inline array annotation does the order of anything matter?  What order should match?

**BONUS** - write a function that takes in another function as an argument and returns an array of the function's parameters as strings. 


### Additional Reading/Watching

[A great video on DI as a concept ](https://www.youtube.com/watch?v=IKD2-MAkXyQ)

[A great video on DI in Angular ](https://www.youtube.com/watch?v=7VFUQCKYRbg)

[http://stackoverflow.com/questions/130794/what-is-dependency-injection](http://stackoverflow.com/questions/130794/what-is-dependency-injection)

[Angular Docs on DI](https://docs.angularjs.org/guide/di)


