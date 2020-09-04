 document.onreadystatechange = function() {
    var state = document.readyState
    if (state == 'complete') {
      setTimeout(function() {
        document.getElementById('wrap-loader').remove();
        document.getElementById('container-fluid').style.visibility = "visible";
      },12000);
    }
    












    var div = $('.autoscroller');

    $('.autoscroller').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function(evt) {
        if (evt.type === 'DOMMouseScroll' || evt.type === 'keyup' || evt.type === 'mousewheel') {
    
        }
        if (evt.originalEvent.detail < 0 || (evt.originalEvent.wheelDelta && evt.originalEvent.wheelDelta > 0)) { 
            clearInterval(autoscroller);
        }
        if (evt.originalEvent.detail > 0 || (evt.originalEvent.wheelDelta && evt.originalEvent.wheelDelta < 0)) { 
            clearInterval(autoscroller);
        }
    });
    
    var autoscroller = setInterval(function(){
        var pos = div.scrollTop();
        if ((div.scrollTop() + div.innerHeight()) >= div[0].scrollHeight) {
            clearInterval(autoscroller);
        }
        div.scrollTop(pos + 1);
    }, 50);

    
  }



 
    
   