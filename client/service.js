Template.service.onRendered(function() {
  $(window).scroll(function() {
  var bottom_of_window = $(window).scrollTop();



  if(bottom_of_window > $('.service-container').offset().top - 500) {
      $('.fadeUp').each(function(i) {
      setTimeout(function() {
        $('.fadeUp').eq(i).css({"transform" : "translateX(0px)"});
        $('.fadeUp').eq(i).css('opacity',"1");
      }, 200 * i);
    
    });
    $('.cliental .row-fade').each(function(i) {
      setTimeout(function() {
        $('.cliental .row-fade').eq(i).css({"transform" : "translateX(0px)"});
        $('.cliental .row-fade').eq(i).css('opacity',"1");
      }, 300 * i);
    
    });

    $('.cliental .row-fade li').each(function(i) {
      setTimeout(function() {
        $('.cliental .row-fade li').eq(i).css('opacity',"1");
      }, 300 * (i * 0.8));
    });


  }
  if ($(window).scrollTop() > $('.agencies').offset().top - 500) {
     $('.fadeUp1').each(function(i) {
      setTimeout(function() {
        $('.fadeUp1').eq(i).css({"transform" : "translateX(0px)"});
        $('.fadeUp1').eq(i).css('opacity',"1");
      }, 200 * i);
    
    });
     $('.agency .row-fade').each(function(i) {
      setTimeout( function() {
        $('.agency .row-fade').eq(i).css({"transform" : "translateX(0px)"});
        $('.agency .row-fade').eq(i).css('opacity',"1");
      }, 300 * i);


    });
    
        $('.agency .row-fade li').each(function(i) {
      setTimeout(function() {
        $('.agency .row-fade li').eq(i).css('opacity',"1");
      }, 300 * (i * 0.8));
    });

   }
});
});