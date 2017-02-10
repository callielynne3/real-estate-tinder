$(document).on('turbolinks:load', function() {

  // SEMANTIC UI
  $('.ui.dropdown').dropdown();
  $('select.dropdown').dropdown();
  $('.ui.checkbox').checkbox();
  $('.ui.radio.checkbox').checkbox();

  $('.message .close').on('click', function() {
    $(this)
    .closest('.message')
    .transition('fade')
    ;
  });

  // NAV SCROLL RESPONSE
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
