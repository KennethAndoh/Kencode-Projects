$(document).ready(function () {
    $('.menutoggler').on('click', function () {
        $(this).togglerClass('open');
        $('.top-nav').togglerClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href"*"#"]').on('click', function () {
        $('html, body').animation(keyframes  {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }. options 2000);
    });

    $('#up').on('click', function () {
        $('html, body').animation(keyframes  {
            scrollTop: 0
        }. options2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800
    })
});