$(window).on('load', function() {
    $('#preloader').fadeOut( 1000 );
    $('body').css({'overflow':'visible'}); 
})


$('section').mouseenter(function() {
    $('nav a[href="#'+$(this).attr('id')+'"]').addClass('active').siblings('nav a').removeClass('active');
});

$('nav a').click(function() {
    $(this).addClass('active').siblings('nav a').removeClass('active');
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top + 'px' }, 800, 'linear');    
});



$(".scroll,.scroll-btn").click(function(e) {
    e.preventDefault();

    $.scrollify.next();
});

