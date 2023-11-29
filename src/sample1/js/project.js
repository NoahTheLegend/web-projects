$(document).ready(function() {
	$('.service').click(function() {
		if ($(this).innerHeight() !== 50) {
			$(this).innerHeight(50);
		} else ($(this).innerHeight(240))
	});
	$('.testimonals__comments').slick({
		arrows:true,
		vertical: true,
		verticalSwiping: true,
		slidesToShow: 2,
		lazyLoad: 'ondemand',
		variableHeight: false,
		infinite: true,
	});
	$('.team__slider-character').slick({
		arrows:false,
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: true,
		centerMode: true,
		variableWidth: true,
		variableHeight: true,
		infinite: true,
		speed: 500,
		asNavFor: '.team__slider-text',
	});
		$('.team__slider-text').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		variableHeight: true,
		infinite: true,
		speed: 500,
		asNavFor: '.team__slider-character',
	});
});