function displayWindowSize() {
	var $w = $(window).width();
	var $h = $(window).height();

	$("#window-size-indicator").html("Window Size: <strong>" + $w + 'x' + $h + "</strong>");
}

$(window).on("load", function() {
	displayWindowSize();
});

$(window).on("resize", function() {
	displayWindowSize();
});
