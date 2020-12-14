$(function() {
    $('.btn_wrap').on('click', function() {



        $('.menu').toggleClass('over');

        setTimeout(function() {
            $('.menu li').addClass('lislide');
        }, 400);

        if ($('.menu').hasClass('over')) {
            $('.menu li').removeClass('lislide');
        }


        setTimeout(function() {
            $('.btn').toggleClass('btnout');
        }, 10);
        setTimeout(function() {
            $('.btn2').toggleClass('btnchange');
        }, 10);


    });
});