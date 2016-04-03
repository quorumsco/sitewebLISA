$(document).ready(function(){
	$('#slider a').on('click', function(e){
		e.preventDefault();
		$('#slider li').removeClass('active');
		$(this).parent().addClass('active');
		var slide = $(this).attr('href').substring(1);
		$('#slide section').fadeOut(200);
		$('#'+slide).fadeIn(200);
	});
});