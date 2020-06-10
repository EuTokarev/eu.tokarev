//Маска для формы телефона
$(function() {
	$("#phone").mask("+7(999) 999-9999");
});

//При скролле вниз сжимается фиксированное head-menu
$(window).scroll(function(){
    if ($(this).scrollTop() > 1) {
        $('.menu').addClass('scroll');
    }
    else {
        $('.menu').removeClass('scroll')
    }
});

//Плавный скролл до якоря
$(document).ready(function(){
    $('a.yakor[href^="#about-us"], *[data-href^="#about-us"]').on('click', function(e){
        e.preventDefault();
        var t = 1000; //Скорость скролла
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top - 93 }, t);
        //Немного выше из-за фиксированного меню
    });
});
