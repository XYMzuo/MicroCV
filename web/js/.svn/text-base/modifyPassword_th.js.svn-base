$(function(){
	getusername();
	/*进入第二步*/
	$(".sure-r").on("click",function(){
		var oldpass = $('#oldpass').val();
		var newpass = $('#newpass').val();
		if(newpass!=($('#spass').val())){
			alert("2次输入的修改密码不一样！");
			return;
		}
		var data = {
				poc:getQueryString().poc,
				oldpass:oldpass,
				newpass:newpass,
		};
		var action = "/MicroCV/user/modifypassword.action";
		$.post(action,data,function(data){
			if(data=="OK"){
				alert("修改密码成功");
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
				alert("服务器错误，请稍后再试！");
			}else{//OLDPASSERROR
				alert("原密码错误，请确认再修改！");
			}
		});
	});
});

function getQueryString() { 
	var url = location.search; //获取url中"?"符后的字串
	   var theRequest = new Object();
	   if (url.indexOf("?") != -1) {
	      var str = url.substr(1);
	      strs = str.split("&");
	      for(var i = 0; i < strs.length; i ++) {
	         theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
	      }
	   }
	   return theRequest;
};