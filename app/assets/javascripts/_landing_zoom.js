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
	Var height = jQuery(window).height(); // GET PAGE HEIGHT
	height = height + $(‘.navbar-addcap’).height(); // GET HEIGHT OF NAV BAR AND PAGE HEIGHT
       $( '.blue-value-wrapper').attr( 'style', 'margin-top: -100px'+ height +'px!important;' ); 
       $('#home-main').animate({ "top": -jQuery(window).height() }, 200, function () {}); 
    });
});
