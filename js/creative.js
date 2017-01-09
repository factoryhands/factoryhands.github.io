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

    // Scale div to be size of viewport
    // function thirty_pc() {
    //     var height = $(window).height();
    //     var thirtypc = (100 * height) / 100 ;
    //     thirtypc = parseInt(thirtypc) + 'px';
    //     $(".full, .header-content").css('height',thirtypc);
    // }

    // $(document).ready(function() {
    //     thirty_pc();
    //     $(window).bind('resize', thirty_pc);
    // });

})(jQuery); // End of use strict
