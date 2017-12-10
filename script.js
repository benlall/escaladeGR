$('.item').css('min-height',$('.item').height()); /*permet de fixer la hauteur du carousel*/

 /* page scroll on click */
$(function(){   

        var scroll = function() {   
            $('.page-scroll a').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1000, 'easeInOutExpo');
                event.preventDefault();
            });       
        } 
    
        scroll()
            
});