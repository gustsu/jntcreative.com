var prev = 0;
var $window = $(window);
var nav = $('nav');

$window.on('scroll resize', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('nav-down', scrollTop > prev);
  prev = scrollTop;
});