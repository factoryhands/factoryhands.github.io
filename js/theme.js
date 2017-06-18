$(window).on('load', function() {
    $('#preloader').fadeOut( 1000 );
    $('body').css({'overflow':'visible'}); 
})

$(".home").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 600);
    $('nav a.active').removeClass('active');
    $(this).addClass('active');
});

$(".about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 600);
    $('nav a.active').removeClass('active');
    $(this).addClass('active');
});

$(".work").click(function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top
    }, 600);
    $('nav a.active').removeClass('active');
    $(this).addClass('active');
});

$(".contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 600);
    $('nav a.active').removeClass('active');
    $(this).addClass('active');
});

    $(".scroll,.scroll-btn").click(function(e) {
        e.preventDefault();

        $.scrollify.next();



    });

