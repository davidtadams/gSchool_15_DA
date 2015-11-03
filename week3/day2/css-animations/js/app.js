$(document).on('ready', function() {
  var w = window.innerWidth,
      h = window.innerHeight,
      headSpace = (h - 300)/2;

  $('.wrapper').css('min-height', h);
  $('.container').css('padding-top', headSpace);
});
