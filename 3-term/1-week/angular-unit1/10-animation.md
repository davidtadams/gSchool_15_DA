## Animations in Angular with ngAnimate

To get started with animations we need to include a module which our application will depend on (this is also called a dependency). The name of our module is ngAnimate and it is not directly part of the angular script that we are using, so we need to do 2 things:

1 - make sure we add `<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-animate.js"></script>` to our `html` file (make sure this script is BELOW the `angular.js` script).

2 - inside of our JavaScript file, we need to include this dependency when we create our module, so our code should look something like this
`angular.module('animateApp', ['ngAnimate'])`

### A brief introduction

You may be asking - why do we need a separate module for this? Can't we just use our own CSS/JavaScript animations? The answer is yes, but the simplest answer is that we want to do things the "angular" way. A more complex answer is that with ngAnimate, we have access to Angular's event loop so our animations occur at the right point, which means we do not have to potentially fight the framework. At the same time, getting animations to work well across all browsers exactly right is quite a challenge. If you'd like to learn more about that and some of the reasons why ngAnimate is so useful, check out [this](https://www.youtube.com/watch?v=5vA6aomUPNw) video.

### So how does it work?

Fortunately, it's not too bad! Angular will trigger animations based on events (enter, leave, move, add and remove). When one of these events occur, angular will attach a class to that element which we can use to target with CSS and set an animation.

It's also very important to note what ngAnimate **isn't**. It does NOT actually do any animations, all it does is provide us a set of CSS classes to target for animation as well as the ability to create our own custom animations (which is a bit beyond the scope of this lesson). Before we examine how to start using ngAnimate, we need to make sure we have a decent understanding of CSS animations (which we will be using for almost all our examples and exercises in this curriculum). 

If you are feeling a bit shaky on CSS animations (transitions/transforms/keyframes), spend a bit of time reviewing the next section - an understanding of CSS animations is an extremely valuable skill set.

### Quick review on CSS transitions, transforms and animations

To review CSS transitions, transforms and animations, head over to [this](https://github.com/gSchool/css-animations) repo.

**Before continuing, you should have a solid understanding of what CSS transitions and transforms are as well as what a keyframe animation is. Understanding these concepts is crucial for success in this unit!**

Once you have gone through the repo, take a look at [this](https://css-tricks.com/animations-the-angular-way/) tutorial for a quick refresher and excellent transition (no pun intended) to using ngAnimate.

### Getting Started - Angular Directives and Supported Animations

As mentioned previously, ngAnimate gives us a set of CSS classes to target for animation. The table below gives us a good idea of what those classes are for each of these built in directives.


| Directive  | Supported Animations  |   
|---|---| 
| ng-repeat  | enter,leave,move  |   
| ng-view  | enter,leave  |   
| ng-include  | enter,leave  |   
| ng-switch | enter,leave  |   
| ng-if  | enter,leave  |   
| ng-class  | add,remove  |   
| ng-show & ng-hide  | add,remove(for ng-hide) |   

All of these supported animations have a class of `ng-` which includes `ng-enter`,`ng-leave`,`ng-add`,`ng-remove`. This is really nice because all of our animation code can now be isolated. Our CSS even becomes easier to debug because we know exactly where animations are being done!

In CSS, we now have access to classes that look like `.ng-EVENT` for the starting styles and `.ng-EVENT.ng-EVENT-active` for when the animation is complete.

For ng-show and ng-hide, the four classes are `ng-hide-remove`, `ng-hide-remove-active`, `ng-hide-add`,`ng-hide-add-active`. There are no classes that target `ng-show` because all animation happens upon the adding and removing of an `ng-hide`.

Here is an example (remember these enter/leave classes don't work for ALL directives)

```css
.ng-enter{
    transition: 0.5s ease all;
    opacity: 0;
}
.ng-enter.ng-enter-active{
    opacity: 1;
}

.ng-leave{
    transition: 0.5s ease all;
    opacity: 1;
}

.ng-leave.ng-leave-active{
    opacity: 0;
}
```

Aside from the `.ng-enter-active` and `.ng-leave-active` classes, we are given `.ng-enter-stagger` and `.ng-leave-stagger` classes as well so that we can use staggered animations (an animation that contains a delay between each successive animation, you can read more about it [here](http://www.yearofmoo.com/2013/12/staggering-animations-in-angularjs.html#staggering-animations)). 
 
## Examples

### Fading in + out with ng-show / ng-hide

In an `index.html` file (notice that we are including the script for angular-animate and including `ngAnimate` as a dependency in our JavaScript:

Also note, for these examples I am including JavaScript in our HTML - this is NOT a best practice and is strictly for demonstration/ease. 

```html
<!DOCTYPE html>
<html lang="en" ng-app="animateApp" ng-cloak>
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div ng-if="toggleBoolean">
     Fade me!
  </div>
  <input type="text" ng-model="name">
  <div ng-hide="name == 'Elie'">
     You're not Elie!
  </div>
  <div ng-show="name == 'Elie'">
     Hi Elie!
  </div>
  <button ng-click="toggleBoolean = !toggleBoolean">Toggle fade</button>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-animate.min.js"></script>
  <script>
    angular.module('animateApp',['ngAnimate']);
  </script>
</body>
</html>
```

In our `style.css`:

```css
.ng-enter {
  transition:0.5s linear all;
  opacity:0;
}

.ng-enter.ng-enter-active {
  opacity:1;
}

.ng-leave {
  transition:0.5s linear all;
  opacity:1;
}

.ng-leave.ng-leave-active {
  opacity:0;
}

/*This is for our hiding (this is not a class from ng-animate)*/
.ng-hide {
  transition:0.5s linear all;
  opacity:0;
}
```

### Side note - What are we doing that is not great with our ng-model? Think back to the scope lesson, what should we be adding?

## Animating with ng-repeat 

```html
<!DOCTYPE html>
<html lang="en" ng-app="animateApp" ng-cloak>
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body ng-controller="MainController">
  <input type="text" ng-model="search">
  <div ng-repeat ="instructor in instructors | filter:search">
    {{instructor}}
  </div>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-animate.min.js"></script>
  <script>
    angular.module('animateApp',['ngAnimate']).controller("MainController", function($scope){
      $scope.instructors = ["Tim","Ian","Matt", "Elie"]
    });
  </script>
</body>
</html>
```

```css
.ng-enter {
  transition:0.4s ease all;
  opacity:0;
  transform:translateX(-100%);
}

.ng-enter.ng-enter-active {
  opacity:1;
  transform:translateX(0);
}

.ng-leave {
  transition:0.4s ease all;
  opacity:1;
  transform:translateX(0);
}

.ng-leave.ng-leave-active {
  opacity:0;
  transform:translateX(-100%);
}

.ng-enter-stagger, .ng-leave-stagger {
  transition-delay: 0.2s;
  transition-duration:0;
}
```

## Adding animate.css

Sometimes it may be difficult to create our own complex CSS animations so there is a wonderful library called `animate.css` which gives us a while bunch of useful classes that handle all the animation for us! You can learn some more about it [here](https://daneden.github.io/animate.css/). Let's refactor our ng-repeat example to use some animations from animate.css (Remember to include animate.css in your HTML! `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.4.0/animate.min.css">`)

Let's use the same HTML as above, but change our CSS to use the following:

```css
.ng-enter {
  animation: fadeInRight .5s;
}

.ng-leave {
  animation: fadeOutRight .5s;
}
```

## Answer the following questions:

- What is ng-animate? What does it do for us? What does it not to for us?
- What is the difference between the `.ng-enter ` and `.ng-enter-active ` classes?
- What is a staggered animation?
- What is animate.css?

## Exercises

- If you have not worked on [this](https://github.com/gSchool/css-animations) yet, finish reading through and experimenting with a few of the exercises there.  
- From the very first example, add a different animation without using animate.css
- In the second example, add a different animation without using animate.css
- In the second example, add a different animation with animate.css (experiment with this one - animate.css is awesome!)

## Additional Resources

[https://docs.angularjs.org/api/ngAnimate](https://docs.angularjs.org/api/ngAnimate)

[https://docs.angularjs.org/guide/animations](https://docs.angularjs.org/guide/animations)

[https://docs.angularjs.org/api/ng/service/$animate](https://docs.angularjs.org/api/ng/service/$animate)

[https://scotch.io/tutorials/animating-angularjs-apps-ngview
](https://scotch.io/tutorials/animating-angularjs-apps-ngview
)
[https://egghead.io/lessons/angularjs-animation-basics
](https://egghead.io/lessons/angularjs-animation-basics
)

[https://css-tricks.com/animations-the-angular-way/
](https://css-tricks.com/animations-the-angular-way/
)



