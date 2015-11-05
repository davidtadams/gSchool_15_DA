$(document).ready(function() {
  /* Exercise 1 - DOM Ready */
  //alert to show when DOM is done loading
  // alert('Ready for DOM Maniuplation');

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
  /* don't know if this means to just take away the color and leave box class or remove all classes
    I did it both ways and commented out one.*/
  // $('#row2 div:nth-child(-n+2)').removeClass();
  $('#row2 div:nth-child(-n+2)').removeClass("boxType1 boxType2 boxType3");

  //get all divs inside container that are not row divs and not secret box div. set width->2pixels
  $('.row div:not(#secretBox)').css("width", "2px");

  /* Exercise 3 - Events */


})
