$('.back').click(function() {
  $('.list-brand').animate({
    scrollLeft: '-=200px'
  }, 'slow');
});

$('.next').click(function() {
  $('.list-brand').animate({
    scrollLeft: '+=200px'
  }, 'slow');
});

