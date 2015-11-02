console.log('You\'re ready to begin!')

var request = new XMLHttpRequest()

request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status == 200) {
    console.log(this.responseText)
  }
}

request.open('GET', '/index.html')

request.send()
