# Custom Directives: Part 2

## DOM Manipulation 

Directives become much more powerful when they start manipulating the DOM.  Typically, you will be controlling the DOM with Angular's `link` method. (There's a related method, called `compile`, which we won't cover. Research it on your own if you're curious!)

The `link` method is used to manipulate the DOM in your directive.  Below is a directive that uses `link` to change the background color of an element whenever it is moused over.

`app.js`

```js
var app = angular.module('mouseOverDirectiveApp', [])

app.directive('gsChangeBackground', function() {
  return {
    link: function(scope, element, attrs) {

      var oldColor = element.css('background-color');

      element.on('mouseenter', function(event) {
        element.css('background-color', 'yellow');
      });

      element.on('mouseleave', function(event) {
        element.css('background-color', oldColor);
      })
    }
  };
});
```

`index.html`

```html
<!DOCTYPE html>
<html ng-app="mouseOverDirectiveApp">
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular.js" type="text/javascript"></script>
<script src="app.js" type="text/javascript"></script>
</head>
<body>
  <div gs-change-background style="background-color: red">Hello World!</div>
</body>
</html>
```

**EXERCISE**

How is the code able to call `element.on` and `element.css`?  What type of object is it?  Look in the angular docs for all available methods.

**EXERCISE**

The `gsChangeBackground` directive could be more customizable.  Change the code so that the user of the directive can set an attribute on the tag that specifies what the new background color should be on mouse enter.  Also, add the ability for the user to change the text color on mouse enter as well.  If no new text color is specified, the text color should not change.  Lastly, our directive only makes sense in one context.  Add a restriction to the directive so that it can only be used in the correct way.  You'll have to figure out which way that is!

## Directive Controllers

You can attach controllers to your custom directives by using the `controller` property. Adding a controller to a directive can be a helpful way to refactor out business logic that might otherwise live inside of your `link` method, making it more difficult to read and maintain.

Here's the syntax for defining a controller from within your directive:

`index.html`

```html
<!DOCTYPE html>
<html ng-app="circleApp">
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular.js" type="text/javascript"></script>
<script src="app.js" type="text/javascript"></script>
<style>
  .circle {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    line-height: 100px;
    text-align: center;
  }
</style>
</head>
<body>
  <gs-big-red-circle></gs-big-red-circle>
</body>
</html>
```

`app.js`

```js
var app = angular.module('circleApp', []);

app.directive('gsBigRedCircle', function() {
  return {
    controller: ['$scope', function($scope) {
      $scope.sayHi = function() {
        alert("Hi! Thanks for clicking on me!");
      };
    }],
    template: '<div class="circle">Click me!</div>',
    link: function(scope, element, attrs) {

      element.on('click', function() {
        scope.sayHi();
      });
      
    }
  };
});
```

Notice that our `link` method has access to the `sayHi` method from the directive's controller.

**EXERCISE**

Create a simple dice rolling app in angular:

[![https://gyazo.com/09b4a777a7049846b6ba0976e6972fe6](https://i.gyazo.com/09b4a777a7049846b6ba0976e6972fe6.gif)](https://gyazo.com/09b4a777a7049846b6ba0976e6972fe6)

When the user hovers over the square, the cursor should change to a pointer, and when the user clicks, a random number between 1 and 6 should display. 

Use a custom directive for the die, and include a controller for your directive which encapsulates the logic of generating the random number. Include a `link` method to handle all DOM manipulation. Note: you should not have a `controllers.js` file for this exercise!

**Bonus** Use images rather than numbers, so that it looks like an actual die!
**Bonus** Keep track of how many times each value occurs in a table that's displayed to the user.
**Bonus** Include a dropdown that lets the user select how many dice they would like to roll (e.g. rolling two dice at once, rather than one).

## Nested Directives

Sometimes you may want to include one directive inside of another; in such a case, you might also want the child directive to have access to the parent directive's controller. In order to do this, you need to use the `require` property on the child directive. 

For example, suppose you have a custom directive called `gs-parent`, and another custom directive called `gs-child`, and that your template for `gs-parent` includes a `gs-child` directive inside of it. If the parent directive's controller has a method you want to access from the child directive, you can do something like this in your `directives.js`: 

```js
app.directive('gsParent', function() {
  return {
    templateUrl: 'partials/parent.html',
    controller: ['$scope', function($scope) {
      $scope.parentMessage = function() {
        alert("I live on the parent!");
      };
    }],
  };
});

app.directive('gsChild', function() {
  return {
  	templateUrl: 'partials/child.html',
    link: function(scope, element, attrs) {
      element.on('click', function() {
        scope.parentMessage();
      });
    }
  };
});
```

**EXERCISE** Flesh out the rest of this example app to make these directives work.

Note that while the above code works, it's not a great practice because we haven't concerned ourselves with isolating scope. It's possible to require a parent directive's controller in a child directive using the `require` property. There are plenty of resources online if you'd like to learn more about this; one relatively short tutorial can be found [here](https://thinkster.io/egghead/directive-communication).

**EXERCISE** Create a simple todo app. Users should be able to add and remove todos to a list. Your app should have two directives: one for the list of todos, and one for each individual todo. Inside of the first directive, you should create controller methods to add and delete posts, and then use those methods in the child directive.

**Bonus** Refactor your todo app to `require` the parent directive's controller in the child directive.


## Transclusion

Transclusion isn't something you need to worry too much about right now, but it's a term you'll run into pretty frequently when reading up on custom directives in angular, so it's good to understand what the term means. To understand the concept, let's look at a quick example.

Suppose you're building a photo sharing app, and that each displayed photo can have a caption. If the HTML structure of the caption might vary from image to image, you may not want to use a partial to render the caption, and may want to pass it in directly inside of your custom directive. Here's what that might look like:

`index.html`

```html
<!DOCTYPE html>
<html lang="en" ng-app="photoApp">
<head>
  <meta charset="UTF-8">
  <title>PHOTOS!</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <style>
    img { width: 100%; }
  </style>
</head>
<body>
  <gs-photo src="'http://lorempixel.com/output/nightlife-q-c-640-480-2.jpg'">
    <p>Here's a beautiful picture!</p>
  </gs-photo>
  <gs-photo src="'http://lorempixel.com/output/abstract-q-c-640-480-1.jpg'">
    <p><em>This</em> picture is <strong>terrible.</strong></p>
  </gs-photo>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.5/angular.js"></script>
  <script src="js/app.js"></script>
  <script src="js/directives.js"></script>
</body>
</html>
```

`partials/photo.html`

```html
<div class="row">
  <div class="col-xs-4 col-xs-offset-4">
    <div class="well">
      <img ng-src="{{src}}">
    </div>
  </div>
</div>
```

We also need to define our directive. Here's how that might look:

`app.js`


```js
var app = angular.module("photoApp", []);
```

`directives.js`

```js
app.directive('gsPhoto', function() {
  return {
    scope: {
      src: "="
    },
    templateUrl: "partials/photo.html"
  };
});
```

When you look at your app, what happens to the photo captions? If you've set things up correctly, you should see that the captions disappear once angular takes over! This is because by default, our custom directives will overwrite any content nested inside of them in our HTML.

If we want our directives to _wrap around_ HTML content, we need to use transclusion. In the simplest case, this is a two step process:

1. Update your directive by setting the value of `transclude` to `true`:

    `directives.js`

    ```js
    app.directive('gsPhoto', function() {
      return {
        scope: {
          src: "="
        },
        templateUrl: "partials/photo.html",
        transclude: true
      };
    });
    ```

2. Add an <ng-transclude> element in your partial, wherever you want the HTML content to appear. For example, a modified partial might look like this: 

`partials/photo.html`

```html
<div class="row">
  <div class="col-xs-4 col-xs-offset-4">
    <div class="well">
      <img ng-src="{{src}}">
      <ng-transclude></ng-transclude>
    </div>
  </div>
</div>
```

**EXERCISE** What happens if you move the `ng-transclude` tag in the file above to some other line? How does this change the view?

Tranclusion is a huge topic, and it's easy to get lost down confusing rabbit holes. But if you'd like to push yourself, [here's](http://teropa.info/blog/2015/06/09/transclusion.html) a good place to start.

**EXERCISE** 

Using everything you've learned about custom directives, refactor your Reddit clone to use them and clean up your HTML! Your refactor should use at least two custom directives: one for the add post form, and one for an individual post. If you want to push yourself, you should also add a custom directive for the comment area of a post, which should be nested inside of your custom post directive. 
