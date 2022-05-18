$( document ).ready(function() {
	if ($(window).width() <= 768){	
		// if the screen is less than 768 it will add a class called displayClass
		// from a css file that empliment display block 
		$('.footer-links-wrapper').addClass("displayClass");
	}else{
		$('.footer-links-wrapper').removeClass("displayClass");
	}
	$(window).on('resize', function(event){
		if ($(window).width() <= 768){	
			$('.footer-links-wrapper').addClass("displayClass");
		}else{
			$('.footer-links-wrapper').removeClass("displayClass");
			$('.footer-links-wrapper ul').show();
		}	
	});
	// Footer collapse and expand on smaller screen 
	$(document).on("click", ".displayClass h3", function(){
		$(this).next('ul').slideToggle();
	});

});
