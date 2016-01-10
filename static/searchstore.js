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
		if(button.data('type') == "store"){
			$.ajax({
				url : "dislikestore",
				type : "POST",
				data : {storeid:button.data('storeid')},
				datatype:'json',
				success : function(data) {
					if(data == 0){
						button.get(0).style.color = 'black';
						button.find('b').html(parseInt(button.find('b').html())+1);
					}else if(data == 1){
						button.get(0).style.color = '';
						button.find('b').html(parseInt(button.find('b').html())-1);
					}else{

					}
				},
				error : function(xhr,errmsg,err) {
						console.log(xhr.status + ": " + xhr.responseText);
					} 
				});
		}else if(button.data('type') == "storecomment"){
			$.ajax({
				url : "dislikestorecomment",
				type : "POST",
				data : {storecommentid:button.data('storecommentid')},
				datatype:'json',
				success : function(data) {
					if(data == 0){
						button.get(0).style.color = 'black';
						button.find('b').html(parseInt(button.find('b').html())+1);
					}else if(data == 1){
						button.get(0).style.color = '';
						button.find('b').html(parseInt(button.find('b').html())-1);
					}else{

					}
				},
				error : function(xhr,errmsg,err) {
						console.log(xhr.status + ": " + xhr.responseText);
					} 
				});
		}
	});
	$(".likebutton").click(function(){
		var button = $(this);
		if($(this).get(0).style.color == ""){
			$(this).get(0).style.color = "red";
			if($(this).parent().children(".dislikebutton")[0].style.color == "black"){
				$(this).parent().children(".dislikebutton")[0].style.color = "";
			}
			console.log(button.find('b').html());
			button.find('b').html(parseInt(button.find('b').html())+1);
		}else if($(this).get(0).style.color == "red"){
			$(this).get(0).style.color = "";
		}
		if(button.data('type') == "store"){
			$.ajax({
				url : "likestore",
				type : "POST",
				data : {storeid:button.data('storeid')},
				datatype:'json',
				success : function(data) {
					if(data == 0){
						button.get(0).style.color = 'red';
						button.find('b').html(parseInt(button.find('b').html())+1);
					}else if(data == 1){
						button.get(0).style.color = '';
						button.find('b').html(parseInt(button.find('b').html())-1);
					}else{

					}
				},
				error : function(xhr,errmsg,err) {
						console.log(xhr.status + ": " + xhr.responseText);
					} 
				});
		}else if(button.data('type') == "storecomment"){
			$.ajax({
				url : "likestorecomment",
				type : "POST",
				data : {storecommentid:button.data('storecommentid')},
				datatype:'json',
				success : function(data) {
					if(data == 0){
						button.get(0).style.color = 'red';
						button.find('b').html(parseInt(button.find('b').html())+1);
					}else if(data == 1){
						button.get(0).style.color = '';
						button.find('b').html(parseInt(button.find('b').html())-1);
					}else{

					}
				},
				error : function(xhr,errmsg,err) {
						console.log(xhr.status + ": " + xhr.responseText);
					} 
				});
		}
	});
	$("#submitreplybutton").click(function(){
		$(this).addClass('loading');
		$(this).attr('disabled','disabled');
		console.log($(this).parents('.ui.card'));
	});
});