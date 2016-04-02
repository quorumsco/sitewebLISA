$(document).ready(function(){
    $('#contact input, #contact textarea').on('focusin', function(){
        $(this).next().animate({
            width: '450px'
        }, 300);
    });
    $('#contact input, #contact textarea').on('focusout', function(){
        $(this).next().animate({
            width: '0px'
        }, 300);
    });
});