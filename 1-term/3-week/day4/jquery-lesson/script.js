/* Lesson with jQuery */

//wait for the document to load before you do anything with jQuery
$(document).ready(function() {
  console.log($('div'));

  $('div').on('click', function(event) {
    //this turns the this variable into a jquery object that you can then use
    console.log($(this));
  })

  //hover example
  $('p').hover(function () {
      $(this).addClass('active')
  }, function () {
      $(this).removeClass('active')
  });

})
