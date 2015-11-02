$(document).ready(function(){
	$('.ui.dropdown').dropdown();
	var logined;
	$("#homebutton").click(function(){
		$.ajax({
        	url : "main",
        	type : "POST",
        	data : {},
        	success : function(data) {
    			$("#mainscreen").html(data);
       		},
        	error : function(xhr,errmsg,err) {
            	console.log(xhr.status + ": " + xhr.responseText);
        	}
    	});
	});
	$("#aboutusbutton").click(function(){
		$.ajax({
        	url : "aboutus",
        	type : "POST",
        	data : {},
        	success : function(data) {
    			$("#mainscreen").html(data);
       		},
        	error : function(xhr,errmsg,err) {
            	console.log(xhr.status + ": " + xhr.responseText);
        	}
    	});
	});
	
	function checklogined(){
		var user = Cookies.get('account');
		if(user){
		logined = true;
		$("#loginmenu div").html(
			'<button id="userbutton" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="true">'+
	    		user+
	        '</button>'+
	        '<ul class="dropdown-menu" id="dropdown" role="menu" style="">'+
	          '<li><a href="#">編輯個人資訊</a></li>'+
	          '<li class="divider"></li>'+
	          '<li id="logout"><a href="#">登出</a></li>'+
	        '</ul>');
			$("#dropdown").css("top",$("#loginmenu").height()+20);
			$("#logout").click(function(){
				Cookies.remove('account');
				checklogined();
			});
		}else{
			logined = false;
			$("#loginmenu").html(
	    	'<span id="loginbutton" data-toggle="modal" data-target="#myloginmodal">登入</span>'+
	        '<span >|</span>'+
	        '<span id="registerbutton" data-toggle="modal" data-target="#myregistrationmodel">註冊</span>');
		}
	}
	checklogined();
	function loading(){
		$("#loading5").css("background-color","#C0DFF2");
		$("#loading1").css("background-color","#84A8BD");
		setTimeout(function(){
			$("#loading5").css("background-color","#84A8BD");
			$("#loading4").css("background-color","#C0DFF2");
		},100);
		setTimeout(function(){
			$("#loading4").css("background-color","#84A8BD");
			$("#loading3").css("background-color","#C0DFF2");
		},200);
		setTimeout(function(){
			$("#loading3").css("background-color","#84A8BD");
			$("#loading2").css("background-color","#C0DFF2");
		},300);
		setTimeout(function(){
			$("#loading2").css("background-color","#84A8BD");
			$("#loading1").css("background-color","#C0DFF2");
			setTimeout(function(){
				if($("#loading1").length)
					loading();
			},100);
		},400);
	}
	$("#errormessagemodal").css("width",300);
	$("#messagemodal").css("width",300);
	$("#loginmodal").css("margin-top",$(window).height()/2-240);
	$("#registrationmodal").css("margin-top",$(window).height()/2-250);
	$("#errormessagemodal").css("margin-top",$(window).height()/2-170);
	$("#messagemodal").css("margin-top",$(window).height()/2-170);
	function checkwindow(){
		if($(window).width() <= 860){
			$("#menu").unbind();
		}else if($(window).width() > 860){
			if($._data(document.getElementById('menu'), "events")){
			}else{
				$("#menu").mouseenter(function(){
					$("#downmenu").css("visibility","visible");
					if($(this).is(':animated')){
						$(this).stop();
					}
					$(this).animate({
							height: 165
						},150);
				}).mouseleave(function(){
					$("#downmenu").css("visibility","hidden");
					if($(this).is(':animated')){
						$(this).stop();
					}
					$(this).animate({
							height: 74
						},150);
				});
			}
		}
	}
	checkwindow();
	$(window).resize(function() {
		checkwindow();
	});
	var csrftoken = Cookies.get('csrftoken');
	function csrfSafeMethod(method) {
    	// these HTTP methods do not require CSRF protection
    	return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
	}
	$.ajaxSetup({
    	beforeSend: function(xhr, settings) {
        	if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            	xhr.setRequestHeader("X-CSRFToken", csrftoken);
        	}
    	}
	});
	$("#loginsubmitbutton").click(function(){
		if($("#loginusrname").val().length == 0){
			$('#myerrormessagemodal').modal('toggle');
			$("#errormessagecontent").html("帳號不可以為空");
		}else if($("#loginpsw").val().length == 0){
			$('#myerrormessagemodal').modal('toggle');
			$("#errormessagecontent").html("密碼不可以為空");
		}else{
			$('#myloginmodal').modal('toggle');
			$("#loginmenu div").html('<div id="loading1"></div><div id="loading2"></div><div id="loading3"></div><div id="loading4"></div><div id="loading5"></div>');
			loading();
    		$.ajax({
        		url : "login/",
        		type : "POST",
        		data : { accountnumber : $('#loginusrname').val() , password : $("#loginpsw").val()},
        		success : function(json) {
    				if(json.exist){
    					checklogined();
    				}else{
    					$("#loginmenu div").html(
    					'<span id="loginbutton" data-toggle="modal" data-target="#myloginmodal">登入</span>'+
	        			'<span >|</span>'+
	        			'<span id="registerbutton" data-toggle="modal" data-target="#myregistrationmodel">註冊</span>');
         				$('#myerrormessagemodal').modal('toggle');
						$("#errormessagecontent").html('帳號或密碼輸入錯誤');
    				}
       			},
        		error : function(xhr,errmsg,err) {
            		console.log(xhr.status + ": " + xhr.responseText);
        		}
        	
    		});
    	}
	});
	$("#registersubmitbutton").click(function(){
		if($("#registerusrname").val().length == 0){
			$('#myerrormessagemodal').modal('toggle');
			$("#errormessagecontent").html("帳號不可以為空");
		}else if($("#registerpsw").val().length == 0){
			$('#myerrormessagemodal').modal('toggle');
			$("#errormessagecontent").html("密碼不可以為空");
		}else if($("#registeremail").val().length == 0){
			$('#myerrormessagemodal').modal('toggle');
			$("#errormessagecontent").html("電子郵件不可以為空");
		}else{
			$("#loginmenu div").html('<div id="loading1"></div><div id="loading2"></div><div id="loading3"></div><div id="loading4"></div><div id="loading5"></div>');
			loading();
    		$.ajax({
        		url : "register/",
        		type : "POST",
        		data : { accountnumber : $('#registerusrname').val() , password : $("#registerpsw").val() , email : $("#registeremail").val()},
        		success : function(json) {
    				if(json.exist){
    					$("#loginmenu div").html(
		    				'<span id="loginbutton" data-toggle="modal" data-target="#myloginmodal">登入</span>'+
					        '<span >|</span>'+
					        '<span id="registerbutton" data-toggle="modal" data-target="#myregistrationmodel">註冊</span>');
    					$('#myerrormessagemodal').modal('toggle');
						$("#errormessagecontent").html("該帳號已經被註冊！");
    				}else{
    					$('#myregistrationmodel').modal('toggle');
    					$('#mymessagemodal').modal('toggle');
						$("#messagecontent").html("註冊成功");
						checklogined();
    				}
       			},
        		error : function(xhr,errmsg,err) {
            		console.log(xhr.status + ": " + xhr.responseText);
        		}
    		});
		}
	});
	$.ajax({
        url : "aboutus",
        type : "POST",
        data : {},
        success : function(data) {
    		$("#mainscreen").html(data);
       	},
        error : function(xhr,errmsg,err) {
           	console.log(xhr.status + ": " + xhr.responseText);
        } 
    });
});