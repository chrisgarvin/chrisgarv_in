$(document).ready(function(){


    $.getJSON("data/data.json", function(data){

      for(var i = 0; i < data.response.links.length; i++){

        var className = data.response.links[i].name;
        var linkAddress = data.response.links[i].url;

        $('.'+ className).mouseenter(showName(className,linkAddress));
        $('.'+ className).mouseleave(removeName(className,linkAddress));
        $('.'+ className).click(gotoUrl(className,linkAddress));
    }

  });

    function showName(name,url){
      return function(){
        console.log(url);
        $('.' + name + 'Hidden').show("slow");
      }
    }

    function removeName(name,url){
      return function(){
        console.log(url);
        $('.' + name + 'Hidden').hide("slow");
      }
    }

    function gotoUrl(name,url){
      return function(){
        window.open(url);
      }
    }


});
