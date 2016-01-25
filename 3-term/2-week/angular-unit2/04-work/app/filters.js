app.filter('kebab', function() {
  return function(input) {
    if (isNaN(input)) {
      return input.replace(/_/g , "-")
    } else {
      return input
    }
  }
})

app.filter('redact', function() {
  return function(input, searchInput) {
    return input.replace(new RegExp(searchInput, 'g'), "REDACTED")
  }
})
