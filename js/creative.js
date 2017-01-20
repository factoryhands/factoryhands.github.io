(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        console.log($($anchor.attr('href')).offset());
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1250, 'easeInOutExpo'); 
        event.preventDefault();
    }); 

    $("ul.block-nav").stick_in_parent();

})(jQuery); // End of use strict
