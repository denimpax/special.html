$(document).ready(function() {

  $('body').on('click', '.js-form', function(){
    $(this).toggleClass('active');
    $('.main-form').toggleClass('active');
  });

  $('.gallery-thumbs .swiper-wrapper').each(function(){
    var count = $(this).children('.swiper-slide').length;
    if (count == 1) {
      $(this).addClass('_disable');
    }
    if (count == 2) {
      $(this).addClass('_center');
    }
    if (count == 3) {
      $(this).addClass('_center');
    }
  });

  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });

  $('#lightgallery').lightGallery({
    share: false,
    download: false,
    thumbWidth: 80,
    thumbMargin: 10,
  });

  $('.tooltip-bottom').tooltipster({
    theme: 'tooltipster-borderless',
    side: 'bottom',
  });

  $('body').on('click', '._js-delete', function(){
    $(this).parent('.order-bag-item').addClass('_delete');
  });

  $('#phone').inputmask({"mask": "+7(999) 999-9999"});
  $('#pasport').inputmask({"mask": "9999 999999"});
  $('#phone2').inputmask({"mask": "+7(999) 999-9999"});
  $('#pasport2').inputmask({"mask": "9999 999999"});
  $('#phone3').inputmask({"mask": "+7(999) 999-9999"});
  $('#pasport3').inputmask({"mask": "9999 999999"});
  $('#phone4').inputmask({"mask": "+7(999) 999-9999"});
  

  $(function() {

    (function quantityProducts() {
      var $quantityArrowMinus = $(".quantity-arrow-minus");
      var $quantityArrowPlus = $(".quantity-arrow-plus");
      var $quantityNum = $(".quantity-num");
  
      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);
  
      function quantityMinus() {
        if ($quantityNum.val() > 0) {
           $quantityNum=$(this).siblings("input");
            $quantityNum.val(+$quantityNum.val() - 1);
        
        }
      }
       
      function quantityPlus() {
        $quantityNum=$(this).siblings("input");
        $quantityNum.val(+$quantityNum.val() + 1);
      }
    })();
  
  });

  $('body').on('click', '.js-cut', function(){
    $('.main-about-button').hide();
    $('.main-about-cut').slideDown();
  });

  $('body').on('click', '.js-prog', function(){
    $('.main-programms-button').hide();
    $('.main-programms-item').removeClass('nobr');
    $('.main-programms-cut').slideDown();
  });

  $('.accordeon .main-faq-item-text').hide().prev().click(function() {
    $(this).parents('.accordeon').find('.main-faq-item-text').not(this).slideUp().prev().removeClass('active');
    $(this).next().not(':visible').slideDown().prev().addClass('active');
  });

  $('body').on('click', '.js-tooltip', function(){
    $('.text').slideToggle();
  });

  $('body').on('click', '.js-timer', function(){
    $('#text1').hide();
    $('#text2').show();
  });

  // Ancore link
	$('body').on('click', '[href*="#"]', function(e){
		var fixed_offset = 0;
		$('html, body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});

});