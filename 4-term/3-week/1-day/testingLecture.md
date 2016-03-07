# Testing

Testing is the process of finding if there are errors and defects in a product. Tests are usually both done by both humans and computers.

## Why Test?

* Detect regressions
* Think about code differently
* Change code without changing functionality

## Why Not Test?

* Takes time
* Multiple Sources of Truth

## Testing Levels

### Unit Testing

* Verify the functionality of a specific section of code.
* Can be a function, class, etc.
* Whitebox Style (you see the code you are testing)
* Used to prove functionality and catch corner cases

### Integration Testing

* Verifies interfaces between pieces of software work
* Exposes defects between integrated components

### Acceptance Testing

* User Acceptance Testing (UAT) is performed when a pre-release is handed off to the user to test before production.

### Continuous Integration / Continuous Deployment

## Exercise: Calculate Standard Deviation

### Step 1

* Write a function that takes an Array of numbers and finds the mean and [standard deviation](http://www.mathsisfun.com/data/standard-deviation.html).
* Enter in this table of [dog breed data](http://www.dogsindepth.com/dog_breed_size_chart.html):

| Breed | Height |
| ----- | ------ |
| Saint Bernard | 28" |
| Golden Retriever | 24" |
| Shih Tzu | 11" |
| Collie | 26" |
| Beagle | 16" |
| Bassett Hound | 15" |
| Rottweiler | 26.77" |
| Irish Wolfhound | 34" |
| German Shepherd | 26" |
| Chihuahua | 9" |
| Pug | 13.25" |
| Standard Poodle | 27" |
| French Bulldog | 12" |
| Jack Russell Terrier | 15" |
| Greyhound | 30" |
| Burmese Mountain Dog | 27.5" |

### Step 2 Write Unit Tests

* Make Mocha and Chai Unit Tests
* Try to think of edge-cases (null, bad input, etc.)

### Step 3 Refactor

* Clean up code and remain green
* Pull out general math functions
* Test the math functions also

### Step 4 Integration Test

* Describe what an integration test might look like for this example

### Step 5 User Acceptance Testing

* Describe what a UAT might look like for this example

## Who is Testing?

* [Angular](https://github.com/angular/angular/tree/master/modules/angular2/test)
* [LoDash](https://github.com/lodash/lodash/tree/master/test)
* [V8](https://github.com/v8/v8/tree/master/test)
* [express](https://github.com/expressjs/express/tree/master/test)
* [Mocha](https://github.com/mochajs/mocha/tree/master/test)
* [Chai](https://github.com/chaijs/chai/tree/master/test)
* [Node.js](https://github.com/nodejs/node/tree/master/test)
