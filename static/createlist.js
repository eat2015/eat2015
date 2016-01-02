$(document).ready(function(){
	$('.ui.accordion').accordion();
$('.ui.dropdown').dropdown();
	function resetsize(){
		$("#customlistmenu").css("width",$("#monitor").width()+24);
		$("#customlistdesription").css("width",$(".six.wide.column").width());
	}
	resetsize();
	$("#customlistnextbutton").click(function(){
			$("#shiftcontroller").css("margin-left",($(".six.wide.column").width()+20)*(-1)+"px");
			$("#listdescriptionwrapper").css("left",($(".ten.wide.column").width()/10-20)*(-1)+"px");
			$(this).removeClass("work");
			$("#createlistbutton").removeClass("btn-primary").addClass("btn-success").removeClass("disabled");
			$("#createlistbutton").click(function(){
				$("#createlistbutton").removeClass("btn-success").addClass("btn-primary").addClass("disabled");
				$("#addlistdescriptionbutton").removeClass("btn-primary").addClass("btn-default");
				$("#shiftcontroller").css("margin-left",0+"px");
				$("#listdescriptionwrapper").css("left",0+"px");
				$("#customlistnextbutton").addClass("work");
			});
			$("#addlistdescriptionbutton").removeClass("btn-default").addClass("btn-primary");
	});
	$("#customlistsubmitbutton").click(function(){
		if($("#customlist").children(".filteritem").length == 0){
			$('#myerrormessagemodal').modal('toggle');
			$("#errormessagecontent").html("清單內容不可以為空");
		}else{
			var stores = [];
			$("#customlist .filteritem").each(function(index,val){
				var store = {};
				store.id = $(val).data("id");
				store.recommendmeal = $("#customlist .filteritem form")[index].elements[0].value;
				store.description = $("#customlist .filteritem form")[index].elements[1].value;
				var pics = [];
				console.log(val);
				console.log($(val).children('.content').children('form').children('.upload_pic'));
				for(var i = 0;i < $(val).children('.content').children('form').children('.upload_pic').length;i++){
					var pic = {};
					pic.img = $(val).children('.content').children('form').children('.upload_pic').children('input')[i].files[0];
					pic.description = $(val).children('.content').children('form').children('.preview').children('textarea')[i].value;
					pics.push(pic);
				}
				store.pics = pics;
				stores.push(store);
			});
			var data = {};
			data.listname = $("#customlistdesription form")[0].elements[0].value;
			data.taglist = $("#createlistdropdown2").dropdown('get value');
			data.description = $("#customlistdesription form")[0].elements[3].value;
			data.customlist = stores;
			console.log(stores);
			$.ajax({
				url : "createlistsubmit",
				type : "POST",
				data : {json:JSON.stringify(data)},
				dataType: "json",
				success : function(data) {
				},
				error : function(xhr,errmsg,err) {
						console.log(xhr.status + ": " + xhr.responseText);
				} 
			});
		};
	});
	var formhtml = '<form class="form-horizontal" role="form">'+
						  '<div class="form-group">'+
						    '<label class="col-sm-2 control-label">推薦菜色</label>'+
						    '<div class="col-sm-10">'+
						      '<input type="text" class="form-control" id="inputEmail3" placeholder="這家店哪些菜色吸引你？" name="recommendmeal">'+
						    '</div>'+
						  '</div>'+
						  '<div class="form-group">'+
						    '<label class="col-sm-2 control-label">備註</label>'+
						    '<div class="col-sm-10">'+
						      '<textarea class="form-control" rows="3" placeholder="對於這家店有甚麼想說的......" name="storedescription"></textarea>'+
						    '</div>'+
						  '</div>'+
						  '<div class="addpicbutton">上傳圖片</div>'+
						'</form>';
	function setdraggable(){
		$( ".filteritem" ).draggable({
			revert:true	
		});
	    $( "#stores" ).droppable({
	      accept: ".filteritem",
	      activeClass: "ui-state-hover",
	      hoverClass: "ui-state-active",
	      drop: function( event, ui ) {
	      	if($(ui.draggable).data("pos") == "customlist"){
		      	$(ui.draggable).data("pos","stores");
		      	var content = $(ui.draggable).data("storecontent");
		      	$(ui.draggable).data("form",$(ui.draggable).children(".content").children("form")[0]);
		      	$(ui.draggable).children(".content").html(content);
		    }
		        var target = $(ui.draggable);
		      	var droptop = target.position().top;
		    	var dropleft = target.offset().left;
		    	var dropwidth = target.width();
		    	$(this).append($(ui.draggable));
		 		$(ui.draggable).css("left","0");
		 		$(ui.draggable).css("top","0");
		 		$(ui.draggable).css("left",dropleft - target.offset().left + 12 + dropwidth/2 - target.width()/2);
		 		$(ui.draggable).css("top",droptop - target.position().top);
	 		
	      }
	    }).sortable();;

	    $( "#customlist" ).droppable({
	      accept: ".filteritem",
	      activeClass: "ui-state-hover",
	      hoverClass: "ui-state-active",
	      drop: function( event, ui ) {
	      	if($(ui.draggable).data("pos") == "stores"){
		      	$(ui.draggable).data("storecontent",$(ui.draggable).children(".content").html());
		      	$(ui.draggable).children(".content").html($(ui.draggable).data('form'));
		      	$(ui.draggable).children(".content").children('img').remove();
	      		$(ui.draggable).data("pos","customlist");
		      	var target = $(ui.draggable);
		      	var droptop = target.position().top;
		    	var dropleft = target.position().left;
		    	var dropwidth = target.width();
		    	$(this).append($(ui.draggable));
		 		$(ui.draggable).css("left","0");
		 		$(ui.draggable).css("top","0");
		 		$(ui.draggable).css("left",dropleft - target.offset().left + 12 + $("#statusbuttonwrapper").width() + dropwidth/2 - target.width()/2);
		 		$(ui.draggable).css("top",droptop - target.position().top);
		 		setexpandpicbutton();
		 		setremovepicbutton();
		 		setaddpicbutton();
	      	}else{
	      		var target = $(ui.draggable);
		      	var droptop = target.position().top;
		    	var dropleft = target.position().left;
		    	var dropwidth = target.width();
		    	$(this).append($(ui.draggable));
		 		$(ui.draggable).css("left","0");
		 		$(ui.draggable).css("top","0");
		 		$(ui.draggable).css("left",dropleft - target.position().left + dropwidth/2 - target.width()/2);
		 		$(ui.draggable).css("top",droptop - target.position().top);
		 		setexpandpicbutton();
		 		setremovepicbutton();
		 		setaddpicbutton();
	      	}
	      }
	    });
	};
	setdraggable();
	function setstores(){
		$("#stores").html('<div class="ui active centered large inline loader" style="margin-top:100px;"></div>');
	$.ajax({
		url : "tagsearchstore",
		type : "POST",
		data : {taglist:$("#createlistdropdown1").dropdown('get value')},
		datatype:'json',
		success : function(data) {
			$("#stores").html("");
			if(data != ""){
				$.each(JSON.parse(data), function(key,value) {
					$("#stores").append(
						'<div class="ui styled accordion filteritem" data-id="'+value.id+'" data-pos="stores" >'+
							'<div class="title">'+
								value.name+
							'</div>'+
							'<div class="content">'+
								'<p class="transition hidden">'+value.description+'</p>'+
								'<p><a target="_blank" href="searchstore?store='+value.id+'">店家完整資訊</a></p>'+
							'</div>'+
						'</div>'
					);
				});
				$(".filteritem").data("form",formhtml);
				$('.ui.accordion').accordion();
				setdraggable();
			}else{
				$("#stores").html('<p style="text-align: center;'+
			    'font-size: 25px;'+
			    'font-family: Microsoft JhengHei;'+
			    'line-height: 300px;">沒有符合的店家</p>');
			}
		},
		error : function(xhr,errmsg,err) {
				console.log(xhr.status + ": " + xhr.responseText);
			} 
		});
	};
	setstores();
	$("#createlistsearchstore").change(function () { 
		setstores();
	});
	function setremovepicbutton(){
		$(".removefilebutton").click(function(){
			if($(this).parent(".upload_pic").children('.expandbutton').html() == '<i class="chevron down icon"></i>'){
    				$(this).parent(".upload_pic").next().remove();
    			}
			$(this).parent(".upload_pic").remove();
		});
	}
	function setexpandpicbutton(){
		$(".expandbutton").click(function(){
			var expandbutton = $(this);
			if($(this).html() == '<i class="chevron down icon"></i>'){
    				$(this).html('<i class="chevron right icon"></i>');
    				$(this).parent(".upload_pic").next().css("display",'none');
    			}else{
    				$(this).html('<i class="chevron down icon"></i>');
    				$(this).parent(".upload_pic").next().css("display",'block');
		        }
		});
	}
	function setaddpicbutton(){
		$(".addpicbutton").click(function(){
		var x = document.createElement("input");
    	x.setAttribute("type", "file");
    	var pos = $(this);
    	x.onchange = function(e){
    		console.log(123);
    		var d = document.createElement("div");
    		d.setAttribute("class","upload_pic");
            var dt = document.createElement("div");
            dt.setAttribute("class","file_icon");


            var filename = x.value.split('\\')[x.value.split('\\').length-1];
            var filetype = filename.split('.')[filename.split('.').length-1];
            filetype = filetype.toLowerCase();
            if(filetype == "rar" || filetype == "zip" || filetype == "7z"){
                dt.innerHTML = '<i class="file archive outline icon"></i>';
            }else if(filetype == "png" || filetype == "jpg" || filetype == "bmp" || filetype == "jpeg" ){
                dt.innerHTML = '<i class="file image outline icon"></i>';
            }else if(filetype == "pdf"){
                dt.innerHTML = '<i class="file pdf outline icon"></i>';
            }else if(filetype == "pptx" || filetype == "ppt"){
                dt.innerHTML = '<i class="file powerpoint outline icon"></i>';
            }else if(filetype == "docx" || filetype == "doc"){
                dt.innerHTML = '<i class="file word outline icon"></i>';
            }else if(filetype == "wmv" || filetype == "mp4" || filetype == "avi" || filetype == "rmvb" || filetype == "mov"){
                dt.innerHTML = '<i class="file video outline icon"></i>';
            }else if(filetype == "xlsx" || filetype == "xls"){
                dt.innerHTML = '<i class="file excel outline icon"></i>';
            }else if(filetype == "mp3" || filetype == "wma"){
                dt.innerHTML = '<i class="file audio outline icon"></i>';
            }else{
                dt.innerHTML = '<i class="file outline icon"></i>';
            }


    		var dn = document.createElement("div");
    		dn.setAttribute("class","file_name");

    		dn.innerHTML = filename;
    		var de = document.createElement("div");
    		de.setAttribute("class","expandbutton");
            de.innerHTML = '<i class="chevron right icon"></i>';
            var dd = document.createElement("div");
            dd.setAttribute("class","removefilebutton");
            dd.innerHTML = '<i class="remove circle icon"></i>';
            d.appendChild(dt);
    		d.appendChild(dn);
    		d.appendChild(de);
    		d.appendChild(dd);
    		d.appendChild(x);
    		pos.parent("form").append(d);
    		var reader = new FileReader();
		    reader.onload = function (e) {
		     	var dd = document.createElement("div");
		     	$(dd).attr('class','preview');
		     	var img = document.createElement("img");
		        $(img).attr('src', e.target.result).attr('class','previewimg');
		        dd.appendChild(img);
		        $(d).after(dd);
		        $(dd).append('<textarea class="form-control" placeholder="添加圖片描述"></textarea>');
		        $(d).next().css("display",'none');
		    };
		    reader.readAsDataURL($(d).children('input')[0].files[0]);
    		$(de).click(function(){
    			if($(this).html() == '<i class="chevron down icon"></i>'){
    				$(this).html('<i class="chevron right icon"></i>');
    				$(d).next().css("display",'none');
    			}else{
    				$(this).html('<i class="chevron down icon"></i>');
    				$(d).next().css("display",'block');
		        }
    		});
    		$(dd).click(function(){
    			if($(d).children('.expandbutton').data("type") == "expanded"){
    				$(d).next().remove();
    			}
    			$(d).remove();
    		});
    	}
    	x.click();
    });
	}
});
