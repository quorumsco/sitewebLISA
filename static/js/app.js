$(window).scroll(function(event){
    //Transition scroll
    if(window.innerWidth > 1110 && $('#nav').next().hasClass('big')) {
            var yOffset = window.pageYOffset;
            var breakpoint = 50;
        if (yOffset > breakpoint){
            $('#nav').addClass('active');
            $('.navbar-brand img').attr('src', '../images/logo/logo-color.svg');
        }else{
            $('#nav').removeClass('active');
            $('.navbar-brand img').attr('src', '../images/logo/logo-white.svg');
        }
    }
});
$(document).ready(function(){
    //Border animation - #contact home page
    $('#contact input, #contact textarea').on('focusin', function(){
        var widthInput = $(this).width();
        $(this).parent().children('div').animate({
            width: widthInput+'px'
        }, 300);
    });
    $('#contact input, #contact textarea').on('focusout', function(){
        $(this).parent().children('div').animate({
            width: '0px'
        }, 300);
    });

    //ScrollTo - home page
    $('#nav ul.nav a').on('click', function(e){
        if($('#contact').length > 0) {
            e.preventDefault();
            console.log($(this).attr('href').substring(1));
            var divTop = $(this).attr('href').substring(1);
            var divTop = $(divTop).position().top;
            $('html, body').animate({
                    scrollTop: divTop
                }, 500
            );
        }
    });

    //White Menu
    if($('#nav').next().hasClass('small')) {
        $('#nav').addClass('active');
        $('.navbar-brand img').attr('src', '../images/logo/logo-color.svg');
    }

    //Hamburger Menu
    $('.nav-toggle').on('click', function(){
        $('nav#nav').toggleClass('show-menu');
    });

    //Swith logo && button nav color
    if(window.innerWidth <= 1110) {
        $('.navbar-brand img').attr('src', '../images/logo/logo-color.svg');
    }

    //Language
    $('.flag a').on('click', function(e){
        e.preventDefault();
        if($(this).text() == "EN"){
            $('body').removeClass('fr').addClass('en');
            language();
        } else {
            $('body').removeClass('en').addClass('fr');
            language();
        }
    });
    var lang = navigator.language;
    alert(lang);
    var regex = /^fr/;
    alert(lang);
    //if (lang.search(regex))
    //if (lang.includes(regex))
    if (regex.test(lang))




    //if((lang == "fr")||(lang == "fr-fr")||"fr-be"||"fr-ca"||"fr-lu"||"fr-mc"||"fr-ch") 
{ 
        alert(lang);
        lang = "fr";
        alert(lang);
        $('body').attr('class', lang);
    }
    
    //Slider switch - about page
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