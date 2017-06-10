$(function(){
 var pathname = (window.location.pathname);
  $('.navbar-addcap-right a').each(function() {
    if ($(this).attr('href') === pathname) {
      $(this).addClass('active');
    }
  });
});
