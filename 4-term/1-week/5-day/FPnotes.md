# Functional Programming

## Functional Languages

Compare Haskell, F#, Lisp, Erlang, Clojure with JS and Java etc.

## Tenants

### Higher Order Functions / Partial Application & Currying / First Class Functions

* First Class Functions required in the language
* Callbacks
* Returning Functions
* Create a new function with a parameter fixed
* Call a function for each parameter

### Immutability

* Don't allow changes to state

### Pure Functions & Referential Transparency

* A function can only take values from parameters
* A function can only modify values in its immediate scope
* A function must return a value
* Given the same parameters for a function, the same return will be returned

### Composability

* Make functions small and generic
* They become reusable building blocks

## Exercises

### For Loop -> Pure Function

Filter

```js
var products =
[
  {name: "banana", price: 0.49},
  {name: "5000\" TV", price: 4999.99},
  {name: "Chromebook Pixel", price: 999.99},
  {name: "RTD Local Fare", price: 2.50}
]

var cheapProducts = []
for (var i=0; i<products.length; i=i+1)
{
  if (products[i].price < 5)
  {
    cheapProducts.push(products[i])
  }
}
console.log(cheapProducts)
```

```js
function filter (array, predicate)
{
  var filtered = []
  for (var i = 0; i<array.length; i = i +1)
  {
    if (predicate(array[i]))
    {
      filtered.push(array[i])
    }
  }
  return filtered
}

function isCheapProduct (product)
{
  return product.price < 5
}

var cheapProducts = filter(products, isCheapProduct)

console.log(cheapProducts)
```

```js
const isCheapProduct = (product) => product.price < 5

var cheapProducts = products.filter(isCheapProduct)

console.log(cheapProducts)
```

### For Loop -> Higher Order Reduce

Sum

```js
var cart =
[
  {name: "banana", price: 0.49, quantity: 500},
  {name: "Chromebook Pixel", price: 999.99, quantity: 1}
]

var total = 0
for (var i=0; i<cart.length; i=i+1)
{
  total = total + cart[i].price * cart[i].quantity
}

console.log(total)
```

```js
function reduce (array, predicate, initial)
{
  var accumulator = initial
  for (var i = 0; i < array.length; i = i + 1)
  {
    accumulator = predicate(accumulator, array[i])
  }
  return accumulator
}

function productTotal (product)
{
  return product.quantity * product.price
}

var total = reduce(cart, function (accumulator, product) {
  return accumulator + productTotal(product)
}, 0)

console.log(total)
```

```js
const productTotal = (product) => product.quantity * product.price

var total = cart.reduce((total, product) => total + productTotal(product), 0)

console.log(total)
```

### Closure -> Pure Function/Immutability

Change the text rendered to the screen

```js
function setText (newText)
{
  state.text = newText
}

function setColor (newColor)
{
  state.color = newColor
}

function renderState ()
{
  console.log(state.text)
  console.log(state.color)
}

var state =
{
  text: "initial",
  color: "red"
}

renderState()

setColor("blue")
setText("Final")

renderState()
```

```js
function setText (state, newText)
{
  var newState = Object.assign({}, state);
  newState.text = newText
  return newState
}

function setColor (state, newColor)
{
  var newState = Object.assign({}, state);
  newState.color = newColor
  return newState
}

function renderState (state)
{
  console.log(state.text)
  console.log(state.color)
}

var state =
{
  text: "initial",
  color: "red"
}

renderState(state)

state = setColor(state, "blue")
state = setText(state, "Final")

renderState(state)
```


```js
function get (request)
{
  if (request === "/products/12/price")
    return Promise.resolve(0.49)
  else if (request === "/products/12/name")
    return Promise.resolve("banana")
  else if (request === "/products/12/available")
    return Promise.resolve(23)
}

function hydrateAndPass (product, property)
{
  return get(`/products/${product.id}/${property}`)
    .then(function (value) {
      product[`$${property}`] = value
      return product
    })
}

const getPrice = (product) => hydrateAndPass(product, "price")
const getName = (product) => hydrateAndPass(product, "name")
const getAvailable = (product) => hydrateAndPass(product, "available")

function getProduct (id)
{
  var product = {}
  product.id = id
  return Promise.resolve(product)
    .then(getName)
    .then(getPrice)
    .then(getAvailable)
}

getProduct(12)
  .then((product) => console.log(product))
```

### Function -> Memoization

Long running function -> cached return

```js
var cart =
[
  {name: "Banana", quantity: 500},
  {name: "Chromebook Pixel", quantity: 1}
]

function getPrice (productName)
{
  //Really slow XHR
  var a = ""; for (var i=0; i<100000; i=i+1) a = a + i;
  //Return Price
  if (productName === "Banana")
    return 0.49
  else if (productName === "Chromebook Pixel")
    return 999.99
}

function getTotal (cart)
{
  var total = 0
  for (var i=0; i<cart.length; i=i+1)
  {
    total = total + getPrice(cart[i].name) * cart[i].quantity
  }
  return total
}

console.time("Get Total Twice")
console.log(getTotal(cart));
console.log(getTotal(cart));
console.timeEnd("Get Total Twice")
```

```js
var cache = {}
function getPrice (productName)
{
  //Fetch Cache
  if (cache[productName])
    return cache[productName]
  //Really slow XHR
  var a = ""; for (var i=0; i<100000; i=i+1) a = a + i;
  //Return Price
  var price
  if (productName === "Banana")
    price = 0.49
  else if (productName === "Chromebook Pixel")
    price = 999.99
  cache[productName] = price
  return price
}

function getTotal (cart)
{
  var total = 0
  for (var i=0; i<cart.length; i=i+1)
  {
    total = total + getPrice(cart[i].name) * cart[i].quantity
  }
  return total
}

console.time("Get Total Twice")
console.log(getTotal(cart));
console.log(getTotal(cart));
console.timeEnd("Get Total Twice")
```

```js
const memoize = (func) =>
{
  const cache = {}
  return function (param)
    {
      return cache[param]
        ? cache[param]
        : cache[param] = func.apply(null, arguments)
    }
}

const getPrice = memoize((productName) =>
{
  //Really slow XHR
  var a = ""; for (var i=0; i<100000; i=i+1) a = a + i;
  //Return Price
  if (productName === "Banana")
    return 0.49
  else if (productName === "Chromebook Pixel")
    return 999.99
})

const getTotal = (cart) =>
  cart.reduce((total, product) => total + getPrice(product.name) * product.quantity, 0)

console.time("Get Total Twice")
console.log(getTotal(cart));
console.log(getTotal(cart));
console.timeEnd("Get Total Twice")
```

### Monolith -> Composability

Large function to hydrate an object -> tiny functions to hydrate pieces

```js
function get (request)
{
  if (request === "/products/12/price")
    return Promise.resolve(0.49)
  else if (request === "/products/12/name")
    return Promise.resolve("banana")
  else if (request === "/products/12/available")
    return Promise.resolve(23)
}

function getProduct (id)
{
  var product = {}
  product.id = id
  return get("/products/" + id +"/price")
  .then(function (price)
  {
    product.price = price
    return get("/products/" + id + "/name")
  })
  .then(function (name)
  {
    product.name = name
    return get("/products/" + id + "/available")
  })
  .then(function (available)
  {
    product.available = available
    return product
  })
}

getProduct(12)
.then(function (product)
  {
    console.log(product)
  }
)
```

```js
function get (request)
{
  if (request === "/products/12/price")
    return Promise.resolve(0.49)
  else if (request === "/products/12/name")
    return Promise.resolve("banana")
  else if (request === "/products/12/available")
    return Promise.resolve(23)
}

function hydratePrice (product)
{
  return get("/products/" + product.id +"/price")
    .then(function (price)
    {
      product.price = price
      return product
    })
}

function hydrateName (product)
{
  return get("/products/" + product.id + "/name")
    .then(function (name)
    {
      product.name = name
      return product
    })
}

function hydrateAvailable (product)
{
  return get("/products/" + product.id + "/available")
    .then(function (available)
    {
      product.available = available
      return product
    })
}

function getProduct (id)
{
  var product = {}
  product.id = id
  return Promise.resolve(product)
    .then(hydratePrice)
    .then(hydrateName)
    .then(hydrateAvailable)
}

getProduct(12)
.then(function (product)
  {
    console.log(product)
  }
)
```
