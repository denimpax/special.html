$(document).ready(function() {

  $('body').on('click', '.js-form', function(){
    $(this).toggleClass('active');
    $('.main-form').toggleClass('active');
  });

  var swiper = new Swiper('.menu', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true
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


});