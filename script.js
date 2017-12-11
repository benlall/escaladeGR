
 /* page scroll on click */
 /*$(function(){   

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
            
}); */


	$(document).ready(function(){

	    $('a[href^="#"]').on('click',function (e) {
	        e.preventDefault();
            
	        var target = this.hash,
	        $target = $(target);
            
	        $('html, body').stop().animate({
	            'scrollTop': $target.offset().top
	        }, 900, 'swing', function () {
          window.location.hash = target;
	        });
	    });
	});