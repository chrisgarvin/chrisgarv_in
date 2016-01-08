$(document).ready(function() {


  $.getJSON("data/data.json", function(data) {

    for (var i = 0; i < data.response.links.length; i++) {

      var className = data.response.links[i].name;
      var linkAddress = data.response.links[i].url;

      $('.' + className).mouseenter(showName(className, linkAddress));
      $('.' + className).mouseleave(removeName(className, linkAddress));
      $('.' + className).click(gotoUrl(className, linkAddress));
    }

  });
  // $.getJSON("data/config.json", function(data) {
  //   var instaToken = data.response.instagram[0].token;
  //
  //   insta(instaToken);
  //
  // });


  function showName(name, url) {
    return function() {
        $('.' + name + 'Hidden').show("slow");
        $('.' + name + 'ContentTop').slideToggle();
        $('.' + name + 'ContentBottom').slideToggle();
    }
  }

  function removeName(name, url) {
    return function() {
        $('.' + name + 'Hidden').hide();
        $('.' + name + 'ContentTop').slideToggle();
        $('.' + name + 'ContentBottom').slideToggle();
    }
  }

  function gotoUrl(name, url) {
    return function() {
      if (name == 'contact') {
        window.location.href = url;
      } else {
        window.open(url);
      }
    }
  }

  // function insta(instaToken) {
  //   $.get("https://api.instagram.com/v1/users/self/media/recent?access_token=" + instaToken + "&count=20", function(data) {
  //
  //     for (var i = 0; i < 20; i++) {
  //       if (i < 10) {
  //         $('.instagramContentTop').append("<img src='" + data.data[i].images.standard_resolution.url + "'>")
  //       } else {
  //         $('.instagramContentBottom').append("<img src='" + data.data[i].images.standard_resolution.url + "'>")
  //       }
  //     }
  //   });
  // }

});
