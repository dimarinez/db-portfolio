Template.about.onRendered(function() {
  $(".fadeIn").css("opacity","0");
  $(".nav").hide();
   $(window).scroll(function() {
    if($(window).scrollTop() > $('.about-container').offset().top - $(window).height()) {
    $('.fadeIn').each( function(i) {
         var bottom_of_object = $(this).offset().top + $(window).outerHeight();
         var bottom_of_window = $(window).scrollTop() + $(window).height();
         if(bottom_of_window > bottom_of_object){
             $(this).css({"transform" : "translate(0px, 0px)", "opacity" :"1"});
          }
      });
  }
    if ($(window).scrollTop() > $(".about-container").offset().top - $(window).height()) {
      var offset = Math.min(0, $(window).scrollTop() - $(".about-container").offset().top + $(window).height() - 500);
      $(".about-triangle").css({'transform':'translate('+ offset +'px, 0px)'});

    }

    if($(window).width() < 420) {
       if ($(window).scrollTop() > $(".about-container").offset().top - $(window).height()) {
      var offset = Math.min(0, $(window).scrollTop() - $(".about-container").offset().top + $(window).height() - 175);
      $(".about-triangle").css({'transform':'translate('+ offset +'px, 0px)'});

    }
    } else {

    }

    if($(window).scrollTop() > $(".about-container").offset().top - 50) {
      $(".nav").slideDown().css({'display':'flex'});
    } else {
      $(".nav").hide();
    }
   
});
});