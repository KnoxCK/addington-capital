
$( document ).ready( function() {

  $("#header-page-down").click(function(e) {
    e.preventDefault();
      $('html,body').animate({
          scrollTop: $("#press").offset().top - 100},
          'slow');
  });

  $("#press-page-down").click(function(e) {
    e.preventDefault();
      $('html,body').animate({
          scrollTop: $(".what-we-do-wrapper").offset().top - 100},
          'slow');
  });

  $("#what-we-do-page-down").click(function(e) {
    e.preventDefault();
      $('html,body').animate({
          scrollTop: $(".blue-contact-wrapper").offset().top - 100},
          'slow');
  });

  $("#back-to-top").click(function(e) {
    e.preventDefault();
      $('html,body').animate({
          scrollTop: 0},
          'slow');
  });
  
//$( document ).ready( function() {
  // $('#header-page-down').click( function (e) { 
    //     e.preventDefault(); 
      // $( '.blue-value-wrapper' ).attr( 'style', 'margin-top: -'+jQuery(window).height()+'px!important;');
       //$('#home-main').animate({ "top": -jQuery(window).height() }, 200, function () {});
    //});
//} );


// $(document).ready(function() {
//    $('#header-page-down').click( function (e) { 
// 	e.preventDefault();
// 	Var height = jQuery(window).height(); /
// 	height = height + $(‘.navbar-addcap’).height(); 
//        $( '.blue-value-wrapper').attr( 'style', 'margin-top: -'+ height +'px!important;' ); 
//        $('#home-main').animate({ "top": -jQuery(window).height() }, 200, function () {}); 
//     });
});
