$(function(){
	/*注册时候的账号的验证*/
	$("#register_email").on("blur",function(){
		var $this=$("#register_email");
		if($(this).val()!=""){
			var aindex=$("#register_email").val().indexOf("@");
			if(aindex==-1){
				$this.attr("title","账号应该包含@");
				$this.attr("data-toggle", "tooltip").tooltip("show")
				.css("border-color","#f30");
					setTimeout(function() {
						$this.tooltip("destroy");
						$this.attr("data-toggle", "").css(
							"border-color", "");
					}, 2000);
					$this.focus();
					return 1;
			}
		}else {
			$this.attr("title","账号不能为空");
			$this.attr("data-toggle", "tooltip").tooltip("show")
			.css("border-color","#f30");
				setTimeout(function() {
					$this.tooltip("destroy");
					$this.attr("data-toggle", "").css(
						"border-color", "");
				}, 2000);
				$this.focus();
				return 1;
		}
	});
	/*未输入第一次的密码，是没法进入确认密码的*/
	$("#spassword").on("click",function(){
		if($("#password").val()==""){
			$("#password").focus();
		}
	});
	/*第二次的密码和第一次的密码对比*/
	$("#spassword").on("blur",function(){
		var $this=$("#spassword");
		if($(this).val()!="" && $("#password").val()!=""){
			if(($('#password').val())!=($('#spassword').val())){
				$this.attr("title","两次密码不一致！");
				$this.attr("data-toggle", "tooltip").tooltip("show")
				.css("border-color","#f30");
					setTimeout(function() {
						$this.tooltip("destroy");
						$this.attr("data-toggle", "").css(
							"border-color", "");
					}, 2000);
					$this.val("");
					$this.focus();
					return 1;
				}
			}
		});
	$('#get_rcode').on("click",function(){
		if($("#spassword").val()!=""){
		var action = "/MicroCV/user/getregistcode.action";
		var data = {
				username:$('#register_email').val(),
				poc:0
		};
		var $this=$("#get_rcode");
		$.post(action, data, function(data){
			if(data=="OK"){
				alert("用户名可用，请到邮箱接收注册码!");
				/*30秒计时器倒计时*/
				$this.attr("disabled","true");
				$this.html("60s");
				var num=60;
				var i=setInterval(function(){
					num--;
					if(num==0){
						clearInterval(i);
						$this.html("请重新获取");
						$this.removeAttr("disabled");
						return 0;
					}
					$this.html(num+"s");
				},1000);
			}else if(data=="USERALREADYEXIST"){
				alert("用户名已存在，请更换!");
			}else if(data=="ERROR"){
				alert("请检查邮箱名是否正确！");
			}else{
				alert("服务器错误，请稍后再试！");
			}
		});
		}else {
			$this=$("#spassword");
			$this.attr("title","请确认密码！");
			$this.attr("data-toggle", "tooltip").tooltip("show")
			.css("border-color","#f30");
				setTimeout(function() {
					$this.tooltip("destroy");
					$this.attr("data-toggle", "").css(
						"border-color", "");
				}, 2000);
				return 1;
		}
		
	});
	
	/*进入第二步*/
	$(".sure-r").on("click",function(){
		if($('#rCode').val()==""){
			$this=$('#rCode');
			$this.attr("title","注册码不能为空!");
			$this.attr("data-toggle", "tooltip").tooltip("show")
			.css("border-color","#f30");
				setTimeout(function() {
					$this.tooltip("destroy");
					$this.attr("data-toggle", "").css(
						"border-color", "");
				}, 2000);
				$('#rCode').focus();
				return 1;
		}
		var action = "/MicroCV/user/registsure.action";
		var data = {
				username:$('#register_email').val(),
				password:$('#password').val(),
				code:$('#rCode').val(),
				poc:0
		};
		$.post(action, data, function(data){
			if(data=="OK"){
				$(".s-wrap,.s-one").hide();
				$(".s-two").show();
				$(".step-list ul li span").removeClass("step-active");
				$(".step-list ul li:nth-child(2) span").addClass("step-active");
				$.get("/MicroCV/li/allprovince.action", function(data){
					$('.prov_li').remove();
					var str = '';
					for(var i=0; i<data.length; i++){
						str += '<li class="prov_li"><a href="#" data-province_id="' + data[i].province_id + '">' + data[i].province_name + '</a></li>';
					}
					$('#ul_prov').append(str);
				});
			}else if(data=="ERROR"){
				alert("注册码错误或者邮箱错误！");
			}else if(data=="COEDERROR"){
				alert("请获取正确的注册码！");
			}else{//CODEPAST
				ALERT("注册码过期!");
			}
		});
		
	});
	/*进入第三步,3秒后登陆的计时器*/
	$(".save-c").on("click",function(){
		if($('#cname-input').val()==""){
			$this=$('#cname-input');
			$this.attr("title","公司名称不能为空!");
			$this.attr("data-toggle", "tooltip").tooltip("show")
			.css("border-color","#f30");
				setTimeout(function() {
					$this.tooltip("destroy");
					$this.attr("data-toggle", "").css(
						"border-color", "");
				}, 2000);
				$('#rCode').focus();
				return 1;
		}
		var c_detail = $('.gs-desc').val();
		c_detail = c_detail.replace(/\n|\r\n/g, "<br/>");
		var action = "http://" + window.location.host + "/MicroCV/company/insertcompanyinfo.action";
		var industry_id = $('.industry-d .chosen-item').data("industry_id");
		var city_id=$(".city-d .chosen-item").data("city_id");
		var data={
				"c_industry.i_id":industry_id,
				c_name:$('#cname-input').val(),
				"city.city_id":city_id,
				address:$('#caddress-input').val(),
				c_linkman:$('#clinkman-input').val(),
				c_phone:$('#cphone-input').val(),
				c_detail:c_detail
		};
		$.post(action,data,function(data){
			if(data=="OK"){
				$(".s-two").hide();
				$(".s-three").show();
				$(".step-list ul li span").removeClass("step-active");
				$(".step-list ul li:nth-child(3) span").addClass("step-active");
				ajaxFileUploadLogo();
				
			}else{
				alert("公司基本信息完善失败");
			}
		});
	});
	
	$("body").on("click",".brand",function(){
		$(this).parents(".brand-div").find("input[type=file]").click();
	});
	/*公司商标的显示*/
	$("#brand-input").on("change",function(){
		var files = this.files;
		initImg1(files[0]);
	});
	$("body").on("click",".up-img",function(){
		$(this).next("input[type=file]").click();
	});
	/*营业执照照片的显示*/
	$(".img-wrap input").on("change",function(){
		var files = this.files;
		initImg2(files[0]);
	});
		
	$("body").on("click",".dropdown-menu li a",function(){
		event.preventDefault();
		$(this).parents(".dropdown").find(".chosen-item").text($(this).text());
	});
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
	/*营业执照照片的删除的出现*/
	$("body").on("mouseenter",".scimg",function(){
		$(this).find("i").show();
	});
	/*营业执照照片的删除之后，重新上传*/
	$("body").on("click",".scimg i",function(){
		$(this).parents(".img-wrap").find(".up-img").show();
		$(this).parents(".img-wrap").find(".scimg").remove();
	});
});

/**
 * 上传文件
 */
function ajaxFileUploadLogo() {
	$.ajaxFileUpload({
		url : "http://" + window.location.host
				+ "/MicroCV/company/uploadlogo.action", //用于文件上传的服务器端请求地址
		secureuri : false, //是否需要安全协议，一般设置为false
		fileElementId : 'brand-input', //文件上传域的ID
		dataType : 'string', //返回值类型 一般设置为json
		success : function(data, status) //服务器成功响应处理函数
		{
			if(data==null){
				alert("上传失败");
			}else{
				ajaxFileUploadIden();
				
			}
		},
		error : function(data, status, e)//服务器响应失败处理函数
		{
			alert(e);
		}
	});
	return false;
};
function ajaxFileUploadIden() {
	$.ajaxFileUpload({
		url : "http://" + window.location.host
				+ "/MicroCV/company/uploadiden.action", //用于文件上传的服务器端请求地址
		secureuri : false, //是否需要安全协议，一般设置为false
		fileElementId : 'license', //文件上传域的ID
		dataType : 'string', //返回值类型 一般设置为json
		success : function(data, status) //服务器成功响应处理函数
		{
			if(data==null){
				alert("上传失败");
			}else{
				alert("认证图片上传成功！");
				jump();
			}
		},
		error : function(data, status, e)//服务器响应失败处理函数
		{
			alert(e);
		}
	});
	return false;
};
function jump(){
	var num=3;
	var i=setInterval(function(){
		num--;
		if(num==0){
			clearInterval(i);
			window.location.href="../html/layout_th.html";
			return 0;
		}
		$(".time-limit").text(num);
	},1000);
}
/*商标的funtion()*/
function initImg1(file){
	var img = $(".brand-div").find("img")[0];;
	var reader = new FileReader();
	reader.onload = function(evt){img.src = evt.target.result;};
	reader.readAsDataURL(file);
}
/*营业执照的funtion()*/
function initImg2(file){
	var s = '<span class="scimg"><img src="" /><i class="fa fa-trash-o"></i></span>';
	$(".img-wrap .up-img").hide();
	$(".img-wrap").append(s);
	var img = $(".img-wrap .scimg:last").find("img")[0];
	var reader = new FileReader();
	reader.onload = function(evt){img.src = evt.target.result;};
	reader.readAsDataURL(file);
}