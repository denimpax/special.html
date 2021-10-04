// @codekit-prepend "../../../../bower_components/jquery/dist/jquery.min.js";
// @codekit-prepend "../../../../bower_components/magnific-popup/dist/jquery.magnific-popup.min.js";
// @codekit-prepend "../../../../bower_components/swiper/dist/js/swiper.min.js";
// @codekit-prepend "../../../../bower_components/slick-carousel/slick/slick.min.js";
// @codekit-prepend "../../../../bower_components/lightgallery/dist/js/lightgallery.js";
// @codekit-prepend "../../../js/plugin/tooltipster.min.js";
// @codekit-append "../../../js/_desktop/script.js"
// @codekit-append "../../../js/_mobile/script.js"



$(document).ready(function(){

	$('.blogdiv p:first-child').attr('style','').addClass('data');

	$('a[rel*="#"]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('rel')).offset().top
		}, 1000);
		e.preventDefault();
	});

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeBtnInside: true,
		tLoading: 'Загрузка изображения #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">Картинка #%curr%</a> не найденна.',
		}
	});

	$('.popup-gallery-page').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeBtnInside: true,
		tLoading: 'Загрузка изображения #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">Картинка #%curr%</a> не найденна.',
		}
	});

	$('body').on('click', '.js-show', function(){
		$(this).text('Скрыть текст').removeClass('js-show').addClass('js-hide');
		$('.first').addClass('active');
		$('.hide').slideDown();
	});

	$('body').on('click', '.js-hide', function(){
		$(this).text('Читать далее').removeClass('js-hide').addClass('js-show');
		$('.first').removeClass('active');
		$('.hide').slideUp();
	});

	var device = $(window).width();
	if (device > 960) {
		var galleryTop = new Swiper('.gallery-top', {
	    spaceBetween: 10,
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	  });

	  var galleryThumbs = new Swiper('.gallery-thumbs', {
	    spaceBetween: 10,
	    centeredSlides: false,
	    slidesPerView: 'auto',
	    touchRatio: 0.2,
	    slideToClickedSlide: true,
	  });
	  galleryTop.controller.control = galleryThumbs;
	  galleryThumbs.controller.control = galleryTop;
	}
	if (device < 960) {
		$('#lightgallery').lightGallery({
			thumbnail: false,
			galleryId: 2,
		});

		$('.gallery-wrapp').slick({
		  lazyLoad: 'ondemand',
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: true
		});
	}

});
