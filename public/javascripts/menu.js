$(window).scroll(function(event){
	//Transition scroll
	if(window.innerWidth > 425) {
		var yOffset = window.pageYOffset;
		var breakpoint = 50;
		if (yOffset > breakpoint){
			$('#nav').addClass('active');
			$('.navbar-brand img').attr('src', '../images/logo/logo-black.svg');
		}else{
			$('#nav').removeClass('active');
			$('.navbar-brand img').attr('src', '../images/logo/logo-white.svg');
		}
	}
});
$(document).ready(function(){
	//Hamburger Menu
	$('.nav-toggle').on('click', function(){
		$('nav#nav').toggleClass('show-menu');
	});

	//Swith logo && button nav color
	if(window.innerWidth < 425) {
		$('.navbar-brand img').attr('src', '../images/logo/logo-black.svg');
	}
});