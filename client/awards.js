Template.awards.onRendered(function() {
  $(".big-button").on("click", function() {
    $(".hidden").fadeToggle();
    $(this).fadeOut();
    $(".awards-container").toggleClass("toggle-background");
  });



     $(window).scroll(function() {
    $('.awards-container li').each( function(i) {
         var bottom_of_object = $(this).offset().top + $(this).outerHeight();
         var bottom_of_window = $(window).scrollTop() + $(window).height();
         if(bottom_of_window > bottom_of_object - 300){
            $(this).css({"transform":"translateY(0px)"});
            $(this).css("opacity", "1");

         
          }


      });

    if ($(window).scrollTop() > $(".awards-container").offset().top - 400) {
         $('.fadeUp3').each( function(i) {
              setTimeout( function() {
                $('.fadeUp3').eq(i).css({"transform":"translateY(0px)"});
                $('.fadeUp3').eq(i).css("opacity", "1");
              }, 200 * i);
            });
    }

});

});