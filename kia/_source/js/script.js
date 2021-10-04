// @codekit-prepend "../../../../bower_components/jquery/dist/jquery.min.js";
// @codekit-prepend "../../../../bower_components/magnific-popup/dist/jquery.magnific-popup.min.js";
// @codekit-prepend "../../../../bower_components/Tabslet/jquery.tabslet.min.js";
// @codekit-prepend "../../../../bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js";
// @codekit-prepend "../../../js/plugin/tooltipster.min.js";
// @codekit-append "../../../js/_desktop/script.js"
// @codekit-append "../../../js/_mobile/script.js"

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

	$('.tabs').tabslet({
		mouseevent: 'click',
		animation: true
	});

	$('.table').mCustomScrollbar({
		horizontalScroll: true,
		mouseWheel: false,
		theme: 'dark',
		advanced:{pdateOnBrowserResize: true},
	});

	$('.tooltip-bottom').tooltipster({
		contentAsHTML: true,
		position: 'bottom',
		theme: 'black',
	});

	// Anchor Link
 $('a[rel*="#"]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
       scrollTop: $(anchor.attr('rel')).offset().top
    }, 1000);
    e.preventDefault();
 });

});
