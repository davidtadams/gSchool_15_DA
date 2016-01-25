document
  .querySelector('#rawJS')
  .addEventListener('input', function(event) {
    document.querySelector('.rawJSinput').innerHTML = event.target.value;
  })
