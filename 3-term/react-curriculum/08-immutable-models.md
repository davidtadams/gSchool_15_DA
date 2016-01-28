#### [⇐ Previous](07-refs-and-timers.md) | [Table of Contents](README.md#table-of-contents) | [Next ⇒](09-final-assignment.md)

# Immutable Models

| Duration by yourself | Duration as a class |
|----------------------|---------------------|
| TBD                  | TBD                 |

## What's an immutable model and why is it important?

* Difference between a value and a model
* Difference between an entity and a collection
* Why immutable models are easier to reason about

## How do you use immutable entities?

* `Object.assign()` function

## How do you use immutable collections?

* `Array.map()` function
* `Array.filter()` function
* `Array.reduce()` function

## Summary

## Assignment

Create a `SongTracker` React component that looks and behaves like this.

![SongTracker](https://i.imgur.com/muVfTkV.gif)

Implement the following features:

* Display the average rating of all tracked songs, rounded to the nearest tenth decimal place, at the top of the page.
* Display the tracked songs as a table with columns for Title, Artist, Rating, and Action below that.
* Allow users to create additional tracked songs using the first row of the table.
* Display newly tracked songs at the bottom of the table.
* Allow users to delete any tracked song at any time.
* Display the average rating and table correctly when all the tracked songs have been deleted.
* Allow users to edit the rating of a tracked song by clicking on any of its five stars.

**TIP 1:** You can copy-and-paste this full star ★ character and this empty star ☆ character into your application as Strings.

**TIP 2:** When calculating the average rating, watch out for divide by zero errors.

**TIP 3:** Remember, all user data submitted from a form component arrives into your application as a String.

**TIP 4:** Here's the `songs` data that you can use to seed the state of your `SongTracker` component.

```js
[{
  artist: 'Evolve',
  rating: '3',
  title: 'Well I Gotta Story'
}, {
  artist: 'Dzihan & Kamien',
  rating: '2',
  title: 'Call Me'
}, {
  artist: 'Tetris',
  rating: '4',
  title: 'El Rhytmo De Miami'
}, {
  artist: 'Peace Orchestra',
  rating: '3',
  title: 'Who am I'
}, {
  artist: 'Majid Jordan',
  rating: '5',
  title: 'Her'
}]
```

## Bonus assignment

When you're finished with the assignment above, enhance the `SongTracker` component so it looks and behaves like this.

![SongTracker Bonus](https://i.imgur.com/UiYVJz3.gif)

Implement the following features:

* Add a search query field to the top of the page.
* Filter both the average rating and the tracked songs table with the user's search query.

## References

* [Mozilla Developer Network - Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* [Mozilla Developer Network - Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [Mozilla Developer Network - Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
* [Mozilla Developer Network - Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

#### [⇐ Previous](07-refs-and-timers.md) | [Table of Contents](README.md#table-of-contents) | [Next ⇒](09-final-assignment.md)
