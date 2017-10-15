$( document ).ready( function() {
  $("#what-we-do-page-down").click(function(e) {
    e.preventDefault();
    $.smoothScroll({
      scrollTarget: '.blue-contact-wrapper',
      offset: -100,
      speed: 1000
    });
  });

  $("#back-to-top").click(function(e) {
    e.preventDefault();
    $.smoothScroll({
      scrollTarget: 0,
      offset: -100,
      speed: 1000
    });
  });

  $("#what-we-do-link").click(function(e) {
    e.preventDefault();
    $(".navbar-addcap-link").removeClass('active');
    $(this).addClass('active');
    $.smoothScroll({
      scrollTarget: '.what-we-do-wrapper',
      offset: -100,
      speed: 1000
    });
  });
});
