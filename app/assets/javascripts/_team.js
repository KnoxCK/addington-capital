$("#team-member-martin").click(function(e) {
  e.preventDefault();
  $('.team-matthew').addClass('hidden');
  $('.team-alex').addClass('hidden');
  $('.team-anna').addClass('hidden');
  $('.team-philip').addClass('hidden');
  $('.team-steven').addClass('hidden');
  $('.team-nic').addClass('hidden');

  $('.team-martin').removeClass('hidden');
  // $('html,body').animate({
  //     scrollTop: $(".team-martin").offset().top - 100},
  //     'slow');
  $.smoothScroll({
    scrollTarget: '.team-martin',
    offset: -100,
    speed: 800
  });
});
$("#team-member-matthew").click(function(e) {
  e.preventDefault();
  $('.team-martin').addClass('hidden');
  $('.team-alex').addClass('hidden');
  $('.team-anna').addClass('hidden');
  $('.team-philip').addClass('hidden');
  $('.team-steven').addClass('hidden');
  $('.team-nic').addClass('hidden');

  $('.team-matthew').removeClass('hidden');
  // $('html,body').animate({
  //     scrollTop: $(".team-matthew").offset().top - 100},
  //     'slow');
  $.smoothScroll({
    scrollTarget: '.team-matthew',
    offset: -100,
    speed: 800
  });
});
$("#team-member-alex").click(function(e) {
  e.preventDefault();
  $('.team-martin').addClass('hidden');
  $('.team-matthew').addClass('hidden');
  $('.team-anna').addClass('hidden');
  $('.team-philip').addClass('hidden');
  $('.team-steven').addClass('hidden');
  $('.team-nic').addClass('hidden');

  $('.team-alex').removeClass('hidden');
  // $('html,body').animate({
  //   scrollTop: $(".team-alex").offset().top - 100},
  //   'slow');
  $.smoothScroll({
    scrollTarget: '.team-alex',
    offset: -100,
    speed: 800
  });
});
$("#team-member-anna").click(function(e) {
  e.preventDefault();
  $('.team-martin').addClass('hidden');
  $('.team-matthew').addClass('hidden');
  $('.team-alex').addClass('hidden');
  $('.team-philip').addClass('hidden');
  $('.team-steven').addClass('hidden');
  $('.team-nic').addClass('hidden');
  $('.team-anna').removeClass('hidden');
  // $('html,body').animate({
  //     scrollTop: $(".team-anna").offset().top - 100},
  //     'slow');
  $.smoothScroll({
    scrollTarget: '.team-anna',
    offset: -100,
    speed: 800
  });
});

$("#team-member-philip").click(function(e) {
  e.preventDefault();
  $('.team-martin').addClass('hidden');
  $('.team-matthew').addClass('hidden');
  $('.team-alex').addClass('hidden');
  $('.team-anna').addClass('hidden');
  $('.team-steven').addClass('hidden');
  $('.team-nic').addClass('hidden');

  $('.team-philip').removeClass('hidden');
  // $('html,body').animate({
  //   scrollTop: $(".team-philip").offset().top - 100},
  //   'slow');
  $.smoothScroll({
    scrollTarget: '.team-philip',
    offset: -100,
    speed: 800
  });
});

$("#team-member-steven").click(function(e) {
  e.preventDefault();
  $('.team-martin').addClass('hidden');
  $('.team-matthew').addClass('hidden');
  $('.team-alex').addClass('hidden');
  $('.team-anna').addClass('hidden');
  $('.team-philip').addClass('hidden');
  $('.team-nic').addClass('hidden');
  $('.team-steven').removeClass('hidden');
  // $('html,body').animate({
  //   scrollTop: $(".team-steven").offset().top - 100},
  //   'slow');
  $.smoothScroll({
    scrollTarget: '.team-steven',
    offset: -100,
    speed: 800
  });
});
$("#team-member-nic").click(function(e) {
  e.preventDefault();
  $('.team-martin').addClass('hidden');
  $('.team-matthew').addClass('hidden');
  $('.team-alex').addClass('hidden');
  $('.team-anna').addClass('hidden');
  $('.team-philip').addClass('hidden');
  $('.team-steven').addClass('hidden');
  $('.team-nic').removeClass('hidden');
  // $('html,body').animate({
  //     scrollTop: $(".team-nic").offset().top - 100},
  //     'slow');
  $.smoothScroll({
    scrollTarget: '.team-nic',
    offset: -100,
    speed: 800
  });
});
