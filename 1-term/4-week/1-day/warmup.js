// jquerify.js
// https://github.com/bgrins/devtools-snippets
// Add jQuery to any page that does not have it already.

(function () {

  if ( !window.jQuery ) {
    var dollarInUse = !!window.$;
    var s = document.createElement('script');
    s.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js');
    s.addEventListener('load', function(){
      console.log('jQuery loaded!');

      if(dollarInUse) {
        jQuery.noConflict();
        console.log('`$` already in use; use `jQuery`');
      }
    });

    document.body.appendChild(s);
  }

})();


/* my code for warmup */
$(".brandname a").text("David's News");
$("img[src$='y18.gif']")[0].src = "http://www.freefavicon.com/freefavicons/smilies/cool-152-191480.png";
var $titles = $(".title>a");
for (var i in $titles) {
  $titles[i].innerText = "MY ARTICLE";
}
