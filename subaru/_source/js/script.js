// @codekit-prepend "../../../../bower_components/jquery/dist/jquery.min.js";
// @codekit-prepend "../../../../bower_components/magnific-popup/dist/jquery.magnific-popup.min.js";
// @codekit-prepend "../../../../bower_components/jquery.scroolly/src/jquery.scroolly.js";
// @codekit-prepend "../../../js/plugin/tooltipster.min.js";
// @codekit-append "../../../js/_desktop/script.js"

$(document).ready(function(){

	var s = skrollr.init();

// 	$('.nav-wrapp').scroolly([
// 		{
// 				to: 'con-top',
// 				css: {
// 						position: 'absolute',
// 						bottom: '0',
// 				},
// 				removeClass: 'fix',
// 		},
// 		{
// 				from: 'con-top',
// 				css: {
// 						position: 'fixed',
// 						top: '10',
// 				},
// 				addClass: 'fix',
// 		}
// ], $('.main'));
	
	$('body').on('click', '.burger', function(){
		$(this).toggleClass('active');
		$('header, footer, #main-container, #nav-container').toggleClass('active');
	});

	$('.subaru-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});

	$('.main-slider-wrap').slick({
		dots: true,
		adaptiveHeight: true,
	});

	$('.main-slider-wrap').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Загрузка фото #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});

	$('.popup-ajax').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
	});

	$('.main-faq').slick({
		infinite: true,
		autoplay: true,
		draggable: true,
		swipe: true,
		speed: 30000,
		slidesToShow: 6,
		autoplaySpeed: 0,
		arrows: false,
	  });

	  $(function() {
  
		var $video = $('.video');
		var $window = $(window);
	  
		$window.scroll(function() {
	  
		  var $topOfVideo = $video.offset().top;
		  var $bottomOfVideo = $video.offset().top + $video.outerHeight();
	  
		  var $topOfScreen = $window.scrollTop();
		  var $bottomOfScreen = $window.scrollTop() + $window.innerHeight();
		  
		  if(($bottomOfScreen > $bottomOfVideo) && ($topOfScreen < $topOfVideo)){
			$video[0].play();
		  } else {
			$video[0].pause();
		  }
		  
		});
		
	  });

	  setTimeout(function() {
		$('.main-faq').css('opacity','1');
		}, 700);
		
		$('body').on('click', '.js-title-show', function(){
			$('.main-podcast-cat').css('height','auto');
			$('.main-podcast-cat').addClass('active');
		});
});