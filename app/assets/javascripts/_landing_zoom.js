$( document ).ready( function() {
  $("#press-page-down").click(function(e) {
    e.preventDefault();
    $.smoothScroll({
      scrollTarget: '.what-we-do-wrapper',
      offset: -100,
      speed: 1000
    });
  });

$('#header-page-down').click( function (e) {
	e.preventDefault();
	var height = jQuery(window).height() - $('.navbar-addcap-landing').height();
    $( '.press-wrapper').attr( 'style', 'margin-top: -'+ height +'px!important;' );
    $('#home-main').animate({ "top": -jQuery(window).height() }, 200, function () {});
    });

});
