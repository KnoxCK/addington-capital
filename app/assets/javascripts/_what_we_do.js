$(document).ready(function(){
  var hash = window.location.hash
  if (hash && hash === '#news-archive') {
    $('.latest-news').addClass('hidden');
    $('.news-archive').removeClass('hidden');
    $('.archive').addClass('active');
  } else if (hash && hash !== '#whatwedo') {
    $('.retail-tab').removeClass('active');
    $('.case-studies-tabs .'+hash.substring(6)+'-tab').addClass('active');
    $('.retail-case-studies').addClass('hidden');
    $('.retail-wrapper').addClass('hidden');
    $(''+hash+'').removeClass('hidden');
    $('.'+hash.substring(6)+'-wrapper').removeClass('hidden');
    $('html,body').animate({
      scrollTop: $(''+hash+'').offset().top - 170});
  }

  $('.what-we-do-links h5').click(function(e) {
    e.preventDefault();
    $('.about').removeClass('active');
    // $('.about').addClass('hidden');
    $('.what-we-do-links h5').removeClass('active');
    $($(this).data('target')).addClass('active');
    $(this).addClass('active');
    // $($(this).data('target')).removeClass('hidden');
  });

  $('.about-arrow-right').click(function(e){
    e.preventDefault();
    var active = $('.about.active')
    if (active.next().is("div")) {
      active.removeClass('active');
      // $('.about').addClass('hidden');
      var next = active.next();
      // next.removeClass('hidden');
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
      // $('.about').addClass('hidden');
      var prev = active.prev();
      // prev.removeClass('hidden');
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
