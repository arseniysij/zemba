document.addEventListener("DOMContentLoaded", function() {

	$('.menu-slider-list').slick({
		accessibility: false,
		arrows: false,
		centerMode: true,
		mobileFirst: true,
		swipeToSlide: true,
		variableWidth: true,

	});

	$('.insta-slider').slick({
		variableWidth: true,
		swipeToSlide: true,
	});

	$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

document.querySelector('.foo').fakeScroll();

$('.header-btn').on('click', toggleMobNav);
$('.mob-nav-list__item').on('click', toggleMobNav);

function toggleMobNav() {
	$('.mob-nav').toggleClass('mob-nav--active');
	$('.header-btn').toggleClass('header-btn--active');
};
// действия с меню в фукнцию, и при клике в мобильном меню вызывать её.

});
