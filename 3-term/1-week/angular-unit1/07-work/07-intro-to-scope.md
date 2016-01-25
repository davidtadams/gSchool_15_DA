## Scope

### What is it?

`$scope` is an object used for data binding that we can define methods and properties on. It is automatically injected into our controllers so that we can use it. Many times you will also see/hear `$scope` being defined as "the glue between the controller and the view".

Although it sounds complex, `$scope` is just a JavaScript object. Both the controller and the view have access to `$scope` so it can be used for communication between the two. When a controller is attached to the DOM via the `ng-controller` directive, Angular will instantiate a new controller object. A new child scope will be created and made available as an injectable parameter. This is what happens when we write code like this:

```js
angular.module("firstApp",[]).controller("FirstController", function($scope){
  // we can define all sorts of methods and properties on $scope here
})
```

## Where does it come from? $rootScope

Every application has a single root scope. All other scopes decent from `$rootScope` which we can inject into our controllers (by adding `$rootScope as a parameter to the callback function on the .controller method`)

```js
angular.module("firstApp",[]).controller("FirstController", function($scope, $rootScope){
  // now we can add things to $rootScope!
})
```

##### If you wanted to create a sample rootscope (this is what $rootScope essentially is) you could write something like this:
`var rootScope = angular.element(document).scope()`

Now you might be thinking, if everything comes from $rootScope then angular must be using some kind of inheritance? That is correct! Well, with one exception, custom directives that create their own (isolate) scope, but that's quite beyond the scope of this lesson (pun slightly intended).

All scopes are created with prototypal inheritance, meaning that they have access to their parent scopes. Any time that Angular can not find a method or property on the local scope, it will move up to its parent scope and try to look for the property or method there. If it can’t find what it's looking for, it will go to the parent scope’s parent and so on and so forth until it reaches the `$rootScope`. 

## A very useful tool - AngularJS Batarang

Before we venture forth with some of the more challenging aspects of `$scope`, let's install a very useful tool:

For a more in depth analysis of scopes, install the  
[AngularJS batarang](https://chrome.google.com/webstore/detail/angularjs-batarang-stable/niopocochgahfkiccpjmmpchncjoapek/related?hl=en-US) chrome extention. Make sure you are running a server when using this tool and have the `enable` checkbox checked. You can view all of the scopes and their methods and properties using this tool. It is exceptionally useful when dealing with parent/child scope relationships.

## Passing along scope to child controllers

Let's take a look at this example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div ng-app="myApp">
    <div>
      <input type="text" ng-model="data">
      {{data}}
    </div>
    <div ng-controller="ScopeController">
      <input type="text" ng-model="data">
      {{data}}
    </div>
  </div>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
<script>
	angular.module("myApp",[]).controller("ScopeController", function($scope){})
</script>
</body>
</html>
```

If you run this code, you will see something potentially unexpected when we type in the first input. The controller inherits from its parent scope (ng-app), and since it does not exist yet, once we start typing in the first input, a value for data will be assigned! The controller doesn't have a value for data defined so it inherits the value from its parent scope. Once we type in the second text box, it creates its own local data within its own scope and we are all fine, but this is not great. What are some ways you could fix this? 

A pretty simple solution would be to just not name each ng-model data, but what if we want it to be so that when we type in the second input box, it updates the first one and vise versa? Instead of passing scope from a parent to a child, we need some way to pass it back up from the child to the parent. How could you do that?

## Some tricky parts about scope

One way to solve our previous challenge would be to assign each ng-model to a property of the same object, but we have to make sure that our parent has access to that object so we put it in the `$rootScope`. Remember that we want to bind a child to a parent, so our parent needs to be aware as much as the child - this one was pretty tricky!

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div ng-app="myApp">
    <div>
      <input type="text" ng-model="view.info">
      {{view.info}}
    </div>
    <div ng-controller="ScopeController">
      <input type="text" ng-model="view.info">
      {{view.info}}
    </div>
  </div>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
<script>
	angular.module("myApp",[]).controller("ScopeController", function($rootScope){
  		$rootScope.view = {}
	})
</script>
</body>

</html>
```

How is it possible that this works, but when we didn't use an object - it failed? Perhaps it has something to do with the data type that we are using for our ng-model....and this brings us to one of the more tricky parts about scope. To quote the angular.js wiki on GitHub, "Scope becomes even more tricky when you try to 2 way data bind to a primitive defined on the parent scope from inside the child scope" - what does this mean? An example is worth 1000 words...

Let's take a look at the following code:

```html 
<!DOCTYPE html>
<html lang="en" ng-app="broken">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div ng-controller="MainController">
    {{message}}
    <div ng-if="number === 42">
        Secret Message: <input type="text" ng-model="message">
    </div>
  </div>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

And in our `script.js` file

```js
var app = angular.module("broken",[])

app.controller('MainController', function($scope) {
  $scope.number = 42
});
```

So what we're essentially doing here is checking to see if `$scope.number` is `42` and if it is, display an input where the user can type a secret message that will appear outside the `ng-if`. Pretty simple, but it doesn't do what we expect! Why do you think that is? 

The answer actually has to do with the way JavaScript works! Let's review prototypal inheritance for a quick minute and see if that helps solve our problem.

## Prototypal inheritance review 

Even before we get to the good stuff, let's make sure we have a thorough understanding what a `primitive` is.

From MDN: 

"All types except objects define immutable values (values, which are incapable of being changed). For example and unlike to C, Strings are immutable. We refer to values of these types as "primitive values"."

A primitive in JavaScript includes `undefined`, `null`, `boolean`, `number` or `string` and `Symbol` (new in ES2015).

MDN continued....

"When it comes to inheritance, JavaScript only has one construct: objects. Each object has an internal link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. null, by definition, has no prototype, and acts as the final link in this prototype chain."

## An Example

This example is heavily borrowed from [here](https://github.com/angular/angular.js/wiki/Understanding-Scopes) if you would like to see a more detailed view with some awesome diagrams.

I **highly** recommend running this as a separate javascript file and loading it in the browser, or making this a snippet in the sources tab.

```js
var parentScope = function(){
 this.aString = "parent string"
 this.aNumber = 100
 this.anArray = [10,20,30]
 this.anObject = {property1: "parent prop1"}
 this.aFunction = function(){return 'parent output'}
}

// let's create a new instance of the parentScope
var parent = new parentScope

var childScope = function(){}

// let's set the prototype of the childScope to be the parent instance
// we have normally not seen this, because we have inherited from another constructors prototype and the properties/methods of an instance
childScope.prototype = parent

// let's create a new instance of the childScope
var child = new childScope

child.aString === 'parent string'
child.anArray[1] === 20
child.anObject.property1 === 'parent prop1'
child.aFunction() === 'parent output'

// do not consult the prototype chain!
child.aString = 'child string'

// consult the prototype chain!
child.anArray[1] = 22
child.anObject.property1 = 'child prop1'

// do not consult the prototype chain!
child.anArray = [100, 555]
child.anObject = { name: 'Mark', country: 'USA' }

delete child.anArray
child.anArray[1] === 22  // true

```

In short, when we bind to a primitive, we do not consult the prototype chain and we break the way that JavaScript tries to find whatever data we are looking for. This unlinking of the prototype chain makes it very difficult to do our data binding correctly.

Still confused? Take a look at [this](http://stackoverflow.com/questions/14049480/what-are-the-nuances-of-scope-prototypal-prototypical-inheritance-in-angularjs) post on Stack Overflow.

### Additional Resources

[http://stackoverflow.com/questions/27881291/angularjs-scope-prototypal-inheritance-primitive-vs-objects](http://stackoverflow.com/questions/27881291/angularjs-scope-prototypal-inheritance-primitive-vs-objects)

[http://jsbin.com/xexurukiso/1/edit/?html,css,js,console,output](http://jsbin.com/xexurukiso/1/edit/?html,css,js,console,output)

[http://www.smashingmagazine.com/2015/01/angularjs-internals-in-depth/](http://www.smashingmagazine.com/2015/01/angularjs-internals-in-depth/)

## So how do we fix this? 

From the creator of Angular, Misko Hevery:

<blockquote>
"If you use ng-model there has to be a dot somewhere. If you don't have a dot, you're doing it wrong" 
</blockquote>

Simply put - ALWAYS HAVE A DOT. This means that no more primitives will be assigned to $scope! That's true for ng-model, but also for ALL inherited scopes! 

Here is a solution to our previous issue with the secret message and the number 42:

```html
<!DOCTYPE html>
<html lang="en" ng-app="broken">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div ng-controller="MainController">
    {{view.message}}
    <div ng-if="view.number === 42">
        Secret Message: <input type="text" ng-model="view.message">
    </div>
  </div>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

```js
var app = angular.module("broken",[])

app.controller('MainController', function($scope) {
  $scope.view = {} // this is commonly also called vm for ViewModel, we will see more about this later in the curriculum
  $scope.view.number = 42
});
```

Now that we have an understanding of how to fix this issue - here are a few other built-in directives to be aware of, as they also create their own scope.
 
- ng-controller
- ng-repeat 
- ng-if (actually destroys the scope every time it is false and creates a new one every time it is true - be careful with this one!)
- ng-view
- ng-switch
- ng-include

Still not understanding this concept? No worries, check out  [this](http://blog.carbonfive.com/2014/02/11/angularjs-scopes-an-introduction/) excellent tutorial on scopes and [this](https://egghead.io/lessons/angularjs-the-dot) video from egghead

If you want to read a bit more in depth, [this](https://github.com/angular/angular.js/wiki/Understanding-Scopes) article is an incredibly in depth walkthrough of how scope works 

## Exercises

### Answer the following questions

- What is $rootScope?
- Explain how $scope is passed from a parent to child controller 
- List five built in directives that create their own scope
- "Scope becomes tricky when you try to 2 way data bind to a primitive defined on the parent scope from inside the child scope" - what does this mean?

### Complete the following

- Create an example of some buggy angular code where you try to two way data bind a primitive defined on the parent scope from inside the child scope
- Fix your example above, how did you fix it? What did you have to do to make it work?

