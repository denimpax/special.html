// @codekit-prepend "../../../../bower_components/jquery/dist/jquery.min.js";
// @codekit-prepend "../../../../bower_components/magnific-popup/dist/jquery.magnific-popup.min.js";

$(document).ready(function(){

	window.addEventListener("orientationchange", function() {
		$('#nav-container').css('right', '-' + getScreenWidth() + 'px');
		$('.main-slider-wrap').slickNext();
        $('.main-slider-wrap').slickPrev();
	});

    $('#nav-container').css('right', '-' + getScreenWidth() + 'px');
	
	$('body').on('click', '.open-nav', function(){
		$('html, body').addClass('hidden');
		$(this).removeClass('open-nav');
		$(this).addClass('active closed-nav');
		$('#nav-container').css('right', '0');
	});

	$('body').on('click', '.closed-nav, .nav-js-hide', function(){
		$('html, body').removeClass('hidden');
		$('.closed-nav').addClass('open-nav');
		$('.closed-nav').removeClass('active closed-nav');
		$('#nav-container').css('right', '-' + getScreenWidth() + 'px');
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
		arrows: false,
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

	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.popup-ajax').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
	});

	$('.main-faq').slick({
		dots: false,
		infinite: false,
		arrows: false,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true
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

	  $(window).scroll(function(){
		if($(window).scrollTop()>100){
			$('.burger').addClass('fix');
		}else{
			$('.burger').removeClass('fix');
		}
	});

	$('body').on('click', '.js-title-show', function(){
		$('.main-podcast-cat').addClass('active');
	});

	function getScreenWidth()
    {
        var ori = window.orientation;

        return (ori === 90 || ori === -90) ? screen.width : screen.height;
    }
});