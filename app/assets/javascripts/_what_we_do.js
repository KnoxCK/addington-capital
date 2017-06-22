$(document).ready(function(){
  var hash = window.location.hash
  if (hash) {
    // $('.case-studies-tabs '+hash+'').addClass('properties-button-active');
    $('.retail-case-studies').addClass('hidden');
    $(''+hash+'').removeClass('hidden');
    $('html,body').animate({
      scrollTop: $(''+hash+'').offset().top - 170},
      'slow');
      // $(".residential-page").removeClass("hidden-sm hidden-md hidden-lg hidden-xl");
  }

  $('.about-arrow-right').click(function(e){
    e.preventDefault();
    var active = $('.about.active')
    if (active.next().is("div")) {
      active.removeClass('active');
      var next = active.next();
      next.addClass('active');
      $('.what-we-do-links h5').removeClass('active');
      $('.what-we-do-links h5').each(function(){
        if ($(this).text() === next.children('h3').text()) {
          $(this).addClass('active');
        }
      });
    }
  });

  $('.about-arrow-left').click(function(e){
    e.preventDefault();
    var active = $('.about.active')
    if (active.prev().is("div")) {
      active.removeClass('active');
      var prev = active.prev();
      prev.addClass('active');
      $('.what-we-do-links h5').removeClass('active');
      $('.what-we-do-links h5').each(function(){
        if ($(this).text() === prev.children('h3').text()) {
          $(this).addClass('active');
        }
      });
    }
  });
});
