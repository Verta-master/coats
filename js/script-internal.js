//Menu for internal page
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.logo').toggleClass('logo--dark');
  $('body').toggleClass('noscroll');
  
  if ($('.logo').hasClass('logo--dark')) {
    $('.logo img').attr('src', 'img/logo-white.svg');
  } else {
    $('.logo img').attr('src', 'img/logo.svg');
  }
})
