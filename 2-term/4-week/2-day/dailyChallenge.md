# Game of Threes

The game of threes is played like so:

Given a number:

* If the number is divisible by 3, divide it by 3.

* If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.

* The game stops when you reach "1".

# Input

Number greater than 3.

Example input:
```js
gameOfThrees(100);
```

# Output

* List of valid steps that must be taken to play the game.

* Each step is represented by the number you start at, followed by either -1 or 1 (if you are adding or subtracting 1 before dividing), or 0 (if you are just dividing).

* The last line should simply be 1.

Example output:
```sh
100 -1
33 0
11 1
4 -1
1
```

# Challenge Input

```js
gameOfThrees(31337357)
```

[Source](https://www.reddit.com/r/dailyprogrammer/comments/3r7wxz/20151102_challenge_239_easy_a_game_of_threes/)
