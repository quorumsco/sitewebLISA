$(document).ready(function(){
	$('#footer').css({
		position: 'absolute',
		bottom: '0px',
		left: '0px',
		right: '0px'
	});
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
				$('#'+slide).fadeIn(500, function(){
					footerPosition();
				});			
			});		
		}
		
	});

	//Footer
	function getPosition(){
		return $('header').height() + $('main').height();
	};
	function footerPosition(){
		if ($('#footer').position().top > ($('header').height() + $('main').height())) {
			$('#footer').css({
				position: 'absolute',
				bottom: '0px',
				left: '0px',
				right: '0px'
			});	
		} else {
			$('#footer').css({
				position: 'static'
			});
		}
	}
});