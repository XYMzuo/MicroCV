$(function(){
	getusername();
	$(".datepicker").datepicker();
	
	getInfo();
	
	$(".gr-item li > span").on("click",function(){
		$(this).addClass("item-active");
		$(this).parents("li").siblings("li").find("span").removeClass("item-active");
	})
	/*modify*/
	$("body").on("click",".e-list .modify",function(){
		$(this).parents(".xx-content").find("input,textarea").removeAttr("readonly");
		$(this).parents(".xx-content").find("input.company-name").focus();
		
	});
	
	/*公司信息的编辑*/
	$(".modify").on("click",function(){
		$(this).siblings("li").find("i").show();
		$(this).find("i").addClass("fa-active");
		$(this).siblings("li").find("i").removeClass("fa-active");
		$(this).parent().parent().siblings("div").find("input").removeAttr("readonly");
		$("#type-btn,#province,#city").removeAttr("disabled");
		$(".caret").css("display","inline-block");
		$.get("/MicroCV/li/allprovince.action", function(data){
			$('.prov_li').remove();
			var str = '';
			for(var i=0; i<data.length; i++){
				str += '<li class="prov_li"><a href="#" data-province_id="' + data[i].province_id + '">' + data[i].province_name + '</a></li>';
			}
			$('#ul_prov').append(str);
		});
	});
	/*个人信息的取消*/
	$("body").on("click",".xx-content .cancel",function(){
		$(".edit i").removeClass("fa-active");
		$(this).parents(".e-list").find("li:eq(2),li:eq(1)").find("i").hide();
		$(this).parents(".xx-content").find("input,textarea").attr("readonly","readonly");
		$(this).parents(".xx-content").find("input.datepicker,.dropdown button").attr("disabled","disabled");
		$(".caret").css("display","none");
		getInfo();
	});
	/*个人信息的保存*/
	$("body").on("click",".xx-content .save",function(){
		$(".edit i").removeClass("fa-active");
		$(this).parents(".e-list").find("li:eq(2),li:eq(1)").find("i").hide();
		$(this).parents(".xx-content").find("input,textarea").attr("readonly","readonly");
		$(this).parents(".xx-content").find("input.datepicker,.dropdown button").attr("disabled","disabled");
		$(".sex-choose .caret").css("display","none");	
		var file = document.getElementById('com-img');
		$('#right_name').text($('#com_name').val());
		if(file.value){
			ajaxFileUpload();
		}
		postInfo();
	});
	$("body").on("click",".dropdown-menu li a",function(){
		event.preventDefault();
		var $citem=$(this).parents(".dropdown").find(".chosen-item");
		$citem.text($(this).text());
		
	});
	/*公司信息中的图片修改*/
	$("body").on("click",".touxiang .cur-img",function(){
		if($(".modify i").hasClass("fa-active")){
			$(this).parent(".touxiang").find("input[type=file]").click();
		}
		/*$(".modify").click();*/
	});
	$(".touxiang input").on("change",function(){
		var files = this.files;
		for(var i=0;i<files.length;i++){
			initImg(files[i]);
		}
	});
	function initImg(file){
		var img = $(".touxiang .cur-img");
		var reader = new FileReader();
		reader.onload = function(evt){
			img.attr("src",evt.target.result);
			$(".current-img").attr("src",evt.target.result);
			};
		reader.readAsDataURL(file);
	}
	/*省份的选择*/
	$("body").on("click",".province-d ul li a",function(){
		$('#city .chosen-item').text("-");
		var a = $(this);
		var action = "/MicroCV/li/searchcitybyid.action?province_id="+a.data('province_id');
		$.get(action, function(data){
			$('.li_city').remove();
			var str = '';
			for(var i=0; i<data.length; i++){
				str += '<li class="li_city"><a href="#" data-city_id="' + data[i].city_id + '">' + data[i].city_name + '</a></li>';
			}
			$('#ul_city').append(str);
		});
	});
	/*城市的选择*/
	$("body").on("click",".city-d ul li a",function(){
		var $citem=$(this).parents(".dropdown").find(".chosen-item");
		$citem.text($(this).text());
		$citem.attr("data-city_id",$(this).data("city_id"));
		
	});
	/*行业的选择*/
	$("body").on("click",".industry-d ul li a",function(){
		var $citem=$(this).parents(".dropdown.industry-d").find(".chosen-item");
		$citem.attr("data-industry_id",$(this).data("industry_id"));
	});

	$("body").on("click",".gr-item li:nth-child(1)",function(){
		$(".pj-content").hide();
		$(".xx-content").show();
		tipFun("info","点击左边铅笔！","可以编辑，撤销，保存~");
	});
	$("body").on("click",".gr-item li:nth-child(2)",function(){
		$.get("/MicroCV/company/evaluate.action",function(data){
			if(data==null){
				tipFun("info","服务器发送错误，请稍后再试！","");
			}else{
				console.log(data);
				$('.evaluate-item').remove();
				var str = '';
				for(var i=0; i<data.length; i++){
					if(data[i].reflect_detail!=null){
						var mills = data[i].reflect_date;
						var date=new Date(mills);
						var times=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
						var date = times;
						str += '<div class="evaluate-item"><textarea readonly="readonly" class="pingjia" onpropertychange="this.style.height=(this.scrollHeight-24)+\'px\';" ' +
							'oninput="this.style.height=(this.scrollHeight-24)+\'px\';">' + data[i].reflect_detail + '</textarea>' +
							'<span class="pj-time"><span>' + date + '</span></span></div>';
					}
				}
				if(str!=''){
					$('#ppp').remove();
					$(".pj-content").append(str);
				}
				$(".xx-content").hide();
				$(".pj-content").show();
				
			}
		});
		tipFun("info","","查看收到的评价~");
	});
});

function postInfo(){
	var action = "/MicroCV/company/changinfo.action";
	var city_id=$(".city-d .chosen-item").data("city_id");
	var industry_id = $('.industry-d .chosen-item').data("industry_id");
	var c_detail=$('#com_detail').val();
	c_detail=c_detail.replace(/\n|\r\n/g, "<br/>");
	var data = {
			c_name:$('#com_name').val(),
			i_name:$('#type-btn .chosen-item').text(),
			"city.city_id":city_id,
			"c_industry.i_id":industry_id,
			address:$('#com_addr').val(),
			c_linkman:$('#link_man').val(),
			c_phone:$('#com_phone').val(),
			c_detail:c_detail
	};
	$.post(action,data,function(){
		if(data=="OK"){
			alert("信息更新成功！");
		}
	});
}

function getInfo(){
	$.get("/MicroCV/company/info.action",function(data){
		tipFun("info","点击左边铅笔！","可以编辑，撤销，保存~")
		if(data!=null){
			document.getElementById('current-img').src=data.logo;
			document.getElementById('img').src=data.logo;
			$('#com_name').val(data.c_name);
			$('#type-btn .chosen-item').text(data.c_industry.i_name);
			$('#province .chosen-item').text(data.city.province.province_name);
			$('#city .chosen-item').text(data.city.city_name);
			$('#com_addr').val(data.address);
			$('#link_man').val(data.c_linkman);
			$('#com_phone').val(data.c_phone);
			$('#com_detail').val(data.c_detail);
			$('#right_name').text(data.c_name);
			if(data.authentication_status=="N"){
				$('#com_authentication').val("未认证");
			}else{
				$('#com_authentication').val("已认证");
			}
		}
	});
};

function ajaxFileUpload() {
	$.ajaxFileUpload({
		url : "http://" + window.location.host
				+ "/MicroCV/company/uploadlogo.action", //用于文件上传的服务器端请求地址
		secureuri : false, //是否需要安全协议，一般设置为false
		fileElementId : 'com-img', //文件上传域的ID
		dataType : 'string', //返回值类型 一般设置为json
		success : function(data, status) //服务器成功响应处理函数
		{
			if(data==null){
				alert("上传失败");
			}
		},
		error : function(data, status, e)//服务器响应失败处理函数
		{
			alert(e);
		}
	});
	return false;
};
function imgerror(id){
	document.getElementById(id).src="/MicroCV/logo/default.png";
}