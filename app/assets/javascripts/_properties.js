// Case study tabs
$('.retail-tab').click(function(e){
  e.preventDefault();
  $('.case-study-wrapper').addClass('hidden');
  $('.residential-case-studies').addClass('hidden');
  $('.offices-case-studies').addClass('hidden');
  $('.retail-case-studies').removeClass('hidden');
});

$('.residential-tab').click(function(e){
  e.preventDefault();
  $('.case-study-wrapper').addClass('hidden');
  $('.retail-case-studies').addClass('hidden');
  $('.offices-case-studies').addClass('hidden');
  $('.residential-case-studies').removeClass('hidden');
});

$('.offices-tab').click(function(e){
  e.preventDefault();
  $('.case-study-wrapper').addClass('hidden');
  $('.residential-case-studies').addClass('hidden');
  $('.retail-case-studies').addClass('hidden');
  $('.offices-case-studies').removeClass('hidden');
});


//small image linking to large image
$(".case-studies-box").click(function(e) {
  e.preventDefault();
  $(".case-study-lg").addClass("hidden");
  $($(this).data('category')).removeClass('hidden');
  $($(this).data('target')).removeClass("hidden");
  $('html,body').animate({
      scrollTop: $(".case-study-detailed").offset().top - 100},
      'slow');
});
















// $("#property-two").click(function(e) {
//     e.preventDefault();
//       $('html,body').animate({
//           scrollTop: $(".property-wrapper").offset().top - 100},
//           'slow');
//       $(".harmsworth").addClass("hidden");
//   	  $(".randall").removeClass("hidden");
// });
// $("#property-three").click(function(e) {
//     e.preventDefault();
//       $('html,body').animate({
//           scrollTop: $(".property-wrapper").offset().top - 100},
//           'slow');
//       $(".harmsworth").removeClass("hidden");
//   	  $(".randall").addClass("hidden");
// });
// $("#property-four").click(function(e) {
//     e.preventDefault();
//       $('html,body').animate({
//           scrollTop: $(".property-wrapper").offset().top - 100},
//           'slow');
//       $(".harmsworth").addClass("hidden");
//   	  $(".randall").removeClass("hidden");
// });
// $("#property-five").click(function(e) {
//     e.preventDefault();
//       $('html,body').animate({
//           scrollTop: $(".property-wrapper").offset().top - 100},
//           'slow');
//       $(".harmsworth").removeClass("hidden");
//   	  $(".randall").addClass("hidden");
// });
// $("#property-six").click(function(e) {
//     e.preventDefault();
//       $('html,body').animate({
//           scrollTop: $(".property-wrapper").offset().top - 100},
//           'slow');
//       $(".harmsworth").addClass("hidden");
//   	  $(".randall").removeClass("hidden");
// });




