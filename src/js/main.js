(function(){
    'use strict';

    $(document).on("scroll", function(){

        if ($(document).scrollTop() > 100){
          $("#mainHeader").addClass("header-shrink");
        } else {
          $("#mainHeader").removeClass("header-shrink");
        }
        
      });

      window.scroll({
        top: 2500, 
        left: 0, 
        behavior: 'smooth' 
      });
      
      // Scroll certain amounts from current position 
      window.scrollBy({ 
        top: 100, // could be negative value
        left: 0, 
        behavior: 'smooth' 
      });
      
      // Scroll to a certain element
      document.querySelector('.hello').scrollIntoView({ 
        behavior: 'smooth' 
      });

})();

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        
        $('#return-to-top').fadeIn(200);    
    } else {
        $('#return-to-top').fadeOut(200);   
    }
});
$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0                     
    }, 500);
});