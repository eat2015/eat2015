$(document).ready(function(){
	$(".dislikebutton").click(function(){
		if($(this).get(0).style.color == ""){
			$(this).get(0).style.color = "black";
			if($(this).parent().children(".likebutton")[0].style.color == "red"){
				$(this).parent().children(".likebutton")[0].style.color = "";
			}
		}else if($(this).get(0).style.color == "black"){
			$(this).get(0).style.color = "";
		}
		console.log($(this).parent().children(".likebutton")[0].style);
	});
	$(".likebutton").click(function(){
		if($(this).get(0).style.color == ""){
			$(this).get(0).style.color = "red";
			if($(this).parent().children(".dislikebutton")[0].style.color == "black"){
				$(this).parent().children(".dislikebutton")[0].style.color = "";
			}
		}else if($(this).get(0).style.color == "red"){
			$(this).get(0).style.color = "";
		}
	});
});