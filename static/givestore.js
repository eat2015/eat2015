$(document).ready(function(){
	$("#storenameinput").keyup(function(){
		if($(this)[0].value == ""){
			$("#storenameoutput").html("店家名稱");
		}else{
			$("#storenameoutput").html($(this)[0].value);
		}
	});
	$("#storeaddressinput").keyup(function(){
		if($(this)[0].value == ""){
			$("#storeaddressoutput").html("店家地址");
		}else{
			$("#storeaddressoutput").html($(this)[0].value);
		}
	});
	$("#storedescriptioninput").keyup(function(){
		if($(this)[0].value == ""){
			$("#storedescriptioninput").html("店家敘述");
		}else{
			$("#storedescriptionoutput").html($(this)[0].value.replace(/\n/g,"<br>"));
		}
	});
	$("#fbaddressinput").keyup(function(){
		console.log($(this)[0].value.substr(0,7));
		if($(this)[0].value == "" || ($(this)[0].value.substr(0,7) != "http://" && $(this)[0].value.substr(0,8) != "https://")){
			$("#fbaddressoutput").css('display','none');
		}else{
			$("#fbaddressoutput").css('display','block');
			$("#fbaddressoutput").attr('href',$(this)[0].value);
		}
	});
	$.ajax({
        url : "alltag",
        type : "POST",
        data : {},
        success : function(data) {
    		$("#storetagdropdownmenu").html("");
    		$.each(JSON.parse(data), function(key,value) {
			  	$("#storetagdropdownmenu").append('<div class="item" data-value="'+value.id+'" data-title="'+value.name+'" data-content="'+value.description+'">'+value.name+'</div>');
			});
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
	$('#storetagdropdown').dropdown();
	$("#storesubmitbutton").click(function(){
		event.preventDefault();
		var button = $(this);
		if($("#fbaddressinput")[0].value != "" && $("#fbaddressinput")[0].value.substr(0,7) != "http://" && $("#fbaddressinput")[0].value.substr(0,8) != "https://"){
			$("#errormessagecontent").html("FB的地址開頭必須為<br>http:// 或 https://");
			$('#myerrormessagemodal').modal('toggle');
		}else{
			$(this).addClass('loading disabled');
			$(this).unbind();
			$(this).click(function(){
				event.preventDefault();
			});
			data = {};
			data.storename = $("#storenameinput")[0].value;
			data.storeaddress = $("#storeaddressinput")[0].value;
			data.storetag = $("#storetagdropdown").dropdown('get value');
			data.storedescription = $("#storedescriptioninput")[0].value;
			data.storefb = $("#fbaddressinput")[0].value;
			$.ajax({
		        url : "addnewstore",
		        type : "POST",
		        data : {json:JSON.stringify(data)},
		        success : function(data) {
		    		if(data == "success"){
		    			button.removeClass('loading');
		    			button.html('完成');
		    			button.addClass('green');
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