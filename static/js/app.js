$(window).scroll(function(event){
    var yOffset = window.pageYOffset;

    //Transition scroll
    if(window.innerWidth > 1110 && $('#nav').next().hasClass('big')) {
        var breakpoint = 50;
        if (yOffset > breakpoint){
            $('#nav').addClass('active');
            $('.navbar-brand img').attr('src', '../images/logo/logo-color.svg');
        }else{
            $('#nav').removeClass('active');
            $('.navbar-brand img').attr('src', '../images/logo/logo-white.svg');
        }
    }

    //Animation fade top
    if(window.innerWidth >= 768 && $('#product').length > 0) {
        var breakpointProduct = $('#product').position().top - 400;
        var breakpointWebconsole = $('#webconsole').position().top - 400;
        var breakpointMobile = $('#mobile').position().top - 400;
        var breakpointTarget = $('#target').position().top - 400;

        if (yOffset > breakpointProduct){
            $('#product').addClass('animated fadeInUp');
        }
        if (yOffset > breakpointWebconsole){
            $('#webconsole').addClass('animated fadeInUp');
        }
        if (yOffset > breakpointMobile){
            $('#mobile').addClass('animated fadeInUp');
        }
        if (yOffset > breakpointTarget){
            $('#target').addClass('animated fadeInUp');
        }
    }
});
$(document).ready(function(){
    //Border animation - #contact home page
    $('#contact input, #contact textarea, #newsletter input').on('focusin', function(){
        var widthInput = $(this).width();
        $(this).parent().children('div').animate({
            width: widthInput+'px'
        }, 300);
    });
    $('#contact input, #contact textarea, #newsletter input').on('focusout', function(){
        $(this).parent().children('div').animate({
            width: '0px'
        }, 300);
    });

    //Random email/name - #contact home page
    if($('#contact').length > 0) {
        if(window.location.pathname.substring(0, 4) == "/fr/") {
            var tabEmailFR = [['barrackobama@whitehouse.org', 'Barrack Obama'], ['mahatma@gandhi.world', 'Gandhi Mahatma'], ['p.rickwaert@hotmail.fr', 'Philippe Rickwaert']];
            var chosenOne = tabEmailFR[Math.floor(Math.random() * tabEmailFR.length)];
            $('#contact [name="_replyto"]').attr('placeholder', chosenOne[0]);
            $('#contact [name="name"]').attr('placeholder', chosenOne[1]);
        } else {
            var tabEmailEN = [['barrackobama@whitehouse.org', 'Barrack Obama'], ['franck.underwood@gmail.com', 'Franck Underwood'], ['georges.washington@gmail.com', 'Georges Washington']];
            var chosenOne = tabEmailEN[Math.floor(Math.random() * tabEmailEN.length)];
            $('#contact [name="_replyto"]').attr('placeholder', chosenOne[0]);
            $('#contact [name="name"]').attr('placeholder', chosenOne[1]);
        }
    }
    //ScrollTo - home page

    $('#nav ul.nav a').not('.link').on('click', function(e){
        if($('#contact').length > 0) {
            e.preventDefault();
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
        $('.navbar-brand').find('img').attr('src', '../images/logo/logo-color.svg');
    }
    $(window).resize(function() {
        console.log(window.innerWidth);
        if(window.innerWidth <= 1110 && $('#nav').next().hasClass('big')) {
            $('.navbar-brand').find('img').attr('src', '../images/logo/logo-color.svg');
        } else if(window.pageYOffset <= 50){
            $('.navbar-brand').find('img').attr('src', '../images/logo/logo-white.svg');
        } 
        if(window.innerWidth > 1110) {
            $('#nav').removeClass('show-menu');
        }
    });

    //Language

    $('.flag a').on('click', function(e){
        //e.preventDefault();
        var host = "//"+window.location.hostname;
        var path = window.location.pathname.substring(4);
        if($(this).text() == "EN"){
            $(this).attr('href', host+"/en/"+path);
        } else {
            $(this).attr('href', host+"/fr/"+path);
        }
    });

    //a(href) with language EN/FR
    $.each($('.link'), function() {
        if($(this).attr('href').substring(0,1) == "/") {
            $(this).attr('href', window.location.pathname.substring(0,3)+""+$(this).attr('href'));
        }
    });
    if(window.location.pathname.substring(4) != "") {
        $.each($('ul.nav a').not('.link'), function() {
            if($(this).attr('href').substring(0,1) == "/") {
                $(this).attr('href', window.location.pathname.substring(0,3)+""+$(this).attr('href'));
            }
        });
    }
    $('a.navbar-brand').attr('href', window.location.pathname.substring(0, 4));

    
    //Slider switch - about page
    $('#slider').find('a').on('click', function(e){
        e.preventDefault();
        //Vars
        var lastSlide = $('li.active').find('a').attr('href').substring(1);;            
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

    //Newsletter
    var lang = navigator.language;
    var regex = /^fr/;
    if(regex.test(lang)){
        $('#newsletter').find('form').attr('action', '//quorum-impact.us12.list-manage.com/subscribe/post?u=8d7c7595072992d8808c7993d&amp;id=e648f190bc')
    }
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
        return "";
    }
    $('#target').on('mouseenter', function(event){
        if(getCookie('newsletter') != 1){
            $('#newsletter').show();
        }
    });
    $('#newsletter').find('button').on('click', function() {
        $('#newsletter').hide();
        var d = new Date();
        d.setTime(d.getTime() + (365*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = "newsletter=1;"+ expires;
    });

    //FAQ toggle
    $('#faq ul li p:nth-child(1)').on('click', function(){
        $(this).parent().children().eq(1).slideToggle(500);

    });
});