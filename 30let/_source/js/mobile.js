$(document).ready(function() {

  $('.page-copy').tabslet({
    mouseevent: "click",
    attribute: "href",
    animation: false,
  });

  $('.autors-autor').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    centerMode: false,
    variableWidth: true
  });

  $('.autors-photo').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    centerMode: false,
    variableWidth: true
  });

  $(".page-gallery").slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('body').on('click', '.all-post', function(){
    $('.allpost').toggleClass('active');
  });


  $('.modal-gallery, .popup-gallery').magnificPopup({
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

  var swiper = new Swiper('.carusel', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper = new Swiper('._timeline', {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

});