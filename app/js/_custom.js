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

	

 $('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

document.querySelector('.foo').fakeScroll();

$('.header-btn').on('click', toggleMobNav);
$('.mob-nav-list__item').on('click', toggleMobNav);

function toggleMobNav() {
	$('.mob-nav').toggleClass('mob-nav--active');
	$('.header-btn').toggleClass('header-btn--active');
}
// действия с меню в фукнцию, и при клике в мобильном меню вызывать её.

// adressess dropdowns
	$('.location__address').click(function(event) {
		$(this).toggleClass('active');
		$(this).next().slideToggle(300);
	});


//menu tabs
	let tabList = document.querySelector('.menu-btns__list'),
		tab = document.querySelectorAll('.menu-btns__list-item'),
		tabContent = document.querySelectorAll('.menu-roster-items'),
		tabListBottom = document.querySelector('.menu-btns__list--bottom'),
		tabBottom = document.querySelectorAll('.menu-btns__list--bottom .menu-btns__list-item');

	function hideTabContent(a) {
		for ( i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('menu-roster-items--show');
			tabContent[i].classList.add('menu-roster-items--hide');
			tab[i].classList.remove('active');
			tabBottom[i].classList.remove('active');
		}
	}
	hideTabContent(1);


	function showTabContent(b) {
		if (tabContent[b].classList.contains('menu-roster-items--hide')) {
			tabContent[b].classList.remove('menu-roster-items--hide');
			tabContent[b].classList.add('menu-roster-items--show');
		}
	}

	tabList.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('menu-btns__list-item')) {
			for (let i = 0; i < tabContent.length; i++) {
				if (target == tab[i]) {
					
					hideTabContent(0);
					tab[i].classList.add('active');
					tabBottom[i].classList.add('active');
                    showTabContent(i);
                    break;
				}
			}
		}
	});
	tabListBottom.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('menu-btns__list-item')) {
			for (let i = 0; i < tabContent.length; i++) {
				if (target == tabBottom[i]) {
					
					hideTabContent(0);
					tab[i].classList.add('active');
					tabBottom[i].classList.add('active');
                    showTabContent(i);
                    break;
				}
			}
		}
	});


});





