$(document).ready(function(){
    //Border animation 
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
});