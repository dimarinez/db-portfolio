Template.intro.onRendered(function() {
 

  
  $(window).scroll(function() {
      var height = $(window).height();
      var wScroll = $(this).scrollTop();
      $(".Dave-logo").css({'transform' : 'translate('+ wScroll /6 +'%, -'+ wScroll /6 +'%)'})
      $(".links").css({'transform' : 'translate(0px, '+ wScroll +'%)'})
      $(".Dave").css({'transform' : 'translate(0px, '+ wScroll /6 +'%)'})
      $(".social-media").css({'opacity' : ((height - 10*wScroll) / height)})

  });

  if($('body').hasClass("heineken-anchor") == true) {
    $('html, body').delay(1000).animate({
      scrollTop: $('.project1').offset().top - 225
    }, 1500, 'easeInExpo');
    $('body.heineken-anchor').removeClass('heineken-anchor')
  }

   if($('body').hasClass("nike-anchor") == true) {
    $('html, body').delay(1000).animate({
      scrollTop: $('.projects-container').offset().top - 225
    }, 1000, 'easeInExpo');
    $('body.nike-anchor').removeClass('nike-anchor')
  }

  if($('body').hasClass("porsche-anchor") == true) {
    $('html, body').delay(1000).animate({
      scrollTop: $('.project2').offset().top - 225
    }, 1000, 'easeInExpo');
    $('body.porsche-anchor').removeClass('porsche-anchor')
  }

  if($('body').hasClass("glassy-anchor") == true) {
    $('html, body').delay(1000).animate({
      scrollTop: $('.project3').offset().top - 225
    }, 1000, 'easeInExpo');
    $('body.glassy-anchor').removeClass('glassy-anchor')
  }

    if($('body').hasClass("wowwee-anchor") == true) {
    $('html, body').delay(1000).animate({
      scrollTop: $('.project4').offset().top - 225
    }, 1000, 'easeInExpo');
    $('body.wowwee-anchor').removeClass('wowwee-anchor')
  }

    if($('body').hasClass("ernie-anchor") == true) {
    $('html, body').delay(1000).animate({
      scrollTop: $('.project5').offset().top - 225
    }, 1000, 'easeInExpo');
    $('body.ernie-anchor').removeClass('ernie-anchor')
  }




  $(".01").on("click", function() {
    $("html, body").animate({
      scrollTop: $(".projects-container").offset().top
    }, 1500, 'easeInExpo');
  });

   $(".02").on("click", function() {
    $("html, body").animate({
      scrollTop: $(".service-container").offset().top
    }, 1500, 'easeInExpo');
  });


    $(".03").on("click", function() {
    $("html, body").animate({
      scrollTop: $(".content-container").offset().top
    }, 1500, 'easeInExpo');
  });


 $(".04").on("click", function() {
    $("html, body").animate({
      scrollTop: $(".paying-container").offset().top
    }, 1500, 'easeInExpo');
  });


});