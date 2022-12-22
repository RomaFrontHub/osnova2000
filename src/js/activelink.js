$(function() {
  $('.header-all__nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
  $('.active-link').removeClass('active-link');
});

$(function() {
  $('.adaptive-all__list a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
  $('.active-link').removeClass('active-link');
});