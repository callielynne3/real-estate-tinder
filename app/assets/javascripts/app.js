$(document).on('turbolinks:load', function() {
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
});
