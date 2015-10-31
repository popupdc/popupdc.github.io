$(window).ready(function(){
	adaptEverything();
	$(window).resize(function(){
		adaptEverything();
	});

});

function adaptEverything()
{
	// Positioning the header info
	var windowHeight = $(window).height();
	var headerInfoHeight = $('#headerInfo').height();

	$('header').css({
		'height' : windowHeight + 'px',
		'paddingTop': (windowHeight - headerInfoHeight) / 2 + 'px'
	});

	// Positioning the "learn more" button
	var windowWidth = $(window).width();
	var learnMoreWidth = $('header a').width();
	$('header a').css({
		'left' : ((windowWidth - learnMoreWidth) / 2 - 21) + 'px'
	});
}

	