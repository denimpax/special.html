$(document).ready(function() {

  // Menu
  $('body').on('click', '._show', function(){
    $('html, body, .menus').addClass('active');
  });

  $('body').on('click', '._hide, ._close', function(){
    $('html, body, .menus').removeClass('active');
  });

  // Modal Generation
  $('.popup-generation').magnificPopup({
		type: 'inline',
    modal: true,
    callbacks: {
      open: function() {
        var swiper = new Swiper('.generation-popup-wrapper_images', {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });

        $('#popup-images').lightGallery({
          share: false,
          download: false,
          thumbWidth: 80,
          thumbMargin: 10,
      }); 
      }
    }
	});
	$(document).on('click', '.generation-popup-close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
  });

  // Slider
  var swiper = new Swiper('.slider', {
    centeredSlides: true,
    // autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper = new Swiper('.fact-slider', {
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper = new Swiper('.model-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Gallery
  $('#video').lightGallery({
    share: false,
    download: false,
    thumbWidth: 80,
    thumbMargin: 10,
  });

  $('#slder-1').lightGallery({
    share: false,
    download: false,
    thumbWidth: 80,
    thumbMargin: 10,
  });

  $('#slder-2').lightGallery({
    share: false,
    download: false,
    thumbWidth: 80,
    thumbMargin: 10,
  });

  $('#fact').lightGallery({
    share: false,
    download: false,
    thumbWidth: 80,
    thumbMargin: 10,
  });

  $('#california').lightGallery({
    share: false,
    download: false,
    thumbWidth: 80,
    thumbMargin: 10,
  });

  $('#caravelle').lightGallery({
    share: false,
    download: false,
    thumbWidth: 80,
    thumbMargin: 10,
  });

  $('#transporter').lightGallery({
    share: false,
    download: false,
    thumbWidth: 80,
    thumbMargin: 10,
  });
});