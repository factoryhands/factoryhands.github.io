$(window).on('load', function() {
    $('#preloader').fadeOut( 1000 );
    $('body').css({'overflow':'visible'});
});

    $(".menu-link").click(function(e) {
        e.preventDefault();
    
        $(".menu-overlay").toggleClass("open");
        $(".menu").toggleClass("open");
    });

    $('section').mouseenter(function() {
        $('nav a[href="#'+$(this).attr('id')+'"]').addClass('active').siblings('nav a').removeClass('active');
    });

    $('nav a').click(function() {
        $(this).addClass('active').siblings('nav a').removeClass('active');
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top + 'px' }, 800, 'linear');    
    });

$(function() {
    $.scrollify({
        section : ".portfolio-section",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
    }); 
});








