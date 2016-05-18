Template.content.onRendered(function() {
   $(window).scroll(function() {
         var bottom_of_window = $(window).scrollTop();
         if(bottom_of_window > $(".content-container").offset().top - 400){
        $('.content-container .each-fade').each( function(i) {
          setTimeout( function() {
            $('.content-container .each-fade').eq(i).css("opacity", "1");
            $('.content-container .each-fade').eq(i).css({"transform":"translateY(0px)"});  
          }, 200 * i);
      });
     
    }
});
});