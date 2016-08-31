$(function(){
	$('#get_rcode').on("click",function(){
		console.log("jishi");
		if($("#spassword").val()!=""){
			var action = "/MicroCV/user/getregistcode.action";
			var data = {
					username:$('#register_email').val(),
					poc:1
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
					alert("用户名已存在!");
				}else if(data=="ERROR"){
					alert("服务器错误，请稍后再试！");
				}else{//过期
					alert("验证码过期");
				}
			});
		}
		else {
			$this=$("#spassword");
			$this.attr("title","请确认密码！");
			$this.attr("data-toggle", "tooltip").tooltip("show")
			.css("border-color","#f30");
				setTimeout(function() {
					$this.tooltip("destroy");
					$this.attr("data-toggle", "").css(
						"border-color", "")
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
						"border-color", "")
				}, 2000);
				$('#rCode').focus();
				return 1;
		}
		var action = "http://" + window.location.host + "/MicroCV/user/registsure.action";
		var data = {
				username:$('#register_email').val(),
				password:$('#password1').val(),
				code:$('#rCode').val(),
				poc:1
		};
		$.post(action, data, function(data){
			if(data=="OK"){
				$(".s-wrap,.s-one").hide();
				$(".s-three").show();
				$(".step-list ul li span").removeClass("step-active");
				$(".step-list ul li:nth-child(2) span").addClass("step-active");
				/*3秒后登陆的计时器*/
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
			}else if(data=="ERROR"){
				alert("注册码错误或者邮箱错误！");
			}else if(data=="COEDERROR"){
				alert("请获取正确的注册码！");
			}else{//CODEPAST
				ALERT("注册码过期!");
			}
		});
		
	});
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
							"border-color", "")
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
						"border-color", "")
				}, 2000);
				/*$this.focus();*/
				return 1;
		}
	});
	/*未输入第一次的密码，是没法进入确认密码的*/
	$("#spassword").on("click",function(){
		if($("#password1").val()==""){
			$("#password1").focus();
		}
	});
	/*第二次的密码和第一次的密码对比*/
	$("#spassword").on("blur",function(){
		var $this=$("#spassword");
		if($(this).val()!="" && $("#password1").val()!=""){
			if(($('#password1').val())!=($('#spassword').val())){
				$this.attr("title","两次密码不一致！");
				$this.attr("data-toggle", "tooltip").tooltip("show")
				.css("border-color","#f30");
					setTimeout(function() {
						$this.tooltip("destroy");
						$this.attr("data-toggle", "").css(
							"border-color", "")
					}, 2000);
					$this.val("");
					$this.focus();
					return 1;
				}
			}
		});
});