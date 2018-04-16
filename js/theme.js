$(window).on('load', function() {
    $('#preloader').fadeOut( 1000 );
    $('body').css({'overflow':'visible'});
});

$(".project-list").hide();

$(".menu-link").click(function(e) {
  e.preventDefault();
    
  $(".menu-overlay").toggleClass("open");
  $(".menu").toggleClass("open");
  $("body").toggleClass("no-scroll");
});


if(!(/Android|webOS|BlackBerry|iPhone|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent) )) { //if not these devices(userAgents)

  $.scrollify({
    section:".portfolio-section",
    scrollbars:true,
    before:function(i,panels) {

      var ref = panels[i].attr("data-section-name");

      $(".pagination .active").removeClass("active");

      $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");


      if($.scrollify.current().attr('data-section-name') == 'google-clips', 'azure', 'digital-escrow', 'oh-hey', 'skintcinnati'){
        $(".project-list, .project-list li").each(function(i) {
          $(this).delay(100 * i).fadeIn(500);
        });
      } else {
        $(".project-list").hide();
      } 
    },
    afterRender:function() {
      var pagination = "<ul class=\"pagination\">";
      var activeClass = "";
      $(".portfolio-section").each(function(i) {
        activeClass = "";
        if(i===0) {
          activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });

      pagination += "</ul>";

      $(".home").append(pagination);
      $(".pagination a").on("click",$.scrollify.move);
      $(".nav-logo a").on("click",$.scrollify.move);
    }

});

}













