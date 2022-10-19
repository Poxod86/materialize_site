$(document).ready(function(){
	$('.sidenav').sidenav();
	$('.parallax').parallax();
	$('.modal').modal({
		opacity:.8,
		inDuration:1500,
		outDuration:1500
	});
	$('.carousel').carousel({
		fullWidth: false,
		indicators: true,
		duration: 500

	});
});
