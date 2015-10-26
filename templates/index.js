$(document).ready(function(){
	$("#searchbar").css("margin-left",$(window).width()/2-250-250-20-50);
	$("#menu").mouseenter(function(){
		if($(this).css("height") == "74px")
		$(this).animate({
			height: 165
		},150);
	}).mouseleave(function(){
		if($(this).css("height") == "165px")
			$(this).animate({
				height: 74
			},150);
	});
});