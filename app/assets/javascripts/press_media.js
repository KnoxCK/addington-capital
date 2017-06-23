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

  $('.news-read-more').click(function(e) {
    e.preventDefault();
    console.log($(this).data('target'));
    $($(this).data('target')).removeClass('hidden');
    $(this).parent().parent().addClass('hidden');

  });

  $('.news-close').click(function(e) {
    e.preventDefault();
    $(this).parent().parent().addClass('hidden');
    $($(this).data('target')).removeClass('hidden');
  });
});
