;(function ($) {
	
	$(document).ready(function(){

		
		$(window).scroll(function(){                          
            if ($(this).scrollTop() > 200) {
            	$('#main-menu-index').addClass('shown');
            } else {
                $('#main-menu-index').removeClass('shown');
            }
        });
	});


}(jQuery));
