$(document).ready(function() {

  // Menu
  $('body').on('click', '._show', function(){
    $('html, body, .menus').addClass('active');
  });

  $('body').on('click', '._hide, ._close', function(){
    $('html, body, .menus').removeClass('active');
  });

  // Toggle text
  $('body').on('click', '.more-show', function(){
    $(this).text('Свернуть');
    $(this).removeClass('more-show').addClass('more-hide');
    $('.text-cut').show();
  });

  $('body').on('click', '.more-hide', function(){
    $(this).text('Устройство рейтинг-теста');
    $(this).removeClass('more-hide').addClass('more-show');
    $('.text-cut').hide();
  });

  $('body').on('click', '.more-show2', function(){
    $(this).text('Свернуть');
    $(this).removeClass('more-show2').addClass('more-hide2');
    $('.winner-content-hide').show();
  });

  $('body').on('click', '.more-hide2', function(){
    $(this).text('Давайте узнаем!');
    $(this).removeClass('more-hide2').addClass('more-show2');
    $('.winner-content-hide').hide();
  });


  // Tabs
  $('.tabs').tabslet();

  // Modal Generation
  $('.popup').magnificPopup({
		type: 'inline',
    modal: true,
    fixedBgPos: true,
    fixedContentPos: false,
    closeOnBgClick: true,
	});
	$(document).on('click', '.popup-close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
  });

  // Slider
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Gallery
  $('#slder').lightGallery({
    share: false,
    download: false,
    autoplay: false,
  });

  $('#image').lightGallery({
    share: false,
    download: false,
    autoplay: false,
  });

  $('#image1').lightGallery({
    share: false,
    download: false,
    autoplay: false,
  });

  $('#image2').lightGallery({
    share: false,
    download: false,
    autoplay: false,
  });

  $('#image3').lightGallery({
    share: false,
    download: false,
    autoplay: false,
  });

  $('#image4').lightGallery({
    share: false,
    download: false,
    autoplay: false,
  });
});