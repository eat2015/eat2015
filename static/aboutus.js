$(document).ready(function(){
	$(window).resize(function() {
		aboutuscheckwindow();
	});
	function aboutuscheckwindow(){
		if($(window).width() < 750){
			$("#description2col2").css("display","inline-block");
			$("#description2col").css("display","none");
			$("#description4col2").css("display","inline-block");
			$("#description4col").css("display","none");
			$()
		}else{
			$("#description2col").css("display","inline-block");
			$("#description2col2").css("display","none");
			$("#description4col").css("display","inline-block");
			$("#description4col2").css("display","none");
		}
	};
	aboutuscheckwindow();
});