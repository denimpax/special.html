$(document).ready(function() {

  // Menu
  $('body').on('click', '._show', function(){
    $('html, body, .menus').addClass('active');
  });

  $('body').on('click', '._hide, ._close', function(){
    $('html, body, .menus').removeClass('active');
  });

  // More text
  $(document).on('click', '.js_link_1', function(){
    $(this).toggleClass('active');
    $('.js_hide_1').toggleClass('active');

    if ($(this).text() == "Свернуть")
       $(this).text("Зачем?")
    else
       $(this).text("Свернуть");
  });

  $(document).on('click', '.js_link_2', function(){
    $(this).toggleClass('active');
    $('.js_hide_2').toggleClass('active');

    if ($(this).text() == "Свернуть")
       $(this).text("Читать далее")
    else
       $(this).text("Свернуть");
  });

  // Tabs
  $('.tabs').tabslet({
    mouseevent: 'click',
    attribute: 'href',
    animation: true,
    container: '#tabs_container'
  });

  // Modal Generation
  $('.popup').magnificPopup({
		type: 'inline',
    modal: true,
    fixedBgPos: false,
    fixedContentPos: false,
    closeOnBgClick: true,
	});
	$(document).on('click', '.popup-close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
  });

  // Gallery
  $('#more-text, #more-text2').lightGallery({
    share: false,
    download: false,
    autoplay: false,
  });

  $('#cars').lightGallery({
    share: false,
    download: false,
    autoplay: false,
  });
});