$.ajaxSetup({
  xhrFields: {
       withCredentials: true
  }
});

function getAPIHost() {
  if(window.location.hostname == 'localhost') {
    return "http://localhost:3000";
  } else {
    return "https://powerful-wave-3355.herokuapp.com"
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

function showError(error) {
  if(!error && window.location.search) {
    error = getParamValue('error');
  }

  if(error) {
    $('#error').show().text(error);
  }
}
