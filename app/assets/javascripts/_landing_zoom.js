//$( document ).ready( function() {
  // $('#header-page-down').click( function (e) { 
    //     e.preventDefault(); 
      // $( '.blue-value-wrapper' ).attr( 'style', 'margin-top: -'+jQuery(window).height()+'px!important;');
       //$('#home-main').animate({ "top": -jQuery(window).height() }, 200, function () {});
    //});
//} );


$(document).ready(function() {
   $('#header-page-down').click( function (e) { 
	e.preventDefault();
	Var height = jQuery(window).height(); /
	height = height + $(‘.navbar-addcap’).height(); 
       $( '.blue-value-wrapper').attr( 'style', 'margin-top: -'+ height +'px!important;' ); 
       $('#home-main').animate({ "top": -jQuery(window).height() }, 200, function () {}); 
    });
});
