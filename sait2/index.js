'use strict'
$(window).scroll(function() {
	if ($(this).scrollTop() > 1) {
		$('header').addClass("sticky");
	} else {
		$('header').removeClass("sticky");
	};
});


$('#back-to-top').each(function() {
	$(this).click(function() {
		$('html,body').animate({scrollTop: 0 }, 'slow');
		return false;
	})
})