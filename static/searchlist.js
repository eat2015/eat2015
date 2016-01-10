$(document).ready(function(){
	$(".accordion").accordion({
		exclusive:false
	});
	$('.item').popup({
		exclusive:true,
    	hoverable: true, 
    	position: 'bottom center'
	});
		$(".dislikebutton").click(function(){
		if($(this).get(0).style.color == ""){
			$(this).get(0).style.color = "black";
			if($(this).parent().children(".likebutton")[0].style.color == "red"){
				$(this).parent().children(".likebutton")[0].style.color = "";
			}
		}else if($(this).get(0).style.color == "black"){
			$(this).get(0).style.color = "";
		}
		if(button.data('type') == "list"){
			$.ajax({
				url : "dislikelist",
				type : "POST",
				data : {listid:button.data('listid')},
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
		}else if(button.data('type') == "listcomment"){
			$.ajax({
				url : "dislikelistcomment",
				type : "POST",
				data : {listcommentid:button.data('listcommentid')},
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
		if(button.data('type') == "list"){
			$.ajax({
				url : "likelist",
				type : "POST",
				data : {listid:button.data('listid')},
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
		}else if(button.data('type') == "listcomment"){
			$.ajax({
				url : "likelistcomment",
				type : "POST",
				data : {listcommentid:button.data('listcommentid')},
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
});