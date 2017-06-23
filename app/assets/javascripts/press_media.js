$(document).on('click', '#news-read-more', function(e) {
  $(".full-news").removeClass("hidden");
	$(".news-brief").addClass("hidden");
	e.preventDefault();
});
$(document).on('click', '#news-close', function(e) {
  $(".full-news").addClass("hidden");
	$(".news-brief").removeClass("hidden");
	e.preventDefault();
});

$(document).ready(function(){

  $('.press-tabs a').click(function(e){
    e.preventDefault();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })

  $('.latest').click(function(e) {
    e.preventDefault();
    $('.news-archive').addClass('hidden');
    $('.latest-news').removeClass('hidden');
  });

  $('.archive').click(function(e) {
    e.preventDefault();
    $('.latest-news').addClass('hidden');
    $('.news-archive').removeClass('hidden');
  });

  $('.year').click(function(e) {
    e.preventDefault();
    $($(this).data('target')).toggleClass('hidden');
  });
});
