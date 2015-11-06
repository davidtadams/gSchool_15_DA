$(document).ready(function() {
  /* Exercise 1 - DOM Ready */
  //alert to show when DOM is done loading
  alert('Ready for DOM Maniuplation');

  /* Exercise 2 - Selectors, CSS , Attributes */
  //find secret box, set background->white add h1->secret box!
  var $secretBox = $('#secretBox');
  $secretBox.css("background", "white");
  $secretBox.append("<h1>secret box!</h1>");

  //find all child divs on first row, set class->boxType3
  var $childDivsRow1 = $('#row1 > div');
  $childDivsRow1.toggleClass("boxType1 boxType2", false);
  $childDivsRow1.toggleClass("boxType3", true);

  //make last box in the last row disappear
  $('#row4 div:last-child').css("display", "none");

  //change all red boxes to white
  $('.boxType1').css("background", "white");

  //get first two divs in the second row, take away all styling
  $('#row2 div:nth-child(-n+2)').removeClass();

  //get all divs inside container that are not row divs and not secret box div. set width->2pixels
  $('.row div:not(#secretBox)').css("width", "2px");

  /* Exercise 3 - Events */
  //Log the x and y position of a click event in the main container
  $('#container').click(function(event) {
    console.log(event.pageX, event.pageY);
  });

  //Number 3.2
  $('.boxType1').append('<a href="www.galvanize.com" class="neverLeave">Galvanize</a>');
  $('.neverLeave').click(function(event) {
    event.preventDefault();
    alert("You can never leave!!!!");
  });

  //Number 3.3
  $('.box').click(function(event) {
    if ($(this)[0].children.length === 1) {
      $(this)[0].children[0].remove();
    } else {
      $(this).append('<img src="http://placecreature.com/puppy/100/100" alt="cutePuppy">');
    }
  });

  //Number 3.4
  var container = $('#container');
  container.click(function(event) {
    if (event.target == container[0]) {
      //if original div == container div -> change background of container to lime green
      container.css("background", "green");
    } else {
      //turn container background to black
      //background of original div clicked to white
      container.css("background", "black");
      $(event.target).css("background", "white");
    }
  });
})
