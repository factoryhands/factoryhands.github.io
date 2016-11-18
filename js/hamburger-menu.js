(function($) {
    "use strict"; // Start of use strict

	$('.menu-burger, .menu-items').on('click', function() {
  	$('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
  	$('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
	});
	
})(jQuery); // End of use strict