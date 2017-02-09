$(document).on('turbolinks:load', function() {
  attachSemanticUI()
  accomodateHomePageMap()
  $(window).scroll(
      {
          previousTop: 0
      },
      function () {
      var currentTop = $(window).scrollTop();
      setTimeout(function() {
      if (currentTop < this.previousTop - 5 ) {
          // $(".sidebar em").text("Up");
          $("nav").show();
      } else if (currentTop > this.previousTop + 5) {
          // $(".sidebar em").text("Down");
          $("nav").hide();
      }
      this.previousTop = currentTop;
    }, 100)

  });
});

function attachSemanticUI () {
    $('.ui.dropdown')
      .dropdown()
    ;
  }
}
