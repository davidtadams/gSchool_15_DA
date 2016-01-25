# Custom Directives: Part 1

Way back in [Unit 1, Lesson 5](https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/5-built-in-directives.md), we went over built in directives.  These are directives that angular comes with.  In this lesson, we're going to build our own custom directives. But first...

- Name at least 5 built in directives you've used so far.
- Watch [AngularJS Directives Tutorial - Part 1 - Demystifying Angular Directives](https://www.youtube.com/watch?v=0r5QvzjjKDc)

### Simple Custom Directive

We are going to make a simple directive that just puts some html on the page.  This is not a great use for directives, but we'll get to more complicated examples later.

`app.js`:

```js
var app = angular.module('simpleDirectiveApp', [])
app.directive('gsAngularLogo', function() {
  return {
    template: '<img src="https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png">'
  };
});
```

Our `index.html` would look like this:

```html
<!DOCTYPE html>
<html ng-app="simpleDirectiveApp">
<head>
  <script src="https://code.jquery.com/jquery-2.1.4.min.js" type="text/javascript"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular.js" type="text/javascript"></script>
  <script src="app.js" type="text/javascript"></script>
</head>
<body>
  <gs-angular-logo></gs-angular-logo>
</body>
</html>
```

A few things to notice with our new custom directive:

1. Our directive is called `gsAngularLogo` but in the html we use it by calling it `gs-agnular-logo`.
2. We prefixed our directive name with gs (galvanize school).  Acording to angular docs, adding a prefix is a good practice so that the chance of a name collision is minimized.
3. The built in directives we've seen so far are called in the view by adding them as attributes of an html tag.  For example: `<html ng-app="simpleDirectiveApp">`.  The `ng-app` directive is an attribute of the html tag.

These observations lead to a few topics:

**Normalization of Html**

When angular looks over your html document, it goes through a process called normalization.  The process essentially goes over each tag, looks for angular directives, and then normalizes the name from dash-delimited name to a camel case name.  For example, angular translates `gs-angular-logo` into `gsAngularLogo`.  This process is necessary becuase dash delimited names are not the only possiblity for directives.  For example, `gs_angular_logo` would also be valid.

**EXERCISE**

Look through [the normalization section of the angular docs on directives](https://docs.angularjs.org/guide/directive).  Investigate all types of acceptable directive names.  Try all possible formats in the example above.  What is the preferred format for directive naming?

**Using Restrict**

In our example, the directive we used creates an img tag that displays the angular logo.  We could change our html to look like this as well:

```html
<body>
  <h5 gs-angular-logo></h5>
</body>
```

This doesn't really make a lot of sense though.  Angular will add the img tag as a child of the h5 tag.  But our custom directive doesn't really have anything to do with the h5 tag we are claiming to modify.

**Best Practice**

Use an angular directive as an attribute only when it decorates a tag or somehow relates to it.  Otherwise, create a separate element for the directive.

**EXERCISE**

Since our tag doesn't make sense as anything but a single element, add a restriction to the directive so that other directive formats do not work.  What are all the possible ways to use a directive in html?  How could you change the restriction to allow all?

**Template Url**

Typically a directive's template will become larger.  To make the directive cleaner, you can use `templateUrl` instead of `template` in the directive.  The `templateUrl` defines an html file that will be requested via ajax and used as the template.

**EXERCISE**

Fix our example to use `templateUrl` instead of template.  **HINT**: Keep in mind that the request for the `templateUrl` is via **ajax**.

### Directives And Scope

Let's add some data to a controller and see how it interacts with the directive.  In the following example, we'll show a yoyo's details in our directive:

`app.js`:


```js
var app = angular.module('yoyoDirectiveApp', [])

app.controller('YoyoController', ['$scope', function($scope) {
  $scope.yoyo = {name: 'Duncan Metal Drifter',
    img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"
  };
}]);

app.directive('gsYoyoDetails', function() {
  return {
    templateUrl: 'yoyo-details.html',
  };
});
```

`yoyo-details.html`

```html
<h3>{{yoyo.name}}</h3>
<img ng-src="{{yoyo.img}}">
```

`index.html`:

```html
<!DOCTYPE html>
<html ng-app="yoyoDirectiveApp">
<head>
<script src="https://code.jquery.com/jquery-2.1.4.min.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular.js" type="text/javascript"></script>
<script src="app.js" type="text/javascript"></script>
</head>
<body ng-controller="YoyoController">
  <gs-yoyo-details></gs-yoyo-details>
</body>
</html>
```

We can see here that the directive has access to the yoyo from the controller's scope.  This is nice, but it's often not a good idea to have your directives so tightly coupled to your controller.  If you change the variable name in the  controller or try to use the directive again somewhere else, you may run into errors.

**Isolated Scope**

The work around is to create an `isolated scope` for the directive.

`app.js`

```js
var app = angular.module('yoyoDirectiveApp', [])

app.controller('YoyoController', ['$scope', function($scope) {
  $scope.yoyo = {name: 'Duncan Metal Drifter',
    img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"
  };
}]);

app.directive('gsYoyoDetails', function() {
  return {
    templateUrl: 'yoyo-details.html',
    scope: {
      yoyo: '=yoyoData'
    }
  };
});
```

`index.html`

```html
<!DOCTYPE html>
<html ng-app="yoyoDirectiveApp">
<head>
  <script src="https://code.jquery.com/jquery-2.1.4.min.js" type="text/javascript"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular.js" type="text/javascript"></script>
  <script src="app.js" type="text/javascript"></script>
</head>
<body ng-controller="YoyoController">
  <gs-yoyo-details yoyo-data="yoyo"></gs-yoyo-details>
</body>
</html>
```

**EXERCISE**

What is accessible in the directive's scope?  How is data being passed to the directive?  What is different about the `gs-yoyo-details` element from the first example?

**EXERCISE**

Modify the controller to have a list of yoyos.  Use an `ng-repeat` in the view to display all the yoyo's.  Make sure to use the custom directive!

**EXERCISE**

Create an app that uses the [pokemon api](http://pokeapi.co/docs/).  The app should first make a request to the pokedex to get all possible pokemon.  Then randomly select 5 pokemon to display.  The app should display the pokemon's name, types, name of moves (limit it to 6), and a sprite for the pokemon. Use a custom directive to display the pokemon.

The app should use a custom directive for each pokemon (eg `pokemon-item`).

**Bonus**: For the pokemon fans out there, write an algorithm that randomly picks two pokemon and decide who would win.  I do not know anything about the pokemon game, so this would be up to you to figure out.

![](http://s8.postimg.org/eo2kbbnb9/pokemon.png)
