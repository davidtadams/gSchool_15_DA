## 01.html

```js
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('input').addEventListener('keyup', function (e) {
    window.pizzaSize = e.value
  })
})
```

## 02.html

```js
document.addEventListener('DOMContentLoaded', function () {
  window.pizzaSize = "large"
  setInterval(function () {
    document.querySelector('input').value = window.pizzaSize
    document.querySelector('span').innerHTML = window.pizzaSize
  }, 1000)
})
```
