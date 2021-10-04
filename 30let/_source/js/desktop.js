$(document).ready(function() {

  $('.title-bar').scroolly([
    {
      to: "con-top",
      css:
      {
        position: "absolute",
        top: "0",
        opacity: "0"
      }
    },
    {
      from: "con-top",
      css:
      {
        position: "fixed",
        top: "0",
        opacity: "1"
      }
    }
  ], $('.anons'));

  $('.header-image, .content.images .image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		image: {
			verticalFit: true
		}
  });
  
  $('.tooltip-bottom').tooltipster({
    theme: 'borderless',
    side: 'bottom',
  });

  $('.photo').each(function(){
    var count = $(this).children('.item').length;
    if (count == 1) {
      $(this).addClass('p-1');
    }
    if (count == 2) {
      $(this).addClass('p-2');
    }
    if (count == 3) {
      $(this).addClass('p-3');
    }
    if (count == 4) {
      $(this).addClass('p-4');
    }
    if (count >= 5) {
      $(this).addClass('sliderBox');
      $('.sliderBox').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        prevArrow: $('.slickPrev'),
        nextArrow: $('.slickNext'),
      });

      var or = $(".sliderBox").slick("getSlick").slideCount;
      $('.slideOr').text(or);

      $(".sliderBox").on("afterChange", function(event, slick, currentSlide, nextSlide){
        $(".slideCount").text(currentSlide + 1);
      });
    }
  });

  $('.popup-gallery').magnificPopup({
		delegate: '.link',
		type: 'image',
		tLoading: 'Зарузка',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			titleSrc: function(item) {
				return item.el.attr('alt');
			}
		}
  });

  $('.popup-donate').magnificPopup({
		type: 'inline',
    preloader: false,
    modal: true
  });
  
  $(document).on('click', '.donate-popup-close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

  $('body').on('click', '.all-post', function(){
    $('.allpost').toggleClass('active');
  });
  
  var swiper = new Swiper('.autors-autor', {
    paginationClickable: false,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
  });

  var swiper = new Swiper('.autors-photo', {
    paginationClickable: false,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
  });

  var swiper = new Swiper('.carusel', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper = new Swiper('._timeline', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});