//Queue Giphy and retrieve random gif
var giphy_url = ("https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cute+baby+animals");
$.get (giphy_url, function(data){
    var gif_url = (data['data']['image_original_url']);
    var funGif = gif_url;
});
(function (document){
//    getBlindFold.init(funGif);
    var images = document.getElementsByTagName('img'), length = images.length;
    console.log(images.length);

    for (var i = 0; i<length; i++) {
        console.log("IM IN BLINDFOLD.JS!:3");
        var pagePictures = window["run"](images[i]);
        $.get (pagePictures, function(data){
          var probabilitysfw, probabilitynsfw = (data['results']['result']['tag']['probs']);
      });

        if (probabilitynsfw > probabilitysfw)
        {
            console.log("IM IN BLINDFOLD.JS!:4");
            images[i].src = funGif}
        }
    })(document);
    console.log("IM IN BLINDFOLD.JS!:5");