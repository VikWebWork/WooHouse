
$(function () {

	/* Initializing sliders ============= */

	$('.about__slider').slick({
		nextArrow: $('.about__slider-btn'),
		prevArrow: false,
		dots: true,
		focusOnSelect: true,
		rows: 2,
		asNavFor: '.about__info-slider, .about__title-slider',
		responsive: [
			{
				breakpoint: 970,
				settings: {
					arrows: false,
					centerMode: true,
					fade: true
				}
			}
		]
	});

	$('.about__info-slider').slick({
		arrows: false,
		rows: 1,
		fade: true,
		asNavFor: '.about__slider'
	});

	$('.about__title-slider').slick({
		arrows: false,
		rows: 1,
		fade: true,
		asNavFor: '.about__slider',
	});


	$('.gallery__slider-items').slick({
		nextArrow: $('.gallery__slider-btn'),
		prevArrow: false,
		dots: true,
		adaptiveHeight: true,
		rows: 3,
		responsive: [
			{
				breakpoint: 970,
				settings: {
					arrows: false
				}
			},
			{
				breakpoint: 790,
				settings: {
					arrows: false,
					rows: 2
				}
			},
			{
				breakpoint: 419,
				settings: {
					arrows: false,
					rows: 1
				}
			}
		],
	});


/* Initializing modal ============= */

$('.btn').fancybox({

});


/* Мenu highlighting ============= */

activeItemMenu();
$(document).on('scroll', function (e) {
	activeItemMenu();
});


/* Smooth scrolling ============= */

$('.menu__list-link').on('click', function (e) {
	e.preventDefault();

	var selector = $(this).attr('href');
	var section = $(selector);

	$('html, body').animate({
		scrollTop: section.offset().top - 30
	}, 800);
});


/* Burger menu control ============= */

$('.menu__btn').on('click', function () {
	$('.menu__btn').toggleClass('menu__btn--active');
	$('.menu__list').toggleClass('menu__list--active');
});

$('.menu__list-link').on('click', function () {
	$('.menu__btn').removeClass('menu__btn--active');
	$('.menu__list').removeClass('menu__list--active');
});
});


/* Мenu highlighting function ============= */

function activeItemMenu() {
	$('.menu__list-link').each(function () {
		var selector = $(this).attr('href');
		var section = $(selector);
		var windowTop = $(document).scrollTop();
		var sectionTop = section.offset().top;

		if (windowTop > sectionTop - 150) {
			$('.menu__list a').removeClass('menu__active').filter(this).addClass('menu__active');
		};
	});
}