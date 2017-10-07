//Activate BS scrollspy plugin
$('body').scrollspy({ 
	target: '#portfolio-navbar',
	offset: 200
});

//store internal links in a variable
var $clickedNavLinks = $('a[href^="#"]');
//smooth scrolling on clicking navigation link
$clickedNavLinks.on('click', function(e) {
	//find the links and the clicked link
	var target = this.hash,
			$target = $(target),
			$navLinks = $('.navbar-nav a');
	//stop default link behaviour
	e.preventDefault();
	
	//do the scrolling
	$('html, body').stop().animate({
		'scrollTop': $target.offset().top
	}, 1000, 'swing');
});