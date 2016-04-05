$(document).ready(function(){
    //Border animation 
    $('#contact input, #contact textarea').on('focusin', function(){
        var widthInput = $(this).width();
        console.log(widthInput);
        $(this).next().animate({
            width: widthInput+'px'
        }, 300);
    });
    $('#contact input, #contact textarea').on('focusout', function(){
        $(this).next().animate({
            width: '0px'
        }, 300);
    });
});