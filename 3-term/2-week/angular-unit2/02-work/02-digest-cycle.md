## Angular JS internals 

So now that we have an stronger understanding of what angular is, how to structure larger applications and most importantly, what `$scope` is (and how to avoid some pitfalls with it), let's learn a little bit about how angular works under the hood. But before we can really get started, we need to be aware of a few essential methods that can be called on `$scope`.

`$scope.$watch` - Whenever we need to watch a particular variable we place a watch on it. This is very similar to an event listener where we are watching for a change. This is also used quite heavily internally by angular for two way data binding. Whenever a variable gets changed, the watch is initiated.

`$scope.$digest` - In the background, there is a digest cycle running which monitors what variables are getting changed that are being watched. We'll cover a bit more on the digest cycle, but the method that is constantly called to update data in the digest cycle is `$digest`.

`$scope.$apply` - Sometimes we see that scope data is not getting updated on our HTML content. This can happen when we are using APIs that are external to angular (`setTimeout`, `XHR`). When we are not able to get updated data, we have to forcefully fire a digest cycle, this is where $scope.$apply helps us out. While this sounds quite helpful, you should be using this **VERY INFREQUENTLY**. 

You can check to see if the digest cycle is running by examining `$scope.$$phase`. If you see that this returns `"$apply"` or `"$digest"`, the cycle is running and an exception will be thrown if you try to call `$scope.$apply()`, otherwise you can call `$scope.$apply` and your data will be updated.

### What is the difference between $scope.digest and $scope.apply

Use this code example, and see if you can figure this out:

```html
<!DOCTYPE html>
<html lang="en" ng-app="applydigest">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body >
  <div>
    From $rootScope: {{name}}
  </div>
  <div ng-controller="MainController">
    From $scope: {{age}}
  </div>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

```js
angular.module("applydigest",[]).controller("MainController", function($rootScope, $scope){
  $rootScope.name = "Fido"
  $scope.age = 3

  // this is for example purposes
  // NOTE - there is a $timeout which handles $apply for you
  setTimeout(function(){
    $rootScope.name = "Lassie"
    $scope.age = 10
    // $scope.$digest()
    $scope.$apply()
  },1000)
})


```

When you call $scope.digest it only runs the digest loop from that particular scope, but when you call $apply, that uses the $rootScope and goes through all scopes in the application.

If you have many watches and scopes, and you know that you only need to modify a single scope it is best to use $digest, otherwise use $apply. 

## How angular extends the browser + the digest cycle

Let's examine this chart:

![https://docs.angularjs.org/img/guide/concepts-runtime.png](https://docs.angularjs.org/img/guide/concepts-runtime.png)

In this diagram, the section (left) is the browser. Events are put on the Event Queue and when they fire, they trigger callbacks. We have seen this before in our examination of the event loop (think back to the stack/heap/queue). Ordinarily, a callback will go modify the DOM and the browser will render the modified DOM, but with angular things are a bit different.

When we are dealing with an angular application, all of the callbacks on the event queue that are relevant to angular (anything that we would not manually have to call `$apply` on) have the $apply function in them. When the event fires, it goes into the JavaScript context and JS starts processing it, JS then runs $apply and goes into the AngularJS Context (the yellow box), which is the digest loop. This modifies the DOM and it is rendered by the native browser.

When the digest loop runs, it always runs against a `scope`. As we saw before, some angular directives create their own scope and when the digest loop runs, it runs against the scope for that specific directive. 

### What is this $digest loop?

The digest loop is what runs after the $apply function brings a callback into the angular context. 

The digest loop has two sub-loops in it. One is the `$watch list` and the other is the `$evalAsync`

`$watch list` - This is the where angular implements dirty checking. $digest runs iteratively until DOM is stable (it is not dirty).

#### Dirty Checking

Dirty Checking is a process to check if the value of an expression/variable has changed. Dirty Checking simply compares an old value with a new one to see if it has changed. Angular uses Dirty Checking to determine whether the value of a variable or expression in its scope has changed or not. If it has, it does the required operation. You can read more about it [here](http://stackoverflow.com/questions/24698620/dirty-checking-on-angular)

### Back to the chart:

![https://docs.angularjs.org/img/guide/concepts-runtime.png](https://docs.angularjs.org/img/guide/concepts-runtime.png)

The `$watch list` is observing elements in the scope and when they change and angular checks them (through `dirty checking`) it runs the callbacks that are associated with those watches that are put on scope elements. You can issue your own $watch function (that's what we saw above!) inside of a $scope, but right now we won't be doing that. It's important to note that angular does this for us in almost all of the examples we have seen.

`$evalAsync loop` - whatever we have called with `$evalAsync()` is guaranteed to run on the next digest cycle. This is a good substitute for setTimeout(which is not an Angular construct). You can read more about `$evalAsync()` [here](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$evalAsync)

### Additional reading on the scope life cycle and digest cycle

[http://stackoverflow.com/questions/9682092/angularjs-how-does-databinding-work/9693933#9693933](http://stackoverflow.com/questions/9682092/angularjs-how-does-databinding-work/9693933#9693933)

[https://docs.angularjs.org/guide/scope#scope-life-cycle](https://docs.angularjs.org/guide/scope#scope-life-cycle)

[https://www.youtube.com/watch?v=3DuyyNgXqsE](https://www.youtube.com/watch?v=3DuyyNgXqsE)

### The Angular Parser and Compiler

In short, angular extends the browser in two ways. The event loop (which we just saw) and the other is the parser (using {{ }}). If you are inside of an angular program, angular parses these directives. The parser also sets watches on page elements and on any kind of interpolation using {{ }}.

Let's look at this chart:

![https://docs.angularjs.org/img/guide/concepts-startup.png](https://docs.angularjs.org/img/guide/concepts-startup.png)

This shows how the angular parser gets control when a page is loaded in the browser. The browser loads the HTML and builds the DOM out of it, when the browser finishes, it issues a DOMContentLoaded event. Angular, if there is an `ng-app` directive, runs a callback on the DOMContentLoaded event and the compiler runs and looks for angular directives on the page and it builds HTML based on the directives and merges it into the DOM. 

The compiler can also run whenever the `$compile` function is executed (when we discuss routing and the router sees a new page for the first time it will call `$compile`).

You can read more about this process (Bootstrapping) [here](https://docs.angularjs.org/guide/bootstrap)

## Exercises

### Answer the following questions

- What is the difference between `$scope.apply` and `$scope.digest`?
- What is the digest cycle?
- What is the scope life cycle? (this will require some additional reading)
- What does "bootstrapping an angular app" mean?

