Template.awards.onRendered(function() {
  $(".big-button").on("click", function() {
    $(".hidden").fadeToggle();
    $(".awards-container").toggleClass("toggle-background");
    $(".big-button h4").delay(500).text(
      $(".big-button h4").text() == "Show Less" ? "See all 62 awards >" : "Show Less");
  });

});