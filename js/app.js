$(document).ready(function(){
  //nav bar
    $(window).on('scroll',function(){
        var scroll= $(window).scrollTop();
        if(scroll>=50){
          $('.sticky').addClass('stickyadd')
        }else{
          $('.sticky').removeClass('stickyadd')  
        }
    })

    
});
//typing effect typed.js-master
$(document).ready(function(){
  
var typed = new Typed('.element', {
  strings: ["vingB "," Osperb"],
  typeSpeed: 150,
  backSpeed: 100,
  loop:true
  
});
});

//progress bar waypoints
 
$(document).ready(function(){
  var waypoint = new Waypoint({
  element: document.getElementById('exp-id'),
  handler: function() {
     
    var p= document.querySelectorAll('.progress-br');
           p[0].setAttribute("style", "width:100%;transition:1s all");
           p[1].setAttribute("style", "width:80%;transition:2s all");
           p[2].setAttribute("style", "width:85%;transition:1.8s all");
           p[3].setAttribute("style", "width:75%;transition:2s all");
           p[4].setAttribute("style", "width:90%;transition:2.5s all");
           p[5].setAttribute("style", "width:70%;transition:2.5s all");
  },
  offset:'40%',
  
  
})



})
