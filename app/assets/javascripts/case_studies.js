//Small image linking to large image
$(".case-studies-box").click(function(e) {
  e.preventDefault();
  $(".case-study-lg").removeClass("active");
  // $($(this).data('category')).removeClass('hidden');
  $($(this).data('target')).addClass("active");
  // $('html,body').animate({
  //     scrollTop: $(".case-study-detailed").offset().top - 100},
  //     'slow');
  $.smoothScroll({
    scrollTarget: '.case-study-detailed',
    offset: -100,
    speed: 600
  });

});

//Right Arrow
$('.prop-arrow-right').click(function(e){
  e.preventDefault();
  var active = $('.case-study-lg.active')
  if (active.next().hasClass("case-study-lg")) {
    active.removeClass('active');
    active.next().addClass('active');
  }
});

//Left Arrow
$('.prop-arrow-left').click(function(e){
  e.preventDefault();
  var active = $('.case-study-lg.active')
  if (active.prev().hasClass("case-study-lg")) {
    active.removeClass('active');
    active.prev().addClass('active');
  }
});

// Case study tabs
$('.retail-tab').click(function(e){
  e.preventDefault();
  $('.case-studies-tabs a').removeClass('active');
  $(this).addClass('active');
  $('.residential-wrapper').addClass('hidden');
  $('.offices-wrapper').addClass('hidden');
  $('.case-study-lg').removeClass('active');
  $('.retail-wrapper .case-study-lg').first().addClass('active');
  $('.retail-wrapper').removeClass('hidden');
  $('.residential-case-studies').addClass('hidden');
  $('.offices-case-studies').addClass('hidden');
  $('.retail-case-studies').removeClass('hidden');
});

$('.residential-tab').click(function(e){
  e.preventDefault();
  $('.case-studies-tabs a').removeClass('active');
  $(this).addClass('active');
  $('.retail-wrapper').addClass('hidden');
  $('.offices-wrapper').addClass('hidden');
  $('.case-study-lg').removeClass('active');
  $('.residential-wrapper .case-study-lg').first().addClass('active');
  $('.residential-wrapper').removeClass('hidden');
  $('.retail-case-studies').addClass('hidden');
  $('.offices-case-studies').addClass('hidden');
  $('.residential-case-studies').removeClass('hidden');
});

$('.offices-tab').click(function(e){
  e.preventDefault();
  $('.case-studies-tabs a').removeClass('active');
  $(this).addClass('active');
  $('.retail-wrapper').addClass('hidden');
  $('.residential-wrapper').addClass('hidden');
  $('.case-study-lg').removeClass('active');
  $('.offices-wrapper .case-study-lg').first().addClass('active');
  $('.offices-wrapper').removeClass('hidden');
  $('.residential-case-studies').addClass('hidden');
  $('.retail-case-studies').addClass('hidden');
  $('.offices-case-studies').removeClass('hidden');
});
