//Menu for internal page
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.logo').toggleClass('logo--dark');
  $('body').toggleClass('noscroll');
})
