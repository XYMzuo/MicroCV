$(function(){
	$("body").on("click",".role > span",function(){
		$(this).addClass("role-active").siblings("span").removeClass("role-active");
		/*$("#username").val("");
		$("#password").val("");*/
	});
	$("body").on("click",".role span",function(){
		if($(this).hasClass("person-item")){
			$("#username").attr("placeholder","输入个人邮箱");
		}
		if($(this).hasClass("company-item")){
			$("#username").attr("placeholder","输入企业邮箱");
		}
	});
	$("body").on("click","#loginCon .close",function(){
		$("#bmark,#loginCon").remove();
	});
	$(".reset-step1 .close").on("click",function(){
		$(".reset-step1").hide();
		$(".reset-step2").show();
	});
	$("body").on("click",".login-btn",function() {
		console.log("middle login");
		/*验证账号密码*/
		var aindex=$("#username").val().indexOf("@");
		var pword=$("#pword").val();
		console.log(pword);
		if(aindex==-1){
			var $this=$("#username");
			$this.attr("title","账号格式不正确");
			$this.attr("data-toggle", "tooltip").tooltip("show")
			.css("border-color","#f30");
				setTimeout(function() {
					$this.tooltip("destroy");
					$this.attr("data-toggle", "").css(
						"border-color", "");
				}, 3000);
				/*$this.val("");*/
				$this.focus();
				return 1;
		}
		console.log(pword);
		if(pword=="")
			{
			var $this=$("#password");
			$this.attr("data-toggle", "tooltip").tooltip("show")
			.css("border-color","#f30");
				setTimeout(function() {
					$this.tooltip("destroy");
					$this.attr("data-toggle", "").css(
						"border-color", "");
				}, 3000);
				$this.val("");
				$this.focus();
				return 1;
			}
		/*拿到当前的登录的角色是个人还是企业*/
		var role = $(this).parent(".login").prev(".role").find("span.role-active").text();
		var poc;
		console.log(role);
		if(role=="个人"){
			poc = 1;
		}else{
			poc = 0;
		}
		var action = "http://" + window.location.host + "/MicroCV/user/login.action";
		var data = {
				username:$('#username').val(),
				password:$('#pword').val(),
				poc:poc
		};
		$.post(action, data, function(data) {
			if(data){
				if(data=="EROOR"){
					alert("服务器发生问题，请稍后再试！");
				}else {	
					$("#bmark,#loginCon").remove();
					if(poc==1){
						/*当前角色为个人，个人中心的show*/
						$("div.login-after .user-nav").show();
						$("div.login-before").hide();
						$(".left-part .user-list").css("display","inline-block");
						$(".left-part .com-list").hide();
						var urldz=window.location.pathname.split("/");
						if(urldz[4]=="registerPerson_th.html"||urldz[4]=="registerCompany_th.html"){
							window.location.href="../html/layout_th.html";
						}
							/*成功登陆之后的提示*/
							/*var str='<div class="alert alert-success alert-dismissible" role="alert">'+
							'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
							'<strong>登录成功！</strong>你可以轻触头像进入个人账号操作</div>';
							$("body").append(str);
							setTimeout(function(){
								$(".alert").css("display","none");
							},5000);*/
						tipFun("success","登陆成功！","你可以轻触头像进入个人账号操作");
					}
					else {
						/*当前角色为企业，公司中心的show*/
						$("div.login-after .com-nav").show();
						$("div.login-before").hide();
						$(".left-part .com-list").css("display","inline-block");
						$(".left-part .user-list").hide();
					}
				} 
			}else {
			/*	alert("用户名或密码错误!");*/
				var $this=$("#username");
				$this.attr("title","用户名或密码错误");
				$this.attr("data-toggle", "tooltip").tooltip("show")
				.css("border-color","#f30");
					setTimeout(function() {
						$this.tooltip("destroy");
						$this.attr("data-toggle", "").css(
							"border-color", "");
					}, 3000);
					$("#password").val("");
					$this.focus();
					return 1;
			}
		});
	});
	$(".reset-pas").on("click",function(){
		var action = "http://" + window.location.host + "/MicroCV/user/resetpassword.action";
		var data = {
				sCode:$('.verlification').val(),
				check_email:$('#check_email').val()
		};
		$.post(action, data, function(data) {
			if (data=="OK") {
				$(".reset-step1").hide();
				$(".reset-step2").show();
			} else if(data=="ERROR"){
				alert("验证码错误或者邮箱已更改");
			}else{
				alert("验证码过期了");
			}
		});
	});
	$(".get-code").on("click",function(){
		var action = "http://" + window.location.host + "/MicroCV/user/getsecuritycode.action";
		var data = {
				check_email:$('#check_email').val()
		};
		$.post(action, data, function(data){
			console.log(data);
		});
	});
	
	$(".change-pas").on("click",function(){
		$(".reset-step2").hide();
		$(".reset-step3").show();
		var action="http://" + window.location.host + "/MicroCV/user/updatepassword.action";
		var data = {
				username:$('#check_email').val(),
				password:$('#set_password').val()
		};
		$.post(action, data, function(data){
			console.log(data);
		});
		
	});
	
	$(".reset-step2 .back").on("click",function(){
		$(".reset-step2").hide();
		$(".reset-step1").show();
	});

	$(".reset-step1 .back").on("click",function(){
		$(".reset-step1").hide();
		window.location.href="../../web/html/login_th.html";
	});
	/*忘记密码*/
	$(".forget-pas").on("click",function(){
		console.log(2);
		var role;
		role=$(this).parent(".login").prev(".role").find("span.role-active").text();
		var action="http://" + window.location.host + "/MicroCV/user/forgetpassword.action";
		var poc;
		if(role=="个人"){
			poc = 1;
		}else{
			poc = 0;
		}
		var data = {poc:poc};
		$.post(action, data, function(data){
			console.log(data);
			window.location.href="../../web/html/findPassword_th.html";
		});
	});
	
});