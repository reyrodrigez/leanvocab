(function () {

var userId;

$(document).ready(function () {


  chrome.storage.local.get('userId', function (result) {
      if (result.userId) {
        userId = result.userId;
        $('.wrapper').addClass('loggedin');
      }
    });

  
  $('.cont').on('submit', onSubmit);
  $('.login').on('submit', onLogin);
  $('.logout').on('click', onLogout);

  function ajaxSettings (url, data) {
    return {
      url: url,
      type: 'POST',
      dataType: 'json',
      data: JSON.stringify(data),
      timeout: 3000,
      contentType: 'application/json; charset=utf-8'
    };
  }

  // submit words
  function onSubmit (e) {

    var data = {
      eng: $('.eng').val().trim(),
      hun: $('.hun').val().trim(),
      userId: userId
    };

    var settings = ajaxSettings('http://leanvocab.herokuapp.com/words', data);
    
    e.preventDefault();
    $.ajax(settings).done(function (rsp) {
      $('.js_add-word').addClass('success');

      window.setTimeout(function (){
        $('.eng').val('').focus();
        $('.hun').val('');
        $('input[type="submit"]').removeClass('success');
      }, 1200);
      
    });
  }

  function onLogin (e) {
    e.preventDefault();
    var data = {
      username: $('.username').val().trim(),
      password: $('.password').val().trim()
    };

    var settings = ajaxSettings('http://leanvocab.herokuapp.com/users/login', data);
      $.ajax(settings).success(function (rsp) {
        chrome.storage.local.set({'userId': rsp.uid});

        $('.username').val('');
        $('.password').val('');
        $('.wrapper').addClass('loggedin');

        $('.eng').focus();
      });
  }

  function onLogout (e) {
    e.preventDefault();
    chrome.storage.local.remove('userId', function () {
        $('.wrapper').removeClass('loggedin');
    });
  }

});
})();