# React Assessment

**Your assessment is to build a client-side React application.**

* [React Assessment Rubric](https://docs.google.com/document/d/19PsaIvsxxR5EX5SiN5HvBvirUDdYSi1kmmgbmb9hhAw/edit)

## Submission Instructions

**Fork and clone this repo and build your app here.**
**When you are done, _submit a pull request_ so an instructor can review your work and provide feedback.**

## Technologies

This is a client side app only.
We are not concerned with a backend or a database for this exercise.

* React
* HTML
* Bootstrap
* CSS

## Features

Create a [todo list](http://todomvc.com/examples/react/) application.

### Functions

#### Display Todos

* Display `Todos`.
* Display the text of each `Todo`.
* Indicate if the `Todo` is completed.
* Filter a `Todo` list by completed state.
* Display how many uncompleted `Todo` in `Todos` exist.

#### Create Todo

* Create a new `Todo` given user input for the text.

#### Edit Todo

* Modify the completed state of a `Todo`.
* Modify the text of a `Todo`.

#### Delete Todo

* Delete a `Todo` object.

### Data Shape

#### `Todo` object

```json
{
  "id": Number,
  "text": String,
  "completed": Boolean
}
```
Example:
```json
var todo = {
  "id": 0,
  "text": "Get milk from the store.",
  "completed": false
}
```

#### `Todos` object

```json
[Todo]
```
Example:
```json
var todos = [
  {
    "id": 0,
    "text": "Get milk from the store.",
    "completed": false
  },
  {
    "id": 1,
    "text": "Learn React.",
    "completed": true
  },
  {
    "id": 2,
    "text": "Finish React Assessment.",
    "completed": false
  }
]
```

## Resources

* [React Curriculum](https://github.com/gSchool/react-curriculum)
* [React Intro](https://github.com/gSchool/react-intro)
* [React Assessment Rubric](https://docs.google.com/document/d/19PsaIvsxxR5EX5SiN5HvBvirUDdYSi1kmmgbmb9hhAw/edit)
