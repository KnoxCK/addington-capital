$(function(){
 var pathname = (window.location.pathname);
  $('.navbar-addcap-right a').each(function() {
    if ($(this).attr('href') === pathname) {
      $(this).addClass('active');
    }
  });
});

// $(function(){
//   $('.navbar-addcap-right a').click(function(e) {
//     $('.navbar-addcap-right a').each(function() {
//       console.log($(this));
//      $(this).removeClass('active');
//     });
//     console.log(this);
//       $(this).addClass('active');
//   });
// });
