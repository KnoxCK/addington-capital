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