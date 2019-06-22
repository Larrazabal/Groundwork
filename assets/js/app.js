
$(document).ready(function() {

	$(window).resize(function () {
		resizeInputs();
	});

	function resizeInputs() {
		$("textarea.text-input").height($(window).height() - $(".cont-header").height() - 50);
	}
	resizeInputs();

});
