Template.paying.onRendered(function() {

     $(window).scroll(function() {
         var bottom_of_window = $(window).scrollTop();
         if(bottom_of_window > $(".paying-container").offset().top - 500){
        $('.paying-container .fadeUp2').each( function(i) {
          setTimeout( function() {
            $('.paying-container .fadeUp2').eq(i).css({"transform":"translateY(0px)"});
            $('.paying-container .fadeUp2').eq(i).css("opacity", "1");  
          }, 200 * i);
      });
    }
});
});