$(function () {
  (function load() {
    $('.container').html('');

    $.get('http://localhost:8080/llamas')
      .done(function (llamas) {
        llamas.forEach(function (llama) {
          var name = '<input class="nameBox ' + llama.id + '" type="text" value="' + llama.name + '">'
          var image = '<img class="llamaImage" src="' + llama.image + '" alt="' + llama.name + '">'
          var renameButton = '<button data="' + llama.id + '"class="medium-4 columns rename success button" type="button">Rename</button>'
          var killButton = '<button data="' + llama.id + '" class="medium-4 columns kill alert button" type="button">Kill</button>'
          var open = '<div class="profile large-3 medium-3 columns">'
          var close = '</div>'
          $('.container').append(open + image + name + renameButton + killButton + close)
        })
      })
      .fail(function (err) {
        $('.container').append('<h1 style="color: red;"> SERVER ERROR! CHECK THE CONSOLE </h1>')
      })

    $('.adopt').on('click', function (event) {
      var name = $('.name').val()
      var image = $('.image').val()
      if (name != "" && image != "") {
        var data = {name: name, image: image}
        $.post('http://localhost:8080/llamas', data)
          .done(function (result) {
            $('.name').val('')
            $('.image').val('')
            load();
          })
          .fail(function (err) {
            $('.container').append('<h1 style="color: red;"> SERVER ERROR! CHECK THE CONSOLE </h1>')
          })
      }
    })

    $('.kill').on('click', function (event) {
      var id = $(this).attr('data')
      $.ajax({
        url: "http://localhost:8080/llamas/" + id,
        method: "DELETE",
      }).done(function (result) {
        load();
      })
      .fail(function (err) {
        $('.container').append('<h1 style="color: red;"> SERVER ERROR! CHECK THE CONSOLE </h1>')
      })
    })

    $('.rename').on('click', function (event) {
      var id = $(this).attr('data')
      var name = $('.nameBox.' + id).val()
      $.ajax({
        url: "http://localhost:8080/llamas/" + id,
        method: "PUT",
        data: {name: name}
      }).done(function (result) {
        load();
      })
      .fail(function (err) {
        $('.container').append('<h1 style="color: red;"> SERVER ERROR! CHECK THE CONSOLE </h1>')
      })
    });
  })();

})
