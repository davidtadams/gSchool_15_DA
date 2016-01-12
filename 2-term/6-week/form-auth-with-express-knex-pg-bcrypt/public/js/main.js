function getUserID() {
  try {
    // extract value from signed cookie
    return document.cookie.split('s%3A')[1].split('.')[0];
  } catch (e) {
    return '';
  }
}

function getParamValue(name) {
  var params = window.location.search.substring(1).split('&').reduce(function(params, keyValue){
    var splits = keyValue.split('=');
    var key = splits[0];
    var value = splits[1];
    params[key] = value;

    return params;
  }, {});

  console.log(params);

  var value = params[name];
  if(value) {
    return decodeURIComponent(value);
  } else {
    return '';
  }
}

function showError() {
  if(window.location.search) {
    var error = getParamValue('error');
    $('#error').show().text(error);
  }
}
