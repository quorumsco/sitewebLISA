$(document).ready(function(){
	$('#slider a').on('click', function(e){
		e.preventDefault();
		//Vars
		var lastSlide = $('li.active a').attr('href').substring(1);;			
		var slide = $(this).attr('href').substring(1);
		if (lastSlide != slide) {
			//Boder color
			$('li.active').removeClass('active');
			$(this).parent().addClass('active');
			//Swap
			$('#'+lastSlide).fadeOut(200, function(){
				$('#'+slide).fadeIn(500);			
			});		
		}
		
	});
});