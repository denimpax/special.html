// @codekit-prepend "../../../../bower_components/jquery/dist/jquery.min.js";
// @codekit-prepend "../../../../bower_components/magnific-popup/dist/jquery.magnific-popup.min.js";
// @codekit-prepend "../../../js/plugin/tooltipster.min.js";
// @codekit-append "../../../js/_desktop/script.js"

$(document).ready(function() {

  $('body').on('click', '.control', function(){
    $('.img').addClass('active');
    setTimeout(function() {
      $('.control_help').addClass('active');
    }, 700);
    setTimeout(function() {
      $('.help').addClass('active');
    }, 1500);
  });
});