jQuery( document ).ready(function() {
	
	$('.sliding').owlCarousel({
    loop:true,
	autoplayTimeout:2000,
	autoplay: false,
	autoplayTimeout:3000,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

	$('.review_content').owlCarousel({
    loop:true,
	dots:true,
    nav:false,
	autoplayTimeout:2000,
	autoplay: false,
	autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
	function visible(partial) {
    var $t = partial,
        $w = jQuery(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

}

jQuery(window).scroll(function(){

	  if(visible(jQuery('.counter1')))
		{
		  if(jQuery('.counter1').hasClass('counter-loaded')) return;
		  jQuery('.counter1').addClass('counter-loaded');
		  
			jQuery('.counter1').each(function () {
				var $this = $(this);
				jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
				duration: 5000,
				easing: 'swing',
				step: function () {
				$this.text(Math.ceil(this.Counter));
				}
			});
			});
		}
	})
	 jQuery(window).scroll( function(){
    
        jQuery('.fade').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},3000);
                    
            }
            
        }); 
    
    });
	
	jQuery(window).scroll( function(){
    if(visible($('.fade1')))
        jQuery('.fade1').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){
                
                jQuery(this).animate({'opacity':'1'},2500);
                    
            }
            
        }); 
    
    });
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
	jQuery(window).scroll( function(){
    if(visible($('.fade2')))
        jQuery('.fade2').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){
                
                jQuery(this).animate({'opacity':'1'},2500);
                    
            }
            
        }); 
    
    });
	
	jQuery(window).scroll( function(){
    if(visible($('.fade3')))
        jQuery('.fade3').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){
                
                jQuery(this).animate({'opacity':'1'},2500);
                    
            }
            
        }); 
    
    });
	
	jQuery(window).scroll( function(){
    if(visible($('.fade4')))
        jQuery('.fade4').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){
                
                jQuery(this).animate({'opacity':'1'},2500);
                    
            }
            
        }); 
    
    });
	
	jQuery(window).scroll( function(){
    if(visible($('.fade5')))
        jQuery('.fade5').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){
                
                jQuery(this).animate({'opacity':'1'},2500);
                    
            }
            
        }); 
    
    });
	
	jQuery(window).scroll( function(){
    if(visible($('.fade6')))
        jQuery('.fade6').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){
                
                jQuery(this).animate({'opacity':'1'},2500);
                    
            }
            
        }); 
    
    });
	
	jQuery(window).scroll( function(){
    if(visible($('.fade7')))
        jQuery('.fade7').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){
                
                jQuery(this).animate({'opacity':'1'},2500);
                    
            }
            
        }); 
    
    });
	
	jQuery(window).scroll( function(){
    if(visible($('.fade8')))
        jQuery('.fade8').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){
                
                jQuery(this).animate({'opacity':'1'},2500);
                    
            }
            
        }); 
    
    });
	
	
	
});
jQuery(window).on('load',function(){
		jQuery(".loader").fadeOut(7000);
		jQuery(".content").fadeIn(2000);
	})
	
	