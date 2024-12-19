$(document).ready(function() {
	$('[data-fancybox="gallery"]').fancybox({
		buttons: [
			"zoom",
			"slideShow",
			"thumbs",
			"close"
		],
		loop: true,
		caption: function(instance, item) {
			return $(this).find('img').attr('alt');
		},
		// transitionEffect: "circular",
		animationEffect: "fade",
		animationDuration: 1000,
	});
});

