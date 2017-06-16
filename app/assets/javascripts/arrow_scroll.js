//what we do arrows
$(document).on('click', '.about-arrow-right', function(e) {
  $(".about-resi").addClass("hidden");
  $(".about-commercial").removeClass("hidden");
	e.preventDefault();
});
$(document).on('click', '.about-arrow-left', function(e) {
  $(".about-resi").removeClass("hidden");
  $(".about-commercial").addClass("hidden");
	e.preventDefault();
});

//property arrows
$(document).on('click', '.prop-arrow-right', function(e) {
	$(".harmsworth").addClass("hidden");
  	$(".randall").removeClass("hidden");
	e.preventDefault();
});
$(document).on('click', '.prop-arrow-left', function(e) {
	$(".harmsworth").removeClass("hidden");
  	$(".randall").addClass("hidden");
	e.preventDefault();
});
