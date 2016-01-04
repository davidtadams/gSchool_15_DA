# Sum of Digits

You are given a valid integer.
Sum all of the digits of the number.
If the number is still multiple digits: repeat.
Keep repeating until you are left with a single digit.

> This means your answer will always be a single digit from 0-9

# Examples

---

```js
sumDigits(12) // -> 3
```

| Step | Value | Digits |
| ---- | ----- | ------ |
| 0    | 12    | 2      |
| 1    | 3     | 1      |

---

```js
sumDigits(12345) // -> 6
```

| Step | Value | Digits |
| ---- | ----- | ------ |
| 0    | 12345 | 5      |
| 1    | 15    | 2      |
| 2    | 6     | 1      |

---

```js
sumDigits(667) // -> 1
```

| Step | Value | Digits |
| ---- | ----- | ------ |
| 0    | 667   | 3      |
| 1    | 19    | 2      |
| 2    | 10    | 2      |
| 3    | 1     | 1      |
