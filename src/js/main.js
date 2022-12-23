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

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 0) {
    btn.addClass('show-button');
  } else {
    btn.removeClass('show-button');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});