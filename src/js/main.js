$(function() {
    $('.header-all__burger').on('click', function() {
      $('.adaptive').addClass('show');
      $('.adaptive').removeClass('hide');
    });
    $('.close-adaptive').on('click', function() {
      $('.adaptive').addClass('hide');
      $('.adaptive').removeClass('show');
    });
});