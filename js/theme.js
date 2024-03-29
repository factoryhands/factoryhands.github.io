$(window).on('load', function() {
    $('#preloader').fadeOut( 1000 );
    $('body').css({'overflow':'visible'});
});

$(".project-list").hide();


if(!(/Android|webOS|BlackBerry|iPhone|iPod|iPad|Opera Mini|IEMobile/i.test(navigator.userAgent) )) { //if not these devices(userAgents)

  $(".projects").on('click', function(){
    if($(".projects").hasClass('active')) {
      ($(this).removeClass('active'));
      setTimeout(
        function() 
        {
          $.scrollify.move('#landing');
        }, 100);
      console.log("hey");
    }
  });


  $.scrollify({
    section:".portfolio-section",
    scrollbars:true,
    before:function(i,panels) {

      var ref = panels[i].attr("data-section-name");

      $(".pagination .active").removeClass("active");

      $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");

      var dname = $.scrollify.current().attr('data-section-name');


      if($.inArray($.scrollify.current().attr('data-section-name') , ['google-clips', 'azure', 'digital-escrow', 'oh-hey', 'skintcinnati']) != -1){  
        $(".project-list, .project-list li").each(function(i) {
          $(this).fadeIn(200);
        });
          $(".projects").addClass("active");
        $(".carat").addClass("carat-active");
      } else {
        $($(".project-list, .project-list li").get().reverse()).each(function(i) {
          $(this).fadeOut(200);
        });
        $(".carat").removeClass("carat-active");
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
}; 

var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'linear',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: false
});


















