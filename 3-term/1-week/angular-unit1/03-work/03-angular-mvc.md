# Angular MVC

Angular utilizes a MVC(-like) design pattern, which seperates the app into Models, Views, and Controllers. Let's take a look ...
[Slides for MVC in Angular](https://slides.com/tylerbettilyon/angularmvc)

## MVC

### Model

**What is it?**

It's where your application's data lives, representing the current state.

**How is it defined?**

Via JavaScript. Within Angular Services. Imperatively.

**What does it generally include?**

1. Access to the persistent layer/store
1. Business logic
1. CRUD functions
1. Data validation

### View

**What is it?**

It displays your application's data (from the model) for the end user and handles user interaction.

**How is it defined?**

Via HTML, CSS, some JavaScript, Angular directives ('ng-'attributes) and two-way data bindings. Within the HTML document. Declaratively.

**What does it generally include?**

1. Markup for -
  - presenting data
  - handling user interactions
  - showing and hiding elements
1. Filters to limit/organize data
1. Expressions/logic

### Controller (often called the view-model)

**What is it?**

Control the relationship between the Models and Views by exposing parts of the model and managing state.

**How is it defined?**

Via JavaScript. Within Angular Controllers. Imperatively.

## Example

Take a look a the following code:

```html
<!DOCTYPE html>
<html ng-app="myapp">
  <head>
    <meta charset="utf-8">
    <title>Hello, World!</title>
  </head>
  <body>
    <div ng-controller="HelloController">
      <h2>Hello, {{hello.title}}!</h2>
    </div>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.4/angular.min.js"></script>
    <script>
    angular.module("myapp", [])
      .controller("HelloController", function($scope) {
        $scope.hello = {};
        $scope.hello.title = "World";
      });
    </script>
  </body>
</html>
```

Can you define the model, view, and controller parts of this app?

**Model**

```javascript
$scope.hello
```

**View**

```html
<div ng-controller="HelloController">
  <h2>Hello, {{hello.title}}!</h2>
</div>
```

**Controller**

```javascript
<script>
angular.module("myapp", [])
  .controller("HelloController", function($scope) {
    $scope.hello = {};
    $scope.hello.title = "World";
  });
</script>
```

## Resources

- [MVC and MVVM with AngularJS](http://codechutney.in/blog/javascript/mvc-and-mvvm-with-angularjs/)
