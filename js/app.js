$(document).ready(function(){


    $.getJSON("data/data.json", function(data){

      for(var i = 0; i < data.response.links.length; i++){

        var className = data.response.links[i].name;
        var linkAddress = data.response.links[i].url;

        $('.'+ className).click(getUrl(className,linkAddress));

      }

    });

    function getUrl(name,url){
      return function(){
        console.log(url);
        $('.content').append("<a href='" + url +"'><span>"+ name + "</span></a>");
      }
    }


});
