$(window).on('load', function() {
    $('#preloader').fadeOut( 1000 );
    $('body').css({'overflow':'visible'}); 
})

	$(".scroll,.scroll-btn").click(function(e) {
		e.preventDefault();

		$.scrollify.next();



	});