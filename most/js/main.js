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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuaGVhZGVyLWFsbF9fYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJy5hZGFwdGl2ZScpLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICQoJy5hZGFwdGl2ZScpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5jbG9zZS1hZGFwdGl2ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCcuYWRhcHRpdmUnKS5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAkKCcuYWRhcHRpdmUnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxudmFyIGJ0biA9ICQoJyNidXR0b24nKTtcclxuXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDApIHtcclxuICAgIGJ0bi5hZGRDbGFzcygnc2hvdy1idXR0b24nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYnRuLnJlbW92ZUNsYXNzKCdzaG93LWJ1dHRvbicpO1xyXG4gIH1cclxufSk7XHJcblxyXG5idG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOjB9LCAnMzAwJyk7XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9