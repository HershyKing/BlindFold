function getCredentials(cb) {
  var data = {
    'grant_type': 'client_credentials',
    'client_id' : "h2YGxeMPj5DQR5hN_i7ar-qKUvNQ00kavwK0uwa6",
    'client_secret': "s42sl5Fc5Ex_xKzscqnIajF2fMLKZvby1PvzmvDs"
  };
  return $.ajax({
    'url': 'https://api.clarifai.com/v1/token',
    'data': data,
    'type': 'POST'
  })
  .then(function(r) {
    localStorage.setItem('accessToken', r.access_token);
    localStorage.setItem('tokenTimeStamp', Math.floor(Date.now() / 1000));
    cb();
  });
}

function getImage(imgurl) {
  var data = {
    'url': imgurl
  };
  var accessToken = localStorage.getItem('accessToken');
  return $.ajax({
    'url': ('https://api.clarifai.com/v1/tag/?model=nsfw-v0.1&url=' + imgurl),
    'headers': {
      'Authorization': 'Bearer ' + accessToken
    },
    'data': data,
    'type': 'GET'
  });
}

function run(imgurl) {
  console.log("IM IN Clarifai.js run loop!");
  if (localStorage.getItem('tokenTimeStamp') - Math.floor(Date.now() / 1000) > 86400
  || localStorage.getItem('accessToken') === null) {
  getCredentials(function() {
    getImage(imgurl);
  });
  } else {
    getImage(imgurl);
  }
  return imgurl;
}