//Small image linking to large image
$(".case-studies-box").click(function(e) {
  e.preventDefault();
  $(".case-study-lg").removeClass("active");
  $($(this).data('category')).removeClass('hidden');
  $($(this).data('target')).addClass("active");
  $('html,body').animate({
      scrollTop: $(".case-study-detailed").offset().top - 100},
      'slow');
});

//Right Arrow
$('.prop-arrow-right').click(function(e){
  e.preventDefault();
  var active = $('.case-study-lg.active')
  if (active.next().is("div")) {
    active.removeClass('active');
    active.next().addClass('active');
  }
});

//Left Arrow
$('.prop-arrow-left').click(function(e){
  e.preventDefault();
  var active = $('.case-study-lg.active')
  if (active.prev().is("div")) {
    active.removeClass('active');
    active.prev().addClass('active');
  }
});

// Case study tabs
$('.retail-tab').click(function(e){
  e.preventDefault();
  $('.case-studies-tabs a').removeClass('active');
  $(this).addClass('active');
  $('.case-study-wrapper').addClass('hidden');
  $('.residential-case-studies').addClass('hidden');
  $('.offices-case-studies').addClass('hidden');
  $('.retail-case-studies').removeClass('hidden');
});

$('.residential-tab').click(function(e){
  e.preventDefault();
  $('.case-studies-tabs a').removeClass('active');
  $(this).addClass('active');
  $('.case-study-wrapper').addClass('hidden');
  $('.retail-case-studies').addClass('hidden');
  $('.offices-case-studies').addClass('hidden');
  $('.residential-case-studies').removeClass('hidden');
});

$('.offices-tab').click(function(e){
  e.preventDefault();
  $('.case-studies-tabs a').removeClass('active');
  $(this).addClass('active');
  $('.case-study-wrapper').addClass('hidden');
  $('.residential-case-studies').addClass('hidden');
  $('.retail-case-studies').addClass('hidden');
  $('.offices-case-studies').removeClass('hidden');
});
