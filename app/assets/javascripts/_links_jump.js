$( document ).ready( function() {
  $("#what-we-do-page-down").click(function(e) {
    e.preventDefault();
      $('html,body').animate({
          scrollTop: $(".blue-contact-wrapper").offset().top - 100},
          'slow');
  });

  $("#back-to-top").click(function(e) {
    e.preventDefault();
      $('html,body').animate({
          scrollTop: 0},
          'slow');
  });

  $("#what-we-do-link").click(function(e) {
    console.log('oi');
    e.preventDefault();
    $(".navbar-addcap-link").removeClass('active');
    $(this).addClass('active');
    console.log('oi');
      $('html,body').animate({
          scrollTop: $(".what-we-do-wrapper").offset().top - 100},
          'slow');
  });
});
