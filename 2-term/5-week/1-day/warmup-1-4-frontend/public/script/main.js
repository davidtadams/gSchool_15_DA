var server = 'https://warmup-1-4.herokuapp.com/';

function loadPage() {
  $.get(server, function(data) {
    data.broncos.forEach(function(record) {
      var height = record.height;
      record.heightString = String(Math.floor(height / 12)) + '\' ' + ((height % 12) ? height % 12 + '"' : '');
    });
    var template = Handlebars.compile(Handlebars.partials.broncos);
    $('main').append(template({ broncos: data.broncos }));
  });
}

function promisifyPartial(partial) {
  return new Promise(function(success, failure) {
    $.get(partial.file).done(function(text) {
      Handlebars.registerPartial(partial.name, text);
      success(true);
    }).fail(function(err) {
      failure(err);
    });
  });
}

function promiseToLoad() {
  return new Promise(function(success) {
    $(document).ready(function() {
      success(true);
    });
  });
}

Promise.all([
  // pieces
  promisifyPartial({ name: 'broncos', file: '/templates/broncos.hbs' }),
  // Document Ready?
  promiseToLoad()
]).then(loadPage);
