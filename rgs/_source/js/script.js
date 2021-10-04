// @codekit-prepend "../../../../bower_components/jquery/dist/jquery.min.js";
// @codekit-prepend "../../../../bower_components/magnific-popup/dist/jquery.magnific-popup.min.js";
// @codekit-prepend "../../../js/plugin/tooltipster.min.js";
// @codekit-append "../../../js/_desktop/script.js"

$(document).ready(function(){

	var height = $('#answer').height();
	var result = height / 2 + 14;
	$('#answer').css({'margin-top':-result});

});