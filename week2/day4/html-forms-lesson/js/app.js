$(function () {

  if(document.location.search) {
    var queryString = document.location.search.replace('?', '');
    var pairs = queryString.split('&').map(function (pair) {
      return pair.split('=');
    });

    $('.query-params').show();
    var $tbody = $('.query-params tbody');

    pairs.forEach(function (pair) {
      var $tr = $('<tr>');
      $tr.append($('<td>').html(pair[0]));
      $tr.append($('<td>').html(pair[1]));
      $tbody.append($tr);
    });
  }

});
