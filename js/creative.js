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

    // var wrap = $(".block-nav");
    //     wrap.on("scroll", function(e) {
    //         console.log ('your-message')
        
    //         if (this.scrollTop > 147) {
    //             wrap.addClass("position-fixed");
    //         } else {
    //             wrap.removeClass("position-fixed");
    //         } 
    // });

})(jQuery); // End of use strict
