$(document).ready(function(){
	$('.ui.dropdown').dropdown();
	var logined;
	function outputaboutus(){
		$("#mainscreen").html('<div class="ui active centered large inline loader" style="margin-top:200px;"></div>');
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
	}
	function setnormalbutton(){
		$("#homebutton").click(function(){
			$("#mainscreen").html('<div class="ui active centered large inline loader" style="margin-top:200px;"></div>');
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
		$("#smallhomebutton").click(function(){
			$("#mainscreen").html('<div class="ui active centered inline loader" style="margin-top:200px;"></div>');
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
			$("#mainscreen").html('<div class="ui active centered large inline loader" style="margin-top:200px;"></div>');
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
		$("#smallaboutusbutton").click(function(){
			$("#mainscreen").html('<div class="ui active centered inline loader" style="margin-top:200px;"></div>');
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
	}
		
	function checklogined(){
		var user = Cookies.get('account');
		if(user){
		logined = true;
			$("#loginmenu").html(
				'<button type="button" class="ui primary button" style="font-size:15px;margin:auto">'+
		    		user+
		        '</button>');
			$("#downmenu").html(
				'<div id="homebutton" class="center aligned column">'+
					'<img src="static/homebutton.png"></img>'+
					'<div style="margin-top:5px">首頁</div>'+
				'</div>'+
			    '<div id="searchpagebutton" class="center aligned column">'+
			        '<img src="static/searchpage.png"></img>'+
			        '<div style="margin-top:5px">搜尋頁面</div>'+
			    '</div>'+
			    '<div id="givestorebutton" class="center aligned column">'+
			        '<img src="static/givestore.png"></img>'+
			        '<div style="margin-top:5px">提供店家</div>'+
			    '</div>'+
				'<div id="aboutusbutton" class="center aligned column">'+
					'<img src="static/aboutusbutton.png"></img>'+
					'<div style="margin-top:5px">關於我們</div>'+
				'</div>'+
			    '<div id="listpagebutton" class="center aligned column">'+
			        '<img src="static/list.png"></img>'+
			        '<div style="margin-top:5px">管理清單</div>'+
			    '</div>'+
				'<div id="logoutbutton" class="center aligned column">'+
		        	'<img src="static/logout.png"></img>'+
		        	'<div style="margin-top:5px">登出</div>'+
		      	'</div>');
				$("#logoutbutton").click(function(){
					Cookies.remove('account');
					checklogined();
				});
				$("#smallscalemenu").html(
				'<div class="itemfont item" style="color:white;background-color:#84A8BD;font-size:18px!important;line-height:38px"><img src="static/user.png"></img>'+user+'</div>'+
				'<div class="ui divider" style="margin-top:0px"></div>'+
	        	'<div class="itemfont item" id="smallhomebutton">吃~吃~吃~~~</div>'+
	            '<div class="itemfont item">搜索美食</div>'+
	            '<div class="itemfont item">提供店家</div>'+
	            '<div class="itemfont item" id="smallaboutusbutton">關於我們</div>'+
	            '<div class="ui divider"></div>'+
	            '<div class="itemfont item">管理美食清單</div>'+
	            '<div class="itemfont item" id="smalllogoutbutton">登出</div>');
					setnormalbutton();
				$("#smalllogoutbutton").click(function(){
					Cookies.remove('account');
					checklogined();
				});
				$('.ui.dropdown').dropdown();
		}else{
			logined = false;
			$("#loginmenu").html(
	    	'<span id="loginbutton" data-toggle="modal" data-target="#myloginmodal">登入</span>'+
	        '<span >|</span>'+
	        '<span id="registerbutton" data-toggle="modal" data-target="#myregistrationmodel">註冊</span>');
	        $("#downmenu").html(
	        	'<div id="homebutton" class="center aligned column">'+
					'<img src="static/homebutton.png"></img>'+
					'<div style="margin-top:5px">首頁</div>'+
				'</div>'+
			    '<div id="searchpagebutton" class="center aligned column">'+
			        '<img src="static/searchpage.png"></img>'+
			        '<div style="margin-top:5px">搜尋頁面</div>'+
			    '</div>'+
			    '<div id="givestorebutton" class="center aligned column">'+
			        '<img src="static/givestore.png"></img>'+
			        '<div style="margin-top:5px">提供店家</div>'+
			    '</div>'+
				'<div id="aboutusbutton" class="center aligned column">'+
					'<img src="static/aboutusbutton.png"></img>'+
					'<div style="margin-top:5px">關於我們</div>'+
				'</div>');
	        $("#smallscalemenu").html(
	        	'<div class="itemfont item" id="smallhomebutton">吃~吃~吃~~~</div>'+
	            '<div class="itemfont item">搜索美食</div>'+
	            '<div class="itemfont item">提供店家</div>'+
	            '<div class="itemfont item" id="smallaboutusbutton">關於我們</div>'+
	            '<div class="ui divider"></div>'+
	            '<div class="itemfont item" data-toggle="modal" data-target="#myloginmodal">登入</div>'+
	            '<div class="itemfont item" data-toggle="modal" data-target="#myregistrationmodel">註冊</div>');
	        setnormalbutton();
	        $('.ui.dropdown').dropdown();
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
			$("#loginmenu").html('<div id="loading1"></div><div id="loading2"></div><div id="loading3"></div><div id="loading4"></div><div id="loading5"></div>');
			loading();
    		$.ajax({
        		url : "login/",
        		type : "POST",
        		data : { accountnumber : $('#loginusrname').val() , password : $("#loginpsw").val()},
        		success : function(json) {
    				if(json.exist){
    					checklogined();
    					$('#myloginmodal').modal('toggle');
    					$('#mymessagemodal').modal('toggle');
						$("#messagecontent").html("登入成功");
    				}else{
    					$("#loginmenu").html(
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
			$("#loginmenu").html('<div id="loading1"></div><div id="loading2"></div><div id="loading3"></div><div id="loading4"></div><div id="loading5"></div>');
			loading();
    		$.ajax({
        		url : "register/",
        		type : "POST",
        		data : { accountnumber : $('#registerusrname').val() , password : $("#registerpsw").val() , email : $("#registeremail").val()},
        		success : function(json) {
    				if(json.exist){
    					$("#loginmenu").html(
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