Template.intro.onRendered(function() {

  $(window).scroll(function() {
      var height = $(window).height();
      var wScroll = $(this).scrollTop();
      $(".Dave-logo").css({'transform' : 'translate('+ wScroll /2 +'%, -'+ wScroll /2 +'%)'})
      $(".links").css({'transform' : 'translate(0px, '+ wScroll +'%)'})
      $(".Dave").css({'transform' : 'translate('+ wScroll /2 +'%, 0px)'})
      $(".social-media").css({'opacity' : ((height - 10*wScroll) / height)})

  });


  $(".01").on("click", function() {
    $("html, body").animate({
      scrollTop: $(".projects-container").offset().top
    }, 1000, 'easeOutBack');
  });

   $(".02").on("click", function() {
    $("html, body").animate({
      scrollTop: $(".service-container").offset().top
    }, 2000, 'easeOutBack');
  });


    $(".03").on("click", function() {
    $("html, body").animate({
      scrollTop: $(".content-container").offset().top
    }, 3000, 'easeOutBack');
  });


 $(".04").on("click", function() {
    $("html, body").animate({
      scrollTop: $(".paying-container").offset().top
    }, 4000, 'easeOutBack');
  });


});