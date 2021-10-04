$(document).ready(function(){

	// Main page photo block
	$('.main-head-closed').click(function(){
		$(this).fadeOut();
		$('.main-head').slideUp();
	});

	$('body').on('click', '.sub-link', function(){
		$(this).toggleClass('active');
		$(this).closest('li').toggleClass('active');
		$(this).next('ul').toggleClass('active');
	});

	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		centeredSlides: false,
		spaceBetween: 20,
		grabCursor: true,
		freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
	});

	$('.header').scroolly([
		{
			to: 'el-bottom = vp-top',
			onScroll: function(element, offset, length){
				var progress = offset / length;
				element.css('background-position', 'center '+$.scroolly.getTransitionFloatValue(0, 40, progress)+'%');
			}
		},
		{
			from: 'el-center = vp-top',
			to: 'el-bottom = vp-top',
		}
  ]);

  $('.header h1').scroolly([
		{
			from: 'con-top',
			to: 'con-bottom = top',
			cssFrom:{
				'text-shadow': '0 0 0px white',
				'transform': 'translateY(0px)',
				'opacity': '1'
			},
			cssTo:{
				'text-shadow': '0 0 30px white',
				'transform': 'translateY(100px)',
				'opacity': '.1'
			}
		}
  ], $('.header'));

  $('.page-title-bar').scroolly([
		{
			to: 'con-top',
			css: {
				position: 'absolute',
				top: '',
				opacity: '0'
			}
		},
		{
			from: 'con-top',
			css: {
				position: 'fixed',
				top: '0',
				opacity: '1'
			}
		}
	], $('.page-content'));

  $('.photobox').each(function(){
    var count = $(this).children('img').size();
    if (count == 1) {
      $(this).addClass('one');
    }
    if (count == 2) {
      $(this).addClass('two');
    }
    if (count >= 3) {
      $(this).addClass('sliderBox');
      $('.sliderBox').slick({
				dots: false,
				infinite: true,
				speed: 300,
				slidesToShow: 1,
				centerMode: true,
				variableWidth: true
      });
    }
  });

	var device = $(window).width();
	if (device > 960) {
		$('.photobox').each(function(){
			var count = $(this).children('a, div').size();
			if (count == 1) {
				$(this).addClass('one');
			}
			if (count == 2) {
				$(this).addClass('two');
			}
			if (count >= 3) {
				$(this).addClass('sliderBox');
				$('.sliderBox').slick({
					dots: false,
					infinite: true,
					speed: 300,
					slidesToShow: 1,
					centerMode: true,
					variableWidth: true
				});
			}
		});
	}
	if (device < 960) {
		$('.photobox').each(function(){
    var count = $(this).children('a, div').size();
    if (count == 1) {
      $(this).addClass('one');
    }
    if (count == 2) {
      $(this).addClass('two');
    }
    if (count >= 3) {
      $(this).addClass('sliderBox');
      $('.sliderBox').slick({
      	dots: true,
      	arrows: false,
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1
      });
    }
  });
	}

  $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tClose: 'Закрыть',
		tLoading: 'Загрузка...',
		mainClass: 'mfp-fade mfp-img-mobile',
		gallery: {
		tCounter: '%curr% из %total%',
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	},
		image: {
			tError: 'Не могу загрузить картинку =(',
			titleSrc: function(item) {
			// return item.el.attr('title') + '<small>Фото: Вячеслав Малунов</small>';
		}
	}
	});

	$('.photobox.one div img, .photobox.one a img, .photobox.two div img, .photobox.two a img').each(function() {
    var $this = $(this),
      title = $this.attr('title');
    $this.after($('<span>').html(title));
  });

	$('.main-map-close').click(function(){
		$('.main-map').slideUp();
	});

});
