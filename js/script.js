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





	$(".services__items").slick({
		mobileFirst: true,
		slidesToShow: 5,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2300,
		responsive: [
			{
				breakpoint: 1168,
				settings: 'unslick',
			},
			{
				breakpoint: 1024,
				settings: 'slick',
				settings: {
					slidesToShow: 4
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				},
			},
			{
				breakpoint: 425,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 310,
				settings: {
					slidesToShow: 1
				}
			},


		],


	})




	let sliderIsLive = true;
	window.addEventListener("resize", function () {
		if (window.innerWidth >= 1168) {
			$('.services__items').slick('unslick');
			let sliderIsLive = false;
		}
		else {
			if (sliderIsLive) {
				$('.services__items').slick({
					mobileFirst: true,
					slidesToShow: 5,
					dots: true,
					autoplay: true,
					autoplaySpeed: 2300,
					responsive: [
						{
							breakpoint: 1168,
							settings: 'unslick',
						},
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: 4
							},
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 3
							},
						},
						{
							breakpoint: 425,
							settings: {
								slidesToShow: 2
							}
						},
						{
							breakpoint: 310,
							settings: {
								slidesToShow: 1
							}
						},


					],
				});
				let sliderIsLive = true;
			}
		}
	});


	/*let w = window.innerWidth;
	console.log(w)
	if (w >= 1168) {
		$('.services__items').slick('unslick');
	}
	else {
		if (w < 1168) {
			$('.services__items').slick({
				mobileFirst: false,
				slidesToShow: 4,
				dots: true,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3
						},
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 425,
						settings: {
							slidesToShow: 1
						}
					},


				],

			});
		}
	}*/




})


//jQuery('body').toggleClass('lock');