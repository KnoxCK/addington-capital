$(function(){
 var pathname = (window.location.pathname);
  if (window.location.hash === '#whatwedo') {
    $('#what-we-do-link').addClass('active');
  } else {
    $('.navbar-addcap-right a').each(function() {
      if ($(this).attr('href') === pathname) {
        $(this).addClass('active');
      }
    });
  }
});
