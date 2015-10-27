;(function ($) {
	
	$(document).ready(function(){

		
		$(window).scroll(function(){                          
            if ($(this).scrollTop() > 200) {
            	$('#menu').addClass('shown');
            } else {
                $('#menu').removeClass('shown');
            }
        });
	
	

		




	});


}(jQuery));
