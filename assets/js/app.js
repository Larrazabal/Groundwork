
$(document).ready(function() {

	var EOn = "✅";
	var EOff = "❌";

	$(window).resize(function() {
		resizeInputs();
	});

	function resizeInputs() {
		$("textarea.text-input").height($(window).height() - $(".cont-header").height() - $(".nav").height() - 50);
	}
	resizeInputs();

	$("textarea.text-input").change(function() {
		getOutput();
	});
	$("textarea.text-input").keyup(function() {
		getOutput();
	});

	var output;
	getOutput();
	function getOutput() {
		output = 
			"{$::Tasks:::}" +
				$("#input-plans").val() +
			"{:::Tasks::$}" +

			"{$::ToDo:::}" +
				$("#input-micro").val() +
			"{:::ToDo::$}" +

			"{$::Notes:::}" +
				$("#input-notes").val() +
			"{:::Notes::$}" +

			"{$::Done:::}" +
				$("#input-done").val() +
			"{:::Done::$}";
	}

	$(".file").click(function() {
		alert(output);
	});
});
