$(document).ready(function(){
	$(".accordion").accordion({
		exclusive:false
	});
	$('.item').popup({
		exclusive:true,
    	hoverable: true, 
    	position: 'bottom center'
	});
});