var express = require('express')
var app = express()

app.get("/", function(req, res) {
  res.send("This is a node.js/express Calculator")
})

// app.get("/add/:num1/:num2", function(req, res) {
//   var num1 = parseInt(req.params.num1)
//   var num2 = parseInt(req.params.num2)
//   res.send(num1 + ' + ' + num2 + ' = ' + (num1 + num2))
// })
//
// app.get("/sub/:num1/:num2", function(req, res) {
//   var num1 = parseInt(req.params.num1)
//   var num2 = parseInt(req.params.num2)
//   res.send(num1 + ' - ' + num2 + ' = ' + (num1 - num2))
// })
//
// app.get("/mult/:num1/:num2", function(req, res) {
//   var num1 = parseInt(req.params.num1)
//   var num2 = parseInt(req.params.num2)
//   res.send(num1 + ' * ' + num2 + ' = ' + (num1 * num2))
// })
//
// app.get("/div/:num1/:num2", function(req, res) {
//   var num1 = parseInt(req.params.num1)
//   var num2 = parseInt(req.params.num2)
//   res.send(num1 + ' / ' + num2 + ' = ' + (num1 / num2))
// })

/* refactoring into 1 route */
app.get("/:operation/:num1/:num2", function(req, res) {
  var num1 = parseFloat(req.params.num1)
  var num2 = parseFloat(req.params.num2)
  var operation = req.params.operation

  if (operation === 'add') {
    res.send(num1 + ' + ' + num2 + ' = ' + (num1 + num2))
  }
  else if (operation === 'sub') {
    res.send(num1 + ' - ' + num2 + ' = ' + (num1 - num2))
  }
  else if (operation === 'mult') {
    res.send(num1 + ' * ' + num2 + ' = ' + (num1 * num2))
  }
  else if (operation === 'div') {
    res.send(num1 + ' / ' + num2 + ' = ' + (num1 / num2))
  }
})

app.listen(3000, function() {
  console.log('Server started on localhost:3000')
})
