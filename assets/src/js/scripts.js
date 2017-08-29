$(document).scroll(function() { 
   if($(window).scrollTop() === 0) {
     $("#main-nav").removeClass("nav-down").addClass('nav-up');
   }
   else {
     $("#main-nav").addClass("nav-down").addClass('nav-up');
   }
});

$(function(){
	 $('.mobile-menu-button').on('click', function(){
	 	$('.right-side .nav-links').addClass('transition');
	 	$('#main-nav').addClass('mobile-menu');
	 	$('.mobile-menu-button').hide();
	 	$('.mobile-menu-exit-button').show();
	 });
	$('.mobile-menu-exit-button').on('click', function(){
		$('.right-side .nav-links').removeClass('transition');
		$('.mobile-menu-button').show();
	 	$('.mobile-menu-exit-button').hide();
	 	$('#main-nav').removeClass('mobile-menu');

	 });
})