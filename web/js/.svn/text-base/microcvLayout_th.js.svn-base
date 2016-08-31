$(function(){
	$("#load_nav").load("microcvLayout_th.html",function(){
		$.get("/MicroCV/user/islogin.action",function(data){
			if(data=="nologin"){
				$(".user-list").show();
				$(".login-nav").show();
			}else if(data=="person"){
				$(".user-list").show();
				$(".user-nav").show();
				$(".login-nav").hide();
			}else if(data=="company"){
				$(".com-list").css("display","inline-block");
				$(".com-nav").show();
				$(".user-list,.login-nav").hide();
				var path=window.location.pathname.split("/");
				if(path[4]=="jobPos_th.html"){
					$(".com-list li:nth-child(2)").addClass("nava-active").siblings("li").removeClass("nava-active");
				}
				if(path[4]=="posManage_th.html"){
					$(".com-list li:nth-child(3)").addClass("nava-active").siblings("li").removeClass("nava-active");
				}
				if(path[4]=="reportManage_th.html"){
					$(".com-list li:nth-child(4)").addClass("nava-active").siblings("li").removeClass("nava-active");
				}
			}
		});
		/*首页内的锚点*/
		$("body").on("click",".user-list li a",function(){
			console.log("as");
			$(this).parent("li").addClass("nava-active").siblings("li").removeClass("nava-active");
		})
	});
	$("#load_footer").load("microcvLayout2_th.html");
	//hover用户个人头像的时候，userCon的show
	$("body").on("mouseenter",".user-section img",function(){
		$("#userCon").show();
	});
	//userCon的hide
	$("body").on("mouseleave","#userCon .u-content",function(){
		$("#userCon").hide();
	});
	$("body").on("mouseenter",".com-section img",function(){
		$("#comCon").show();
	});
	//userCon的hide
	$("body").on("mouseleave","#comCon .u-content",function(){
		$("#comCon").hide();
	});
	/*右上角登陆的时候，登陆注册的nav hide*/
	$("body").on("click",".login.login-a",function(){
			console.log("right login");
			loginalert();
			$("#username,#password").val("");
			$("#username").focus();
			$("#username,#password").css("background","#fff");
	});
	$("body").on("click","#loginCon .close",function(){
		$("#mark,#loginCon").hide();
	});
	/*右上角注册的时候，注册的出现*/
	$("body").on("click",".register",function(){
		window.open("../html/registerPerson_th.html");
	});
	/*个人中心*/
	$("body").on("click","#userCon .user-cz .person-center",function(){
		window.open("../html/personalCenter_th.html");
	});
	/*个人-->修改密码*/
	$("body").on("click","#userCon .user-cz .modify-p",function(){
		window.open("../html/modifyPassword_th.html?poc=1");
	});
	/*个人-->退出确认框*/
	$("body").on("click","#userCon .user-cz .exit",function(){
		exitalert();
	});
	/*个人-->退出确认框-->确取消退出*/
	$("body").on("click","#exitCon .cancel",function(){
		$("#bmark,#exitCon").remove();
	});
	/*个人-->退出确认框-->确定退出*/
	$("body").on("click","#exitCon .sure",function(){
		$("#bmark,#exitCon").remove();
		$.get("/MicroCV/user/logout.action",function(data){
			if(data=="OK"){
				console.log("exit");
				/*alert("个人登陆退出！");*/
				var urldz=window.location.pathname.split("/");
				if(urldz[4]=="registerPerson_th.html"||urldz[4]=="registerCompany_th.html"){
					window.location.href="../html/layout_th.html";
				}else{
					/*刷新*/
					window.location.reload();
				}
				
			}else{
				alert("服务器错误，请稍后再试！");
			}
		});
	});
	/*公司-->修改密码*/
	$("body").on("click","#comCon .user-cz .modify-p",function(){
		window.open("../html/modifyPassword_th.html?poc=0");
	});
	/*公司中心*/
	$("body").on("click","#comCon .user-cz .person-center",function(){
		window.open("../html/companyCenter_th.html");
	});
	/*公司-->退出确认框*/
	$("body").on("click","#comCon .user-cz .exit",function(){
		/*$("#mark,#exitCon").show();*/
		exitalert();
	});
	/*公司导航条-->职位发布跳转*/
	$("body").on("click",".com-list .job-pos",function(){
		window.location.href="../html/jobPos_th.html";
	});
	/*公司导航条-->职位管理跳转*/
	$("body").on("click",".com-list .pos-manage",function(){
		window.location.href="../html/posManage_th.html";
	});
	/*公司导航条-->报表管理跳转*/
	$("body").on("click",".com-list .report-manage",function(){
		window.location.href="../html/reportManage_th.html";
	});
	/*搜索*/
	$("body").on("click",".searching-uint .fa-search",function(){
		/*window.location.href="../html/search_th.html?value="+$("#query").val();*/
		window.open("../html/search_th.html?value="+$("#query").val());
	});
	$("body").on("keyup","#query",function(event){
		if(event.keyCode==13){
			$(".searching-uint .fa-search").click();
		}
	})
});
/*typetip指明是什么类型的警告框，tips是粗体的文字，tipp是正常字体的文字*/
function tipFun(typetip,tips,tipp){
	var str='<div class="alert alert-'+typetip+' alert-dismissible" role="alert">'+
	'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
	'<strong>'+tips+'</strong>'+tipp+'</div>';
	$(".alert").css("display","none");
	$("body").append(str);
	setTimeout(function(){
		$(".alert").css("display","none");
	},5000);
};
function loginalert(){
	var str = "";
	str += '<div id="bmark"></div><div id="loginCon"><div class="con-body"><div class="whole-content"><div class="main-content"><span class="close"> <i>&times;</i></span>' +
			'<div class="logorow"><img src="../../web/img/logo3.png" alt="logo" /></div><div class="holder"><div class="with-line">欢迎来到微简历</div><div class="role">'
	+ '<span class="person-item role-active">个人</span> <span class="company-item">企业</span></div><div class="login"><span class="person-log"> <input type="email" id="username"'
	+ 'name="username" placeholder="输入个人邮箱"  value="" /> <input type="password" id="pword" name="password" placeholder="密码"  title="密码不为空" value="" /></span><div class="login-tip">'
	+ '<span class="checkbox-custom checkbox-success"><input type="checkbox" id="rem-password" /> <label for="rem-password">记住密码</label></span><span class="checkbox-custom checkbox-success">'
	+ '<input type="checkbox" id="auto-login" /> <label for="auto-login">自动登录</label></span></div><input type="submit" class="login-btn" value="登录" /><a class="forget-pas">忘记密码 </a>'
	+ '</div></div></div></div></div></div>';
	$('body').append(str);
};
function exitalert(){
	var str = '<div id="bmark"></div><div id="exitCon"><div class="exit-body"><div class="modal-body"><p class="p-tip">确认退出吗&hellip;</p></div><div class="modal-footer">' 
		+ '<button type="button" class="btn btn-default cancel">取消</button><button type="button" class="btn btn-primary sure">确定</button></div></div></div>';
	$('body').append(str);
}