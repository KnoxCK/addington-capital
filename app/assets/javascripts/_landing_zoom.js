$( document ).ready( function() {

  $("#header-page-down").click(function(e) {
    e.preventDefault();
      $('html,body').animate({
          scrollTop: $("#press").offset().top - 100},
          'slow');
  });

  $("#press-page-down").click(function(e) {
    e.preventDefault();
      $('html,body').animate({
          scrollTop: $(".what-we-do-wrapper").offset().top - 100},
          'slow');
  });

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
});
