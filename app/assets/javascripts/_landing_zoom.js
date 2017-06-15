$( document ).ready( function() {
   $('#header-page-down').click( function () { // THIS IS THE DOWN ARROW SELECTOR
       $( '#Wrapper' ).attr( 'style', 'margin-top: -'+jQuery(window).height()+'px!important;' ); // IMMEDIATELY MOVE THE LOWER CONTENT TO THE TOP OF THE PAGE
       $('#home-main').animate({ "top": -jQuery(window).height() }, 200, function () {}); // MOVE THE TOP IMAGE / SECTION OUT OF VIEW IN 0.2 SECONDS
        
    });
} );

