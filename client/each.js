Template.project1.onRendered(function() {



  $(window).scroll(function() {

    if($(window).scrollTop() > $(".fullpage").offset().top - 120 && $(window).scrollTop() < $(".fullpage").offset().top + $(".fullpage").outerHeight()) {
      $('body').addClass("snap-it-up");
    } else {
      $('body').removeClass("snap-it-up");
    }



    $('.fadeIn1').each( function(i) {
         var bottom_of_object = $(this).offset().top;
         var bottom_of_window = $(window).scrollTop() + $(window).height();
         if(bottom_of_window > bottom_of_object){
            $(this).css("opacity", "1");
            $(this).css({"transform" : "translate(0px, 0px)"});


          }


      });


       $('.fadeIn2').each( function(i) {
         var bottom_of_object= $(this).offset().top;
         var bottom_of_window = $(window).scrollTop() + $(window).height();
         if(bottom_of_window > bottom_of_object){
             $(this).css("opacity", "1");
             $(this).css({"transform" : "translate(0px, 0px)"});
          }
      });

          $('.fadeIn3').each( function(i) {
         var bottom_of_object = $(this).offset().top;
         var bottom_of_window = $(window).scrollTop() + $(window).height();
         if(bottom_of_window > bottom_of_object){
             $(this).css("opacity", "1");
             $(this).css({"transform" : "translate(0px, 0px)"});
          }
      });

             $('.fadeIn4').each( function(i) {
         var bottom_of_object = $(this).offset().top;
         var bottom_of_window = $(window).scrollTop() + $(window).height();
         if(bottom_of_window > bottom_of_object){
             $(this).css("opacity", "1");
             $(this).css({"transform" : "translate(0px, 0px)"});
          }
      });

        $('.fadeIn5').each( function(i) {
         var bottom_of_object = $(this).offset().top;
         var bottom_of_window = $(window).scrollTop() + $(window).height();
         if(bottom_of_window > bottom_of_object){
             $(this).css("opacity", "1");
             $(this).css({"transform" : "translate(0px, 0px)"});
          }
      });

        $('.fadeIn6').each( function(i) {
         var bottom_of_object = $(this).offset().top;
         var bottom_of_window = $(window).scrollTop() + $(window).height();
         if(bottom_of_window > bottom_of_object){
             $(this).css("opacity", "1");
             $(this).css({"transform" : "translate(0px, 0px)"});
          }
      });


       if($(window).scrollTop() > $(".project2").offset().top - 200) {
         $(".heineken").css({'opacity':'1','transform':'translate(0, 0)' });
       }

       if($(window).scrollTop() > $(".project6").offset().top - 200) {
         $(".ErnieBall").css({'opacity':'1','transform':'translate(0, 0)' });
         $(".ErnieBall-logo").css({'opacity':'1','transform':'translate(0, 0)' });
       }

       if($(window).scrollTop() > $(".project7").offset().top - 200) {
         $(".hand").css({'opacity':'1','transform':'translate(0, 0)' });
         $(".Kaiser").css({'opacity':'1','transform':'translate(0, 0)' });
       }

       if($(window).scrollTop() > $(".project8").offset().top - 200) {
         $(".Weta").css({'opacity':'1','transform':'translate(0, 0)' });
       }


       if($(window).scrollTop() > $(".project1").offset().top - 200) {
        $(".shadows").css({'opacity':'1','transform':'translate(0, 0)' });
        $(".nikes").css({'transform':'translate(0, 0)'});
       }

       if($(window).scrollTop() > $('.project3').offset().top - 200) {
        $(".porsche-iphone").css({'opacity':'1','transform':'translate(0, 0)' });
       }

        if($(window).scrollTop() > $('.project4').offset().top - 200) {
        $(".glassy").css({'opacity':'1','transform':'translate(0, 0)' });
       }

        if($(window).scrollTop() > $('.project5').offset().top - 200) {
        $(".robot").css({'opacity':'1','transform':'translate(0, 0)' });
        $(".ipad").css({'opacity':'1','transform':'translate(0, 0)' });
       }

});



});

