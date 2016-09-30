

$(document).ready(function() {
    var height = Math.max($("#preview-news").height(), $("#preview-faq").height());
    $("#preview-news").height(height);
    $("#preview-faq").height(height);

    if ($( window ).width() < 1125 ) {
        $('.abonnement-btn').html('GO');
    };

    if ($( window ).width() < 769 ) {
        $('.newsletter-msg').html('');
    };

});


//Loop scrollTo management
var clickScrollTo = null;

$(window).scroll(function(event){
    var yOffset = window.pageYOffset;

    //Loop scrollTo management
    clickScrollTo = null;

    var currentPageIsNews = $('#nav').next().is('#reset');
    //Transition scroll
    if(window.innerWidth > 1110 && $('#nav').next().hasClass('big')) {
        var breakpoint = 50;
        if (yOffset > breakpoint && !currentPageIsNews){
            $('#nav').addClass('active');
            $('.navbar-brand').find('img').attr('src', '../images/logo/logo-color.svg');
        }else{
          //  $('#nav').removeClass('active');
          //  $('.navbar-brand').find('img').attr('src', '../images/logo/logo-white.svg');
        }
    }
    console.log($('#product').length)
    //Animation fade home


   $('.hide').each( function(i){
        
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        
        if(window.innerWidth >= 768 && bottom_of_window > bottom_of_object  ){   
            $(this).animate({'opacity':'1'},500);
        } else {
            $(this).animate({'opacity':'1'},500);
        }
    });



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
    
    // Manage disapear bullet list for the text on scroll


// Manage text en scroll
// Make an array, then call it. Clean the .active class, and add it after checking the position from the top
    // var tabX = [$('#text1').position().top-200, $('#text2').position().top-200, $('#text3').position().top-200, $('#text4').position().top-200, $('#text5').position().top-200, $('#text6').position().top-200, $('#text7').position().top-200, $('#text8').position().top-200]
    // if ( yOffset > tabX[0]) {
    //     $('#textOnScroll > div').removeClass('active');
    //     $('#textOnScroll > .texts > div').removeClass('active');
    //     $('#textOnScroll > .bulletList > a').removeClass('active');
    //     $('#text1').addClass('active');
    //     $('#text1-background').addClass('active');
    //     $('[href=#text1]').addClass('active');


    // }

    // if (yOffset > tabX[1]) {
    //     $('#textOnScroll > div').removeClass('active');
    //     $('#textOnScroll > .texts > div').removeClass('active');
    //     $('#textOnScroll > .bulletList > a').removeClass('active');
    //     $('#text2').addClass('active');
    //     $('#text2-background').addClass('active');
    //     $('[href=#text2]').addClass('active');

    // }

    // if (yOffset > tabX[2]) {
    //     $('#textOnScroll > div').removeClass('active');
    //     $('#textOnScroll > .texts > div').removeClass('active');
    //     $('#textOnScroll > .bulletList > a').removeClass('active');
    //     $('#text3').addClass('active');
    //     $('#text3-background').addClass('active');
    //     $('[href=#text3]').addClass('active');

    // }
    // if (yOffset > tabX[3]) {
    //     $('#textOnScroll > div').removeClass('active');
    //     $('#textOnScroll > .texts > div').removeClass('active');
    //     $('#textOnScroll > .bulletList > a').removeClass('active');
    //     $('#text4').addClass('active');
    //     $('#text4-background').addClass('active');
    //     $('[href=#text4]').addClass('active');

    // }
    // if (yOffset > tabX[4]) {
    //     $('#textOnScroll > div').removeClass('active');
    //     $('#textOnScroll > .texts > div').removeClass('active');
    //     $('#textOnScroll > .bulletList > a').removeClass('active');
    //     $('#text5').addClass('active');
    //     $('#text5-background').addClass('active');
    //     $('[href=#text5]').addClass('active');

    // }
    // if (yOffset > tabX[5]) {
    //     $('#textOnScroll > div').removeClass('active');
    //     $('#textOnScroll > .texts > div').removeClass('active');
    //     $('#textOnScroll > .bulletList > a').removeClass('active');
    //     $('#text6').addClass('active');
    //     $('#text6-background').addClass('active');
    //     $('[href=#text6]').addClass('active');

    // }
    // if (yOffset > tabX[6]) {
    //     $('#textOnScroll > div').removeClass('active');
    //     $('#textOnScroll > .texts > div').removeClass('active');
    //     $('#textOnScroll > .bulletList > a').removeClass('active');
    //     $('#text7').addClass('active');
    //     $('#text7-background').addClass('active');
    //     $('[href=#text7]').addClass('active');

    // }
    // if (yOffset > tabX[7]) {
    //     $('#textOnScroll > div').removeClass('active');
    //     $('#textOnScroll > .texts > div').removeClass('active');
    //     $('#textOnScroll > .bulletList > a').removeClass('active');
    //     $('#text8').addClass('active');
    //     $('#text8-background').addClass('active');
    //     $('[href=#text8]').addClass('active');

    // }
    
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
            //$('.navbar-brand').find('img').attr('src', '../images/logo/logo-white.svg');
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
    $('.first').on('click', function(){
        $(this).parent().children().eq(1).slideToggle(400);
    });
    
    // Donut chart in aboutv2.jade
    if(window.innerWidth < 500){
        var legendPosition = 'bottom';
    } else {
        var legendPosition = 'inset';
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
                
                show: true,
                position: legendPosition,
                inset: {
                    anchor: 'right',
                    x: 450,
                    y: 220,
                    step: 10,
                  }
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
            // pattern: ['#6AD931', '#00D19C','#0F949A','#20BFFB', '#8255F5', '#9FA4AB', '#20BFFB', '#00D19C']
            pattern: ['#47B6FF', '#33cd5f','#ffc900','#ef473a', '#8D66F3', '#8f8e94', '#20BFFB', '#00D19C']
            //pattern: ['#C6B6F1', '#9F87DE', '#806DA8', '#7E61C9', '#6142B1', '#4928A0']
        }
    });
        
    // GoTop arrow in aboutv2.html    
    $('.go-top').click(function(event){
      event.preventDefault();
      $('html, body').animate({
          scrollTop:0
          },'slow');
      });


    // Gestion des témoignages (1ere partie site) #testimony
    $('.person-1').click(function(event){

      event.preventDefault();

      $('.icones-1').removeClass('fa-circle-o');
      $('.icones-1').addClass('fa-circle');

      $('.icones-2').removeClass('fa-circle');
      $('.icones-2').addClass('fa-circle-o');
      $('.icones-3').removeClass('fa-circle');
      $('.icones-3').addClass('fa-circle-o');

      $('.person-2').removeClass('active');
      $('.person-3').removeClass('active');
      
      $('#testimony-2').css('display', 'none');
      $('#testimony-3').css('display', 'none');
      
      $(this).addClass('active');
      $( "#testimony-1" ).fadeIn(1000);
    })
    
    $('.person-2').click(function(event){

      event.preventDefault();

      $('.icones-2').removeClass('fa-circle-o');
      $('.icones-2').addClass('fa-circle');
      
      $('.icones-1').removeClass('fa-circle');
      $('.icones-1').addClass('fa-circle-o');
      $('.icones-3').removeClass('fa-circle');
      $('.icones-3').addClass('fa-circle-o');


      $('.person-1').removeClass('active');
      $('.person-3').removeClass('active');
      
      $('#testimony-1').css('display', 'none');
      $('#testimony-3').css('display', 'none');
      
      $(this).addClass('active');
      $( "#testimony-2" ).fadeIn(1000);
    })
    
    $('.person-3').click(function(event){

      event.preventDefault();

      $('.icones-3').removeClass('fa-circle-o');
      $('.icones-3').addClass('fa-circle');
      
      $('.icones-1').removeClass('fa-circle');
      $('.icones-1').addClass('fa-circle-o');
      $('.icones-2').removeClass('fa-circle');
      $('.icones-2').addClass('fa-circle-o');

      $('.person-1').removeClass('active');
      $('.person-2').removeClass('active');
      
      $('#testimony-1').css('display', 'none');
      $('#testimony-2').css('display', 'none');
      
      $(this).addClass('active');
      $( "#testimony-3" ).fadeIn(1000);
    })
    
    // Gestion des icones et features
    $('#icon-1').click(function(event){
      event.preventDefault();
      $('#icon-2').removeClass('active');
      $('#icon-3').removeClass('active');
      $('#icon-4').removeClass('active');
      
      $('#content-icon-2').css('display', 'none');
      $('#content-icon-3').css('display', 'none');
      $('#content-icon-4').css('display', 'none');
      
      $(this).addClass('active');
      $("#mobile").fadeOut(0, function(){
        if ($( window ).width() > 1109 ) {
             $("#mobile").css("background-image", "url(../images/home/view-web.png)");
        }
        $("#icon-1").addClass('active');
        $("#mobile").fadeIn("slow");
        $("#content-icon-1" ).fadeIn("slow");    
      })
    })
    
    $('#icon-2').click(function(event){
      event.preventDefault();
      $('#icon-1').removeClass('active');
      $('#icon-3').removeClass('active');
      $('#icon-4').removeClass('active');
      
      $('#content-icon-1').css('display', 'none');
      $('#content-icon-3').css('display', 'none');
      $('#content-icon-4').css('display', 'none');
      
      $(this).addClass('active');
      $("#mobile").fadeOut(0, function(){
        if ($( window ).width() > 1109 ) {
             $("#mobile").css("background-image", "url(../images/home/mobile-screenshot.png)");
        }
        $("#icon-2").addClass('active');
        $("#mobile").fadeIn("slow");
        $( "#content-icon-2" ).fadeIn("slow");    
      })
    })
    
    $('#icon-3').click(function(event){
      event.preventDefault();
      $('#icon-1').removeClass('active');
      $('#icon-2').removeClass('active');
      $('#icon-4').removeClass('active');
      
      $('#content-icon-1').css('display', 'none');
      $('#content-icon-2').css('display', 'none');
      $('#content-icon-4').css('display', 'none');
      
      $(this).addClass('active');
      $("#mobile").fadeOut(0, function(){
        if ($( window ).width() > 1109 ) {
            $("#mobile").css("background-image", "url(../images/home/mobile-screenshot.png)");
        }
        $("#icon-3").addClass('active');
        $("#mobile").fadeIn("slow");
        $( "#content-icon-3" ).fadeIn("slow");    
      })
    })
    
    $('#icon-4').click(function(event){
      event.preventDefault();
      $('#icon-2').removeClass('active');
      $('#icon-3').removeClass('active');
      $('#icon-1').removeClass('active');
      
      $('#content-icon-1').css('display', 'none');
      $('#content-icon-2').css('display', 'none');
      $('#content-icon-3').css('display', 'none');
      $(this).addClass('active');
      $("#mobile").fadeOut(0, function(){
        if ($( window ).width() > 1109 ) {
            $("#mobile").css("background-image", "url(../images/home/mobile-screenshot.png)");
        }

        $("#icon-4").addClass('active');
        $("#mobile").fadeIn("slow");
        $( "#content-icon-4" ).fadeIn("slow");    
      })
    })
    
    // Effet du texte tapé comme sur le site de Slack pour le h2 du premier témoignage
    $(".highlight-span").typeIt({
      speed: 55,
      autoStart: true,
      callback : function () {

        $(".underline").each(function(){
            $(this).animate({ 
                // opacity:0.25
                borderBottomWidth: '3px'

            }, 500 );
        });

      }

    });


    var mymap = L.map('carte').setView([48.505, -0.5], 13);


     L.tileLayer('//{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: 'donn&eacute;es &copy; <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 1,
    maxZoom: 20
}).addTo(mymap);

    
});


