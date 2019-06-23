
$(document).ready(function() {

	$(window).resize(function() {
		resizeInputs();
	});

	function resizeInputs() {
		$("textarea.text-input").height($(window).height() - $(".cont-header").height() - $(".nav").height() - 50);
	}
	resizeInputs();

	$("textarea.text-input").keyup(function() {
		$(".output").val(
			"{$::Tasks:::}" +
				$("#input-macro").val() +
			"{:::Tasks::$}" +

			"{$::To Do:::}" +
				$("#input-micro").val() +
			"{:::To Do::$}" +

			"{$::Notes:::}" +
				$("#input-notes").val() +
			"{:::Notes::$}" +

			"{$::Done:::}" +
				$("#input-done").val() +
			"{:::Done::$}"
		);
	});

	$(".file").click(function() {
		alert($(".output").val());
	});
});
