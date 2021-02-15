jQuery('document').ready(function () {
	jQuery('.header__burger').click(function (event) {
		jQuery('.header__burger,.header__menu,.header__block').toggleClass('active');

	})
	jQuery('.gallery__item').click(function (event) {
		jQuery('body').toggleClass('lock');
	})
	jQuery('.close').click(function (close) {
		jQuery('body').removeClass('lock');
	})
	jQuery('.poppup').click(function (event) {
		window.location = jQuery('.close').attr('href');
		jQuery('body').removeClass('lock');
	});
})




//jQuery('body').toggleClass('lock');