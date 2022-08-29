jQuery(window).on('load',function(){
		jQuery(".loader1").fadeOut(7000);
		jQuery(".content1").fadeIn(2000);
	})
jQuery( document ).ready(function() {
	jQuery(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });
	
})
