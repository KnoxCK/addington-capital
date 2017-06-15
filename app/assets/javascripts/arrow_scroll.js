$(document).on('click', '.about-arrow-r-one', function(e) {
  $(".about-residential").addClass("hidden");
	$(".about-xx").removeClass("hidden");
	$(".about-arrow-r-one").addClass("hidden");
	$(".about-arrow-r-two").removeClass("hidden");
	e.preventDefault();
});