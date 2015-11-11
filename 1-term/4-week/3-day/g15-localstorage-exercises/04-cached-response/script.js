$.get('https://www.reddit.com/r/aww.json')
  .done(function (response) {
    //What to do if HTTP was successful
    localStorage.setItem('redditData', JSON.stringify(response));
  })
  .fail(function (error) {
    //What to do if HTTP failed
    var redditData = JSON.parse(localStorage.getItem('redditData'));
    console.log('Offline cache data: ', redditData);
  });
