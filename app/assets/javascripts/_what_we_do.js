$(document).ready(function(){
  var hash = window.location.hash
  if (hash) {
    // $('.case-studies-tabs '+hash+'').addClass('properties-button-active');
    $('.retail-case-studies').addClass('hidden');
    $(''+hash+'').removeClass('hidden');
    // $(".residential-page").removeClass("hidden-sm hidden-md hidden-lg hidden-xl");
  }

  $('.prop-arrow-right').click(function(e){
    e.preventDefault();
    var active = $('.about.active')
    if (active.next().is("div")) {
      active.removeClass('active');
      active.next().addClass('active');
    }
  });

  $('.prop-arrow-left').click(function(e){
    e.preventDefault();
    var active = $('.about.active')
    if (active.prev().is("div")) {
      active.removeClass('active');
      active.prev().addClass('active');
    }
  });
});

