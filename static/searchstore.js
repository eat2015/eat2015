$(document).ready(function(){
	var userreplynotlogin = '<div class="content">'+
                                    '<div class="ui comments">'+
                                     '<div class="comment">'+
                                        '<div class="content">'+
                                          '<div class="text" style="margin: 0.5em 0 0.5em;text-align:center">'+
                                            '訪客無法使用回覆功能，請'+
                                            '<span id="loginbutton" data-toggle="modal" data-target="#myloginmodal" style="color:blue">登入</span>'+
                                            '或'+
                                            '<span id="registerbutton" data-toggle="modal" data-target="#myregistrationmodel"style="color:blue">註冊</span>'+
                                          '</div>'+
                                        '</div>'+
                                      '</div>'+
                                    '</div>'+
                                '</div>';
    var userreplylogin = '<div class="content" style="padding-bottom:0px;">'+
                                    '<div class="ui comments">'+
                                      '<div class="comment">'+
                                        '<div class="content">'+
                                          '<div class="author" style="text-align:center">回覆</div>'+
                                          '<div class="text" style="margin: 0.5em 0 0.5em;">'+
                                            '<div class="ui form">'+
                                              '<div class="field">'+
                                                '<textarea style="min-height:60px;height:60px;"></textarea>'+
                                              '</div>'+
                                              '<div id="submitreplybutton" class="ui submit button" style="margin: auto;display: block;width: 80px;">送出</div>'+
                                            '</div>'+
                                          '</div>'+
                                        '</div>'+
                                      '</div>'+
                                    '</div>'+
                                '</div>';
    function setlikebutton(){
    	$(".dislikebutton").unbind();
		$(".dislikebutton").click(function(){
			var button = $(this);
			if($(this).get(0).style.color == ""){
				$(this).get(0).style.color = "black";
				if($(this).parent().children(".likebutton")[0].style.color == "red"){
					$(this).parent().children(".likebutton")[0].style.color = "";
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
		$(".likebutton").unbind();
		$(".likebutton").click(function(){
			var button = $(this);
			if($(this).get(0).style.color == ""){
				$(this).get(0).style.color = "red";
				if($(this).parent().children(".dislikebutton")[0].style.color == "black"){
					$(this).parent().children(".dislikebutton")[0].style.color = "";
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
				}
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
	}
	setreplybutton();
	$("#loginsubmitbutton").unbind();
	function setnormalbutton(){
		$("#givestorebutton").click(function(){
			$("#mainscreen").html('<div class="ui active centered large inline loader" style="margin-top:200px;"></div>');
			$.ajax({
	        	url : "givestore",
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
		$("#searchpagebutton").click(function(){
			$("#mainscreen").html('<div class="ui active centered large inline loader" style="margin-top:200px;"></div>');
			$.ajax({
		        url : "search",
		        type : "POST",
		        data : {},
		        success : function(data) {
		    		$("#mainscreen").html(data);
		    		var taglist;
					if($("#searchdropdown").dropdown('get value') == ""){
						taglist = [];
					}else{
						taglist = $("#searchdropdown").dropdown('get value').split(',');
					}
		    		$.ajax({
				        url : "tagsearchstore",
				        type : "POST",
				        data : {taglist:$("#searchdropdown").dropdown('get value')},
				        success : function(data) {
				        	$.each(JSON.parse(data), function(key,value) {
			  					$("#storelist").append(
			  						'<div class="title" style="padding:0;height:42px">'+
									  	'<div style="width:10%;text-align:center;line-height:42px;float:left">'+
									    	(key+1)+
									    '</div>'+
									    '<div style="width:50%;text-align:center;line-height:42px;float:left">'+
									    	value.name+
									    '</div>'+
									    '<div class="bad" style="width:20%;text-align:center;line-height:42px;float:right">'+
									   		value.bad+
									   	'</div>'+
									   	'<div class="good" style="width:20%;text-align:center;line-height:42px;float:right">'+
									   		value.good+
									   	'</div>'+
									'</div>'+
									'<div class="content">'+
									    '<p>'+value.description+'</p>'+
									    '<p style="text-align:right">.....<a target="_blank" href="searchstore?store='+value.id+'">店家完整資訊</a></p>'+
									'</div>'
			  					);
							});
						},
						error : function(xhr,errmsg,err) {
								console.log(xhr.status + ": " + xhr.responseText);
							} 
						});
					$.ajax({
				        url : "tagsearchlist",
				        type : "POST",
				        data : {taglist:$("#searchdropdown").dropdown('get value')},
				        success : function(data) {
				        	$.each(JSON.parse(data), function(key,value) {
			  					$("#listlist").append(
			  						'<div class="title" style="padding:0;height:42px">'+
									  	'<div style="width:10%;text-align:center;line-height:42px;float:left">'+
									    	(key+1)+
									    '</div>'+
									    '<div style="width:50%;text-align:center;line-height:42px;float:left">'+
									    	value.name+
									    '</div>'+
									    '<div class="bad" style="width:20%;text-align:center;line-height:42px;float:right">'+
									   		value.bad+
									   	'</div>'+
									   	'<div class="good" style="width:20%;text-align:center;line-height:42px;float:right">'+
									   		value.good+
									   	'</div>'+
									'</div>'+
									'<div class="content">'+
									    '<p>'+value.description+'</p>'+
									    '<p style="text-align:right">.....<a target="_blank" href="searchlistajax?list='+value.id+'">清單完整資訊</a></p>'+
									'</div>'
			  					);
							});
						},
						error : function(xhr,errmsg,err) {
								console.log(xhr.status + ": " + xhr.responseText);
							} 
						});
				},
				error : function(xhr,errmsg,err) {
					console.log(xhr.status + ": " + xhr.responseText);
				} 
			});
		});
		$("#listtemplatebutton").click(function(){
			$("#mainscreen").html('<div class="ui active centered large inline loader" style="margin-top:200px;"></div>');
			$.ajax({
	        	url : "searchlist",
	        	type : "GET",
	        	data : {},
	        	success : function(data) {
	    			$("#mainscreen").html(data);
	       		},
	        	error : function(xhr,errmsg,err) {
	            	console.log(xhr.status + ": " + xhr.responseText);
	        	}
	    	});
		});
		$("#createlisttemplatebutton").click(function(){
			$("#mainscreen").html('<div class="ui active centered large inline loader" style="margin-top:200px;"></div>');
			$.ajax({
	        	url : "createlist",
	        	type : "GET",
	        	data : {},
	        	success : function(data) {
	    			$("#mainscreen").html(data);
	    			$("#createlisttagmenu1").html($("#searchdropdownmenu").html());
	    			$("#createlisttagmenu2").html($("#searchdropdownmenu").html());
	    			$('.item').popup({
						exclusive:true,
				    	hoverable: true, 
				    	position: 'bottom center'
					});
	       		},
	        	error : function(xhr,errmsg,err) {
	            	console.log(xhr.status + ": " + xhr.responseText);
	        	}
	    	});
		});
		$("#menulogo img").click(function(){
			$("#mainscreen").html('<div class="ui active centered large inline loader" style="margin-top:200px;"></div>');
			$.ajax({
	        	url : "main",
	        	type : "GET",
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
		$("#userreply").html(userreplylogin);
		$("#userreply").find('#submitreplybutton').data('storeid',$("#userreply").data('storeid'));
		setreplybutton();
			$("#loginmenu").html(
				'<button type="button" class="btn btn-warning" style="font-size:15px;margin:auto">'+
		    		user+
		        '</button>');
			$("#downmenu").html(
				'<div id="homebutton" class="center aligned column">'+
					'<img src="static/homebutton.png"></img>'+
					'<div style="margin-top:5px">首頁</div>'+
				'</div>'+
			    '<div id="searchpagebutton" data-content="可以進入由標籤搜索店家與清單的頁面" class="center aligned column">'+
			        '<img src="static/searchpage.png"></img>'+
			        '<div style="margin-top:5px">搜尋頁面</div>'+
			    '</div>'+
			    '<div id="givestorebutton" data-content="新增店家的資訊到我們的資料庫，這將會讓其他使用者可以搜尋到你提供的店家" class="center aligned column">'+
			        '<img src="static/givestore.png"></img>'+
			        '<div style="margin-top:5px">提供店家</div>'+
			    '</div>'+
				'<div id="aboutusbutton" class="center aligned column">'+
					'<img src="static/aboutusbutton.png"></img>'+
					'<div style="margin-top:5px">關於我們</div>'+
				'</div>'+
			    '<div id="createlisttemplatebutton" data-content="管理你的店家清單，清單內容可以是最常吃的幾個店家、覺得好吃的幾個店家或者是想要推薦別人來吃的店家、都可以附上自己對店家的描述" class="center aligned column">'+
			        '<img src="static/list.png"></img>'+
			        '<div style="margin-top:5px">新增清單</div>'+
			    '</div>'+
				'<div id="logoutbutton" class="center aligned column">'+
		        	'<img src="static/logout.png"></img>'+
		        	'<div style="margin-top:5px">登出</div>'+
		      	'</div>');
				$("#logoutbutton").click(function(){
					Cookies.remove('account');
					checklogined();
				});
				$("#listpagebutton").popup({
					exclusive:true,
			    	hoverable: true, 
			    	position: 'bottom center'
				});
				$("#searchpagebutton").popup({
					exclusive:true,
			    	hoverable: true, 
			    	position: 'bottom center'
				});
		        $("#givestorebutton").popup({
					exclusive:true,
			    	hoverable: true, 
			    	position: 'bottom center'
				});
				$("#smallscalemenu").html(
				'<div class="itemfont item" style="color:white;background-color:#84A8BD;font-size:18px!important;line-height:38px"><img src="static/user.png" style="width:15px"></img>'+user+'</div>'+
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
		}else{
			logined = false;
			$("#userreply").html(userreplynotlogin);
			$("#loginmenu").html(
	    	'<span id="loginbutton" data-toggle="modal" data-target="#myloginmodal">登入</span>'+
	        '<span >|</span>'+
	        '<span id="registerbutton" data-toggle="modal" data-target="#myregistrationmodel">註冊</span>');
	        $("#downmenu").html(
	        	'<div id="homebutton" class="center aligned column">'+
					'<img src="static/homebutton.png"></img>'+
					'<div style="margin-top:5px">首頁</div>'+
				'</div>'+
			    '<div id="searchpagebutton" data-content="可以進入由標籤搜索店家與清單的頁面" class="center aligned column">'+
			        '<img src="static/searchpage.png"></img>'+
			        '<div style="margin-top:5px">搜尋頁面</div>'+
			    '</div>'+
			    '<div id="givestorebutton" data-content="新增店家的資訊到我們的資料庫，這將會讓其他使用者可以搜尋到你提供的店家" class="center aligned column">'+
			        '<img src="static/givestore.png"></img>'+
			        '<div style="margin-top:5px">提供店家</div>'+
			    '</div>'+
				'<div id="aboutusbutton" class="center aligned column">'+
					'<img src="static/aboutusbutton.png"></img>'+
					'<div style="margin-top:5px">關於我們</div>'+
				'</div>');
	        $("#searchpagebutton").popup({
				exclusive:true,
		    	hoverable: true, 
		    	position: 'bottom center'
			});
	        $("#givestorebutton").popup({
				exclusive:true,
		    	hoverable: true, 
		    	position: 'bottom center'
			});
	        $("#smallscalemenu").html(
	        	'<div class="itemfont item" id="smallhomebutton">吃~吃~吃~~~</div>'+
	            '<div class="itemfont item">搜索美食</div>'+
	            '<div class="itemfont item">提供店家</div>'+
	            '<div class="itemfont item" id="smallaboutusbutton">關於我們</div>'+
	            '<div class="ui divider"></div>'+
	            '<div class="itemfont item" data-toggle="modal" data-target="#myloginmodal">登入</div>'+
	            '<div class="itemfont item" data-toggle="modal" data-target="#myregistrationmodel">註冊</div>');
	        setnormalbutton();
		}
	}
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
	setlikebutton();
	function reply(){
		$(this).addClass('loading');
			$(this).attr('disabled','disabled');
			$(this).unbind();
			var button = $(this);
			var data = {};
			data.storeid = $(this).data('storeid');
			data.reply = $(this).parent().find('textarea')[0].value;
			console.log(data);
			$.ajax({
	        	url : "storereply",
	        	type : "POST",
	        	data : data,
	        	success : function(data) {
	        		button.removeClass('loading');
	        		button.removeAttr('disabled');
	        		button.click(reply);
	        		var data = jQuery.parseJSON(data)[0];
	    			button.parents('.ui.card').before(
						'<div class="ui card" style="width:95%;opacity:0">'+
		                   '<div class="content">'+
		                         '<div class="ui comments">'+
		                           '<div class="comment">'+
		                             '<div class="content">'+
		                               '<a class="author">'+data.author+'</a>'+
		                               '<div class="metadata">'+
		                                 '<div class="date">'+data.datetime+'</div>'+
		                               '</div>'+
		                               '<div class="text" style="margin: 0.5em 0 0.5em;">'+
		                                 data.description+
		                               '</div>'+
		                             '</div>'+
		                           '</div>'+
		                         '</div>'+
		                     '</div>'+
		                     '<div class="extra content">'+
		                                  
		                           '<div class="dislikebutton">'+
		                                      
		                             '<span class="right floated star" style="width:80px;text-align:center">'+
		                               '💔'+
		                               '<b>0</b> 不喜歡'+
		                             '</span>'+
		                         '</div>'+
		                                    
		                           '<div class="likebutton">'+
		                                      
		                             '<span class="right floated like">'+
		                               '❤'+
		                               '<b>0</b> 喜歡'+
		                             '</span>'+
		                         '</div>'+
		                   '</div>'+
		                 '</div>'
						);
					$('.ui.card').animate({opacity:1},700);
					button.parent().find('textarea')[0].value = "";
					setlikebutton();
	       		},
	        	error : function(xhr,errmsg,err) {
	            	console.log(xhr.status + ": " + xhr.responseText);
	        	}
	    	});
	}
	function setreplybutton(){
		$("#submitreplybutton").click(reply);
	}
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
});