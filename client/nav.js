
   

  $('.nav-link a').on("click", function() {
      $(this).children(".line-underneath").css("max-width", "100%");
  });


  $(window).scroll( function() {

    if($(window).scrollTop() < $(".about-container").offset().top + $(".about-container").outerHeight() - 50) {
      $("#mission-btn").children(".line-underneath").css("max-width","0");
      $(".line-underneath.clicked").removeClass('clicked');
      $("#mission-btn").children(".line-underneath").addClass("clicked");
    }
     if($(window).scrollTop() > $(".about-container").offset().top + $(".about-container").outerHeight() - 50 && $(window).scrollTop() < $(".fullpage").offset().top + $(".fullpage").outerHeight() - 50) {
      $("#projects-btn").children(".line-underneath").css("max-width","0");
      $(".line-underneath.clicked").removeClass('clicked');
      $("#projects-btn").children(".line-underneath").addClass("clicked");
    }
     if($(window).scrollTop() > $(".fullpage").offset().top + $(".fullpage").outerHeight() - 50 && $(window).scrollTop() < $(".awards-container").offset().top + $(".awards-container").outerHeight() - 50) {
      $("#awards-btn").children(".line-underneath").css("max-width","0");
      $(".line-underneath.clicked").removeClass('clicked');
      $("#awards-btn").children(".line-underneath").addClass("clicked");
    }
     if($(window).scrollTop() > $(".awards-container").offset().top + $(".awards-container").outerHeight() - 50 && $(window).scrollTop() < $(".service-container").offset().top + $(".service-container").outerHeight() - 50) {
      $("#clients-btn").children(".line-underneath").css("max-width","0");
      $(".line-underneath.clicked").removeClass('clicked');
      $("#clients-btn").children(".line-underneath").addClass("clicked");
    }
     if($(window).scrollTop() > $(".service-container").offset().top + $(".service-container").outerHeight() - 50 && $(window).scrollTop() < $(".content-container").offset().top + $(".content-container").outerHeight() - 50) {
      $("#writing-btn").children(".line-underneath").css("max-width","0");
      $(".line-underneath.clicked").removeClass('clicked');
      $("#writing-btn").children(".line-underneath").addClass("clicked");
    }
     if($(window).scrollTop() > $(".content-container").offset().top + $(".content-container").outerHeight() - 50 && $(window).scrollTop() < $(".rise").offset().top + $(".rise").outerHeight() - 50) {
      $("#speaking-btn").children(".line-underneath").css("max-width","0");
      $(".line-underneath.clicked").removeClass('clicked');
      $("#speaking-btn").children(".line-underneath").addClass("clicked");
    }

    if($(window).scrollTop() > $(".rise").offset().top + $(".rise").outerHeight() - 50 && $(window).scrollTop() < $(".footer-container").offset().top + $(".footer-container").outerHeight() - 50) {
      $("#contact-btn").children(".line-underneath").css("max-width","0");
      $(".line-underneath.clicked").removeClass('clicked');
      $("#contact-btn").children(".line-underneath").addClass("clicked");
    }

    if($(window).scrollTop() < $(".about-container").offset().top - 50) {
      $(".line-underneath.clicked").removeClass('clicked');
    }

  });
  


    $(".mobile-nav-links").hide();

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = $(this.hash);
        $('html, body').stop().animate({'scrollTop': target.offset().top}, 1000, 'easeInOutQuint');

    }); // end animated scroll


    $(".hamburger").on("click", function() {
      $('.mobile-nav-links').fadeToggle();
    });

    $(".close").on("click", function() {
      $('.mobile-nav-links').fadeToggle();
    });

    $(".mobile-nav-link-wrap a").on('click', function() {
      $('.mobile-nav-links').fadeToggle();
    });



  