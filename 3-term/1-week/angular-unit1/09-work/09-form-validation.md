## Form Validation with Angular

### Why we validate on the client side

Form and controls provide validation services, so that the user can be notified of invalid input before submitting a form. This provides a better user experience than server-side validation alone because the user gets instant feedback on how to correct the error and better yet, we don't need to even bother going to the server if the user fails the client side validation.

### Why we can't ONLY validate on the client side

Keep in mind that while client-side validation plays an important role in providing good user experience, it can easily be circumvented and thus can not be trusted. Server-side validation is still necessary for a secure application. We can easily disable javascript and delete things from the DOM using the developer tools - so we need to ensure that we are validating in a place where users do NOT have access.

## Building our first form

Remember how to build forms? Let's make sure.

- Create a form with an action to # (you can use `javascript:void(0)` as well - wondering what that does? Read [this](http://stackoverflow.com/questions/1291942/what-does-javascriptvoid0-mean))
- Inside your form add two text inputs (each one should have a label with the `for` attribute matching the `id` of each input) and an input with type of `submit` and a value of `Click me!`

Your form should look like this

```html
<form action="#">
  <label for="firstname">First Name: </label>
  <input type="text" id="firstname">
  <label for="lastname">Last Name: </label>
  <input type="text" id="lastname" >
  <input type="submit" value="Click me!">
</form>
```

Now this form is pretty decent, but it looks like we are not validating anything! A user can leave the inputs blank and still submit the form successfully! Let's add some validations with HTML5 using `required`. 

Your form should now look like this 

```html
<form action="#">
  <label for="firstname">First Name: </label>
  <input type="text" id="firstname" required>
  <label for="lastname">Last Name: </label>
  <input type="text" id="lastname" required>
  <input type="submit" value="Click me!">
</form>
```

Now this is great, but it would be nice if we could be a bit more specific on what we want to validate inside this form. What if we want (a) the First Name to be present, but it has to be at least three characters, and (b) the Last Name does not need to be present, but if it is, it should also be at least 3 characters (we still need to make sure Bono can sign up for our application)?

Our first thought might be to start writing a bunch of javascript and figure out if there is any text inside the input and if so, to figure out the length. While this would work, angular has a nicer way to help us out. But before we do this, let's learn about some of the key properties and classes we will be using to validate forms in angular.

## Before you continue, read through the following documentation regarding Angular form validations:
[http://www.ng-newsletter.com/posts/validations.html](http://www.ng-newsletter.com/posts/form-validation-with-angularjs.html)

### A quick walkthrough of angular form properties, classes and descriptions

This table and the corresponding descriptions come from [this](https://scotch.io/tutorials/angularjs-form-validation-with-ngmessages) fantastic tutorial.

| Property  |  Class | Description  | 
|---|---|---|
| $valid  |  ng-valid | Boolean that indicates whether an item is currently valid based on the rules you placed.  |   
| $invalid  |  ng-invalid |  Boolean that indicates whether an item is currently invalid based on the rules you placed. |   
|  $pristine |  ng-pristine |  Boolean that's true if the form/input has not been used yet. |   
|  $dirty |  ng-dirty |   Boolean that's true if the form/input has been used. |   
|  $touched |  ng-touched |  Boolean that's true if the input has been blurred |   

## Accessing and targeting our form and inputs

In order to use angular form validation we have to abide by the following rules

- We must give our form a name attribute (let's imagine a name attribute = "firstForm")
	- We can then do things like `firstForm.$valid` (which returns true or false)
- We have to put an ng-model on each of our inputs (remember to use the dot!)

A couple extra things:
- If we do not want to use the standard HTML5 validations we add `novalidate` as an attribute to our form
- To access angular properties on our inputs we use the syntax `form name.input name.angular property`. 
  + We can then do things like `firstForm.username.$valid` or `firstForm.username.$error` (to see an object with any errors)

## Styling our forms and displaying error messages:

It would be much nicer if we could display a message to our user and style it accordingly. We are going to be using bootstrap as it gives us some nice classes for validation (you can read more about them [here](http://getbootstrap.com/css/#forms-control-validation))

In order to add a class based off of a condition we are going to be using the built in `ng-class` directive (docs are [here](https://docs.angularjs.org/api/ng/directive/ngClass). There are a few ways to use `ng-class`, the way we will be using it is as follows (pay close attention to the quotes!)

`ng-class="{ 'class-name' : expression, 'another-class': another expression }".`

An example of this would be: `"{ 'has-error' : sampleForm.username.$invalid }"`

But how about showing an error message? To do this we are going to be using the `ng-show` directive which works like this:
I
`ng-show="condition"`

An example of this would be:
`<span ng-show="sampleForm.username.$invalid">Username is invalid</span>`

## Visualization 

If you would like a great example of how these form classes and properties work (99% borrowed from scotch.io) - check out [these](http://sales-person-licks-61176.bitballoon.com) validation tables


## Exercise - questions + building your own form and validations 

First, answer the following questions

- When does a form/input have a property of $valid? What class accompanies this property?
- When does a form/input have a property of $invalid? What class accompanies this property?
- When does a form/input have a property of $pristine? What class accompanies this property?
- When does a form/input have a property of $dirty? What class accompanies this property?
- When does a form/input have a property of $touched? What class accompanies this property?
- What does blurred mean? (research the `blur` event)

#### For the next set of questions, assume that you have a form with a name="quizForm"

- Create a text input with a name of "question" and give it a validation of "required". If it is $valid add a class of "valid"
- For your text input with a name of question, add a paragraph tag with the text "please enter a valid question" if the input is not valid 
- Create a text input with a name of "answer" and give it a validation of "required" and a minimum length of 4 characters. If it is $valid and not $pristine add a class of "correct". 
- How would you access all of the errors (in an object) for an input with a name of `signupForm.username`
- What validations would you add in an input to make sure that there is a minimum length of 4 and a maximum length of 20
- What validation would you add in an input to make sure that only numbers between 1 and 5 are a valid input (use regular expressions for this!)

## Exercise - styling our form and adding some error messages! 

Now that you have a solid understanding of these properties/classes, let's build another form with an action of "#" and four text inputs for a username, password, email and zip code. Your form should validate that the username and password are both between 3 and 12 characters long. It should also make sure that the email is a valid email and that the zip code is a five digit number (use ng-pattern and regular expressions for this!). 

Now that we have an idea of how to style and display error messages, let's do the following

- include bootstrap for styling
- display error messages if inputs are invalid (write whatever you would like for the error message)
- add a class of `has-error` if the validation fails
- add a class of `has-success` if the validation passes
- only display the error message/styling if the user has typed something 
- when the form is submitted, collect the inputs and add them to an array called `users` (this will be done in your controller)
  + remember that the default behavior for the form submission is a page refresh - you will need to prevent this.
  + make sure to clear all the form values and validations (you should use a method from [here](https://docs.angularjs.org/api/ng/type/form.FormController) to do that )
  + display the array of users (each one should be an object) at the top of your form (see the gif below for guidance).

Your form should work like this:

[![https://gyazo.com/a6a93b98ada81f54140052956cea2cb0](https://i.gyazo.com/a6a93b98ada81f54140052956cea2cb0.gif)](https://gyazo.com/a6a93b98ada81f54140052956cea2cb0)

## Bonus - refactor using ngMessages

Our HTML is getting a bit messy, it would be nice to have an easier way to deal with error messages, that's where ng-messages comes in. Walk through [this](https://scotch.io/tutorials/angularjs-form-validation-with-ngmessages) tutorial and refactor your form to use ng-messages.

## Additional Resources 

[https://docs.angularjs.org/guide/forms](https://docs.angularjs.org/guide/forms)

[https://docs.angularjs.org/api/ng/directive/input](https://docs.angularjs.org/api/ng/directive/input)
