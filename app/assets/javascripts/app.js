$(document).on('turbolinks:load', function() {
// SEMANTIC UI
  $('.ui.dropdown')
    .dropdown()
  ;

  // $('.ui .item').on('mouseenter', function() {
  //    $('.ui .item').removeClass('active');
  //    $(this).addClass('active');
  // });

  $('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;
  
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
