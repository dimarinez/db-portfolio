Template.project2.onRendered(function() {
  $(window).scroll(function() {
      var height = $(window).height();
      var wScroll = $(this).scrollTop();
      var project2 = $(".project2").offset().top;
    if (wScroll == project2) {

    } 
  });
});