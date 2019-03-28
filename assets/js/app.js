$(document).ready(function() {

	/* === Workspace Buttons === */

	var currentWorkspace;

	$(".workspace-settings").click(function() {
		currentWorkspace = $(this).parents(".workspace");

		$(".edit-workspace-settings input[type='text']").val("").attr("placeholder", currentWorkspace.find("h2").text());

		$(".delete-transition").hide();
		$(".delete-1").show();

		$(".edit-workspace-settings").fadeIn(100);
		$(".edit-workspace-settings input[type='text']").select();

		refreshList();
		return false;
	});

	$(".workspace-arrange-drag-drop").click(function() {


		refreshList();
		return false;
	});

	$(".workspace-toggle").click(function() {
		var currentWorkspace = $(this).parents(".workspace");
		currentWorkspace.toggleClass("toggle-off");

		refreshList();
		return false;
	});

	/* === End Workspace Buttons === */


	/* === Workspace Settings === */

	$(".done").click(function () {
		if ($(".edit-workspace-settings input[type='text']").val()) {
			currentWorkspace.find("h2").text($(".edit-workspace-settings input[type='text']").val());
		} else {
		}

		hideWorkspaceSettings();

		refreshList();
		return false;
	});

	$(".cancel").click(function() {


		hideWorkspaceSettings();

		return false;
	});

	$(".delete-1").click(function () {
		$(this).hide();
		$(".delete-transition").show();

		return false;
	});

	$(".delete-yes").click(function () {
		currentWorkspace.remove();

		hideWorkspaceSettings();
		notify("The <strong>" + currentWorkspace.find("h2").text() + "</strong> workspace has been deleted.");

		refreshList();
		return false;
	});
	$(".delete-no").click(function () {
		$(".delete-transition").hide();
		$(".delete-1").show();

		refreshList();
		return false;
	});

	/* === End Workspace Settings === */

	function notify(notifyText) {
		$("#notify").html(notifyText);
		$("#notify").fadeIn(100).delay(2500).fadeOut(100);
	}
	function hideWorkspaceSettings() {
		$(".edit-workspace-settings").fadeOut(100);
	}
	function checkNullWhite(stuff) {

	}
	function refreshList() {

	}
});
