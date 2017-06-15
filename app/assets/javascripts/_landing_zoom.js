$( document ).ready( function() {
   $('#header-page-down').click( function (e) { // Put that e in there
         e.preventDefault(); // This will stop the link from clicking through / doing its thing
       $( '#Wrapper' ).attr( 'style', 'margin-top: -'+jQuery(window).height()+'px!important;' );
       $('#home-main').animate({ "top": -jQuery(window).height() }, 200, function () {});
    });
} );