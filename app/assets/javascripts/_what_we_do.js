$(document).ready(function(){
  var hash = window.location.hash
  if (hash) {
    $('.properties-buttons '+hash+'').addClass('properties-button-active');
    $(".commercial-page").addClass("hidden");
    $(".residential-page").removeClass("hidden-sm hidden-md hidden-lg hidden-xl");
  }
});

