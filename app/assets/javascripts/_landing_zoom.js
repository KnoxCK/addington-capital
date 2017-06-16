
$( document ).ready( function() {

  $("#press-page-down").click(function(e) {
    e.preventDefault();
      $('html,body').animate({
          scrollTop: $(".what-we-do-wrapper").offset().top - 100},
          'slow');
  });
  
// $( document ).ready( function() {
//   $('#header-page-down').click( function (e) { 
//         e.preventDefault(); 
//         var height = jQuery(window).height() + $('.navbar-addcap').height();
//       $( '.blue-value-wrapper' ).attr( 'style', 'margin-top: -'+jQuery(window).height()+'px!important;');
//        $('#home-main').animate({ "top": -height }, 200, function () {});
//     });
// } );


   $('#header-page-down').click( function (e) { 
	e.preventDefault();
	var height = jQuery(window).height(); 
	height = height + $('.navbar-addcap').height() - 25; 
       $( '.blue-value-wrapper').attr( 'style', 'margin-top: -'+ height +'px!important;' ); 
       $('#home-main').animate({ "top": -jQuery(window).height() }, 200, function () {}); 
    });



});
