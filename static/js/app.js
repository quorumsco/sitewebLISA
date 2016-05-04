//Loop scrollTo management
var clickScrollTo = null;

$(window).scroll(function(event){
    var yOffset = window.pageYOffset;
    
    //Loop scrollTo management
    clickScrollTo = null;

    //Transition scroll
    if(window.innerWidth > 1110 && $('#nav').next().hasClass('big')) {
        var breakpoint = 50;
        if (yOffset > breakpoint){
            $('#nav').addClass('active');
            $('.navbar-brand').find('img').attr('src', '../images/logo/logo-color.svg');
        }else{
            $('#nav').removeClass('active');
            $('.navbar-brand').find('img').attr('src', '../images/logo/logo-white.svg');
        }
    }

    //Animation fade home
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
    //Animation fade believe
    if(window.innerWidth > 425 && $('#believe').length > 0 && $('html').attr('lang') == 'fr') {
        var breakpointSecond = $('.believe-fr:nth-child(3)').position().top - 700;
        var breakpointThird = $('.believe-fr:nth-child(4)').position().top - 600;
        var breakpointList = $('#believe ul').position().top - 500;

        if (yOffset > breakpointSecond){
            $('.believe-fr:nth-child(3)').addClass('animated fadeInUp');
        }
        if (yOffset > breakpointThird){
            $('.believe-fr:nth-child(4)').addClass('animated fadeInUp');
        }
        if (yOffset > breakpointList){
            $('#believe ul').addClass('animated fadeInUp');
        }
    }
});
$(document).ready(function(){
    //Animation fade believe
    $('.believe-fr:nth-child(2)').addClass('animated fadeInUp');
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
            $('#contact').find('[name="_replyto"]').attr('placeholder', chosenOne[0]);
            $('#contact').find('[name="name"]').attr('placeholder', chosenOne[1]);
        } else {
            var tabEmailEN = [['barrackobama@whitehouse.org', 'Barrack Obama'], ['franck.underwood@gmail.com', 'Franck Underwood'], ['georges.washington@gmail.com', 'Georges Washington']];
            var chosenOne = tabEmailEN[Math.floor(Math.random() * tabEmailEN.length)];
            $('#contact').find('[name="_replyto"]').attr('placeholder', chosenOne[0]);
            $('#contact').find('[name="name"]').attr('placeholder', chosenOne[1]);
        }
        //Custom error message - #contact input - home page
        function validEmail(email) {
            var emailRegex = /\S+@\S+\.\S+/;
            return emailRegex.test(email);
        }
        function validName(name) {
            var nameRegex = /^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s-]{3,60}$/;
            return nameRegex.test(name)
        }
        function validMessage(message) {
            var messageRegex = /^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]{0,300}$/;
            return messageRegex.test(message)
        }
        $('#contact').find('form').find('button').on('click', function() {
            if(window.location.pathname.substring(0, 4) == "/fr/") {
                if(!validEmail($('#contact').find('[name="_replyto"]').val())){
                    $('#contact').find('[name="_replyto"]')[0].setCustomValidity("Veuillez renseigner un email valide.");
                } else {
                    $('#contact').find('[name="_replyto"]')[0].setCustomValidity("");
                }
                if(!validName($('#contact').find('[name="name"]').val())){
                    $('#contact').find('[name="name"]')[0].setCustomValidity("Veuillez renseigner un nom et prénom valides. Lettres et nombres uniquement, entre 3 et 60 caractères.");
                } else {
                    $('#contact').find('[name="name"]')[0].setCustomValidity("");
                }
                if(!validMessage($('#contact').find('[name="message"]').val())){
                    $('#contact').find('[name="message"]')[0].setCustomValidity("Veuillez renseigner un message valide. 300 caractères maximum");
                }
            } else {
                if(!validEmail($('#contact').find('[name="_replyto"]').val())){
                    $('#contact').find('[name="_replyto"]')[0].setCustomValidity("Set a valid email.");
                } else {
                    $('#contact').find('[name="_replyto"]')[0].setCustomValidity("");
                }
                if(!validName($('#contact').find('[name="name"]').val())){
                    $('#contact').find('[name="name"]')[0].setCustomValidity("Set a valid name. Only letters and numbers, between 3 & 60 characters.");
                } else {
                    $('#contact').find('[name="name"]')[0].setCustomValidity("");
                }
                if(!validMessage($('#contact').find('[name="message"]').val())){
                    $('#contact').find('[name="message"]')[0].setCustomValidity("Set a valid message. 300 characters maximum");
                }
            }
        });
        $('#contact form input, #contact form textarea').on('change', function() {
            if(validEmail($('#contact').find('[name="_replyto"]').val())){
                $('#contact').find('[name="_replyto"]')[0].setCustomValidity("");
            }
            if(!validName($('#contact').find('[name="name"]').val())){
                $('#contact').find('[name="name"]')[0].setCustomValidity("");
            }
            if(!validMessage($('#contact').find('[name="message"]').val())){
                $('#contact').find('[name="message"]')[0].setCustomValidity("");
            }
        });
    }

    //ScrollTo - home page
    $('#nav').find('ul.nav').find('a').not('.link').on('click', function(e){
        if($('#contact').length > 0) {
            e.preventDefault();
            var name = $(this).attr('href').substring(1);
            //Loop scrollTo management
            if(clickScrollTo != name){
                console.log(name);
                clickScrollTo = name;
                var divTop = $(name).position().top;
                $('html, body').animate({
                        scrollTop: divTop
                    }, 500
                );
            }
        }
    });

    //White Menu
    if($('#nav').next().hasClass('small')) {
        $('#nav').addClass('active');
        $('.navbar-brand').find('img').attr('src', '../images/logo/logo-color.svg');
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
        if(window.innerWidth <= 1110 && $('#nav').next().hasClass('big')) {
            $('.navbar-brand').find('img').attr('src', '../images/logo/logo-color.svg');
        } else if(window.pageYOffset <= 50 && $('#nav').next().hasClass('big')){
            $('.navbar-brand').find('img').attr('src', '../images/logo/logo-white.svg');
        } 
        if(window.innerWidth > 1110) {
            $('#nav').removeClass('show-menu');
        }
    });

    //Language
    $('.flag').find('a').on('click', function(e){
        //e.preventDefault();
        var host = "//"+window.location.hostname;
        var path = window.location.pathname.substring(4);
        if($(this).children('img').attr('alt') == "EN"){
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
        $.each($('ul.nav').find('a').not('.link'), function() {
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
            $('#'+lastSlide).fadeOut(0, function(){
                $('#'+slide).fadeIn(400);
                                //donut chart
                if (slide == "team"){
                    if(window.innerWidth < 500){
                        var legendPosition = 'bottom';
                    } else {
                        var legendPosition = 'right';
                    }
                        var chart = c3.generate({
                            data: {
                                columns: [
                                    ['Information Technology', 30],
                                    ['Social & Cognitive Sciences', 20] ,
                                    ['Data Sciences', 20],
                                    ['Field & Customer Officers', 20],
                                    ['Data Vizualisation', 5],
                                    ['Communication Officers', 5]
                                ],
                                type: 'donut'
                            },
                            legend: {
                                    position: legendPosition
                            },
                            donut: {
                                label: {
                                    format: function (value, ratio, id) {
                                        return "";
                                    }
                                }
                            },
                            color: {
                                //pattern: ['#9FA4AB', '#6AD931', '#8255F5', '#0F949A', '#20BFFB', '#00D19C']
                                pattern: ['#6AD931', '#00D19C','#0F949A','#20BFFB', '#8255F5', '#9FA4AB', '#20BFFB', '#00D19C']
                                //pattern: ['#C6B6F1', '#9F87DE', '#806DA8', '#7E61C9', '#6142B1', '#4928A0']
                            }
                        });
                }           
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
    $('#faq').find('ul').find('li').find('p:nth-child(1)').on('click', function(){
        $(this).parent().children().eq(1).slideToggle(500);

    });
});

