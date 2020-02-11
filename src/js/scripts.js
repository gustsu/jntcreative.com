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
	 	//$('.right-side .nav-links').addClass('transition');
	 	$('#main-nav').addClass('mobile-menu');
	 	$('.nav-links').fadeIn();
	 	$('.mobile-menu-button').hide();
	 	$('.mobile-menu-exit-button').show();
	 });

	$('body').on('click', '.mobile-menu .nav-links a', function(){
		$('.mobile-menu-button').show();
	 	$('.mobile-menu-exit-button').hide();
	 	$('.nav-links').fadeOut(500);
	 	setTimeout(function(){
	 		$('#main-nav').removeClass('mobile-menu');
	 	}, 500);
	});

	$('.mobile-menu-exit-button').on('click', function(){
		//$('.right-side .nav-links').removeClass('transition');
		$('.mobile-menu-button').show();
	 	$('.mobile-menu-exit-button').hide();
	 	$('.nav-links').fadeOut(500);
	 	setTimeout(function(){
	 		$('#main-nav').removeClass('mobile-menu');
	 	}, 500);
	 });

	$('#contact-form').parsley();

	$('#quote-form').parsley();

	$('.lb-trigger').on('click', function(){
		$(this).next().fadeIn(500);
		$(this).next().next().fadeIn(500);
	});

	$('.lb-exit-button').on('click', function(){
		$(this).parent().fadeOut(300);
		$(this).parent().next().fadeOut(300);
	});

	$('.lb-overlay').on('click', function(){
		$(this).prev().fadeOut(300);
		$(this).fadeOut(300);
	});

	$('.free-q').on('click', function(){
		$('.quote-overlay').fadeIn(500);
		$('#quote-form').fadeIn(500);
	});

	$('.quote-overlay').on('click', function(e){
		$('.quote-overlay').fadeOut(300);
		$('#quote-form').fadeOut(300);
	});

	$('.quote-exit-button').on('click', function(){
		$('.quote-overlay').fadeOut(300);
		$('#quote-form').fadeOut(300);
	});
})

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});