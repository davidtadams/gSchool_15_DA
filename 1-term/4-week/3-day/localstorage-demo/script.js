var $userDisplay = $('.user-display');
var $userInput = $('.user-input');

var name = localStorage.getItem('name');
$userDisplay.text(name);
$userInput.val(name);

$userInput.on('keydown keyup keypress', function() {
  var value = $(this).val();
  $userDisplay.text(value);
  localStorage.setItem('name', value);
});
