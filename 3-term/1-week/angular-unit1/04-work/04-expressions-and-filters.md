# Expressions and Built-In Filters

Angular expressions are-

> Javascript-like snippets that are usually placed in bindings like "{{ expression }}".

We've already used expressions to render a property that we set using `ng-model`. However, expressions are not just limited to displaying single properties.

Try writing some simple expressions, like:

* `1 + 2 = {{1 + 2}}`
* `My name is {{"BoJack" +  " Horseman"}}`
* `The array [99,43,22] is {{ [99,43,22].length }} items long.`

You've seen similar-like tags in a templating engine - like EJS, ERB, Swig, Jade. While they are definitely similar, there are a few key differences. The most important difference is that **you cannot write conditionals or loops inside an expression**. We'll see soon that Angular provides its own ways of achieving the same functionality.

> Keep in mind that you do not want to have complex logic in your views. If you want to run more complex code, we'll see how to move logic to a controller shortly.

Another key difference is that we can use Angular filters inside of expressions. Filters are simply bits of code that format data before displaying it. Angular comes with a few built-in filters, and we'll also see how to define custom filters later on.

Read over the following built-in filters:

1. [currency](https://docs.angularjs.org/api/ng/filter/currency) - converts a number into a currency value
1. [date](https://docs.angularjs.org/api/ng/filter/date) - converts a string into a datetime or UNIX timestamp
1. [filter](https://docs.angularjs.org/api/ng/filter/filter) - returns a subset of items from an array
1. [json](https://docs.angularjs.org/api/ng/filter/json) - converts a JavaScript object to JSON
1. [limitTo](https://docs.angularjs.org/api/ng/filter/limitTo) - returns a new string or array that contains only a limited number of elements
1. [lowercase](https://docs.angularjs.org/api/ng/filter/lowercase) - converts a string to lowercase
1. [uppercase](https://docs.angularjs.org/api/ng/filter/uppercase) - converts a string to uppercase
1. [number](https://docs.angularjs.org/api/ng/filter/number) - formats a number as text
1. [orderBy](https://docs.angularjs.org/api/ng/filter/orderBy) - orders an array of objects by specific predicate

Let's try using one...

Add the following expression to your markup:

```html
{{3.14159265359}}
```

We can use built-in filters to format our long number. The syntax to use a filter is `{{ expression | filter }}`.

Let's try using the built-in `currency` filter to display the above numbers as a price:

```html
{{3.14159265359 | currency}}
```

Notice that this filter does two things for us - (1) it rounds the data to two decimal places and (2) it prepends a dollar sign.

**EXERCISE**

Change the above code so that our currency filter uses a Euro symbol instead of a Dollar sign. You'll need to do some research of your own.

**EXERCISE**

Add a text input to a page that displays user input in all caps and all lowercase. You will need to use two of the other built-in filters<sup id="a1">[1](#f1)</sup>. Use the following gif as a reference:

![](http://zippy.gfycat.com/CookedWelcomeDesertpupfish.gif)

Let's try using another built-in filter to format our data. Angular has a `number` filter that allows us to round numbers to specific decimal places. Try the following:

```html
{{3.14159265359 | number:3}}
{{3.14159265359 | number:6}}
{{3.14159265359 | number:1}}
```

**EXERICSE**

Create a drop down menu where the user can select how many digits to round pi to. BONUS: Find out how to pluralize "digit" correctly. Angular comes with a built-in way of pluralizing things! It should work like the following gif:

![](http://zippy.gfycat.com/LegalThickIndochinesetiger.gif)

**EXERCISE**

Create a simple tip calculator using the Angular concepts that we've covered so far (and nothing more advanced). A user can enter a meal price into an input, then select a percentage to tip from a dropdown menu. Display the resulting tip at the bottom of the page. Check out the following gif to see how it should work.

![](http://zippy.gfycat.com/FlamboyantQuickGordonsetter.gif)

**EXERCISE**

With one single expression, prove that the context angular expressions run is not the window object.  What is it instead?

**EXERCISE**

Let's test out your data binding and templating skills by building a [Mad Libs](http://en.wikipedia.org/wiki/Mad_Libs) application.

When a user adds text to any of the form inputs, the text at the bottom should update automatically. For example, when you set the value of "boy's name" to "Michael" in the form, all instances of the `{{boy's name}}` placeholder text should be updated/replaced with "Michael".

Be sure to define all of the Angular code within a single `index.html` file. The final project should look like this:

![](./examples/ngmadlibs-p1.png)

![](./examples/ngmadlibs-p2.png)

> Grab the text [here](./examples/madlibs-text.md)

<hr>

## Questions

* What are Angular expressions? How do they compare to tags from templating engines you've used before?
* What happens when you write invalid code in an expression? What type of error do you get?
* What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.
* What's the syntax for filters?
* Can you use more than one filter?
* We'll soon see how to create custom filters. What is a use case for a custom filter?

## Resources

- https://docs.angularjs.org/guide/expression
- <b id="f1">https://docs.angularjs.org/guide/filter</b> [↩](#a1)

