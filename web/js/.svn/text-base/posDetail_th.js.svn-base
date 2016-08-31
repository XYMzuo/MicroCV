$(function(){
	/*去掉了展开收起*/
	/*var yheight=$(".i-con").css("height");
	console.log(yheight);
	if(yheight>'120px'){
		$(".i-con").css("height","115px");
		$(".n-more").show();
	}else {
		$(".i-con").css("height",yheight);
	}*/
	$("body").on("click",".n-more",function(){
		if($(this).text()=="【展开】"){
			$(".i-con").css("height",yheight);
			$(this).text("【收起】");
		}
		else {
			$(".i-con").css("height","120px");
			$(this).text("【展开】");
		}
	});
	$("body").on("click", '#deli_bt', function(){
		if($(this).text()=="已投递"){
			return 1;
		}else {
			$.get("/MicroCV/user/islogin.action",function(data){
				if(data=="nologin"){
					tipFun("info","","请先登录！");
				}else{
					var action = "/MicroCV/person/delivery.action";
					var data = {pos_id:getQueryString().pos_id};
					$.post(action, data, function(data){
						if(data=="OK"){
							alert("投递成功！");
						}else{
							alert("服务器错误，请稍后再试！");
						}
					});
				}
			});
		}
	});
	$.post("/MicroCV/search/isdelivery.action", {pos_id:getQueryString().pos_id},function(data){
		console.log(data);
		if(data=="nologin"||data=="false"){//没登录或者//未投递
			$("#deli_bt").text("我要投递");
		}else if(data=="true"){//已投递
			$("#deli_bt").text("已投递");
		}else if(data=="ERROR"){
			alert("服务器错误，请稍后再试");
			window.location.href="/MicroCV/web/html/layout_th.html";
		}
	});
	var action = "/MicroCV/search/posdetail.action?pos_id=" + getQueryString().pos_id;
	$.get(action,function(data){
		console.log(data);
		document.getElementById("com_logo").src=data.company.logo;
		$('#pos_name').text(data.pos_name);
		$('#com_name').text(data.company.c_name);
		$('#pos_salary').text(data.pos_salary);
		$('#pos_time').text(data.pos_release);
		$('#com_address').text(data.work_place.province.province_name+data.work_place.city_name);
		switch(data.posRequest.record_request){
		case 1:
			$('#pos_record').text("高中以下");
			break;
		case 2:
			$('#pos_record').text("中专");
			break;
		case 3:
			$('#pos_record').text("高中");
			break;
		case 4:
			$('#pos_record').text("大专");
			break;
		case 5:
			$('#pos_record').text("本科");
			break;
		case 6:
			$('#pos_record').text("硕士");
			break;
		case 7:
			$('#pos_record').text("博士");
			break;
		case 8:
			$('#pos_record').text("博士后");
			break;
		}
		if(data.posRequest.major_request!=null){
			$('#pos_major').text(data.posRequest.major_request);
		}else{
			$('#pos_major').text("无");
		}
		if(data.posRequest.working_seniority!=null){
			$('#working_seniority').text(data.posRequest.working_seniority + '年');
		}else{
			$('#working_seniority').text("无");
		}
		if(data.posRequest.minAge!=null||data.posRequest.maxAge!=null){
			$('#pos_age').text(data.posRequest.minAge+"-"+data.posRequest.maxAge + '岁');
		}else{
			$('#pos_age').text("无");
		}
		if(data.posRequest.language_request!=null){
			$('#pos_lang').text(data.posRequest.language_request);
		}else{
			$('#pos_lang').text("无");
		}
		
		if(data.pos_detail!=null){
			var str = data.pos_detail;
			var strs=str.split("<br/>"); //字符分割 
			for (var i=0;i<strs.length ;i++ ) {
				var ss = "";
				ss += '<p>' + strs[i] + '</p>';
				$('#div-detail').append(ss);
			}
		}else{
			$('#div-detail').append("无");
		}
		$('#pos_link').text(data.company.c_linkman + ":" + data.company.c_phone);
		$('#hr_email').text(data.posOther.hr_email);
		$('#pos_address').text(data.company.address);
		$('.com-name').text(data.company.c_name);
		$('#com_detail').text(data.company.c_detail);
		if(data.collect==true){
			$(".fa-heart").css("color","rgb(246,5,5)");
		}else{
			$(".fa-heart").css("color","rgb(255,255,255)");
		}
		
		var data1 = {
				pos_id:getQueryString().pos_id,
				city_id:data.work_place.city_id,
				salary:data.pos_salary
//				salary:123321
		};
		$.post("/MicroCV/search/recommendpos.action",data1,function(data2){
			console.log(data2);
			if(data2==null||data2.length==0){
				$('.pos-bottom').remove();
				return;
			}
			if(data2.length==1){
				$('#rem_tr2').remove();
			}
			for(var i=0; i<data2.length;i++){
				$('#place'+(i+1)).text(data2[i].city_name);
				$('#pos_name'+(i+1)).attr("data-pos_id",data2[i].pos_id);
				document.getElementById("rem_com"+(i+1)).src=data2[i].logo;
				$('#age'+(i+1)).text(data2[i].min_age+"岁");
				$('#exp'+(i+1)).text(data2[i].working_seniority+"年");
				$('#pos_name'+(i+1)).text(data2[i].pos_name);
				$('#salary'+(i+1)).text(data2[i].pos_salary);
				switch(data2[i].record_request){
				case 1:
					$('#record'+(i+1)).text("高中以下");
					break;
				case 2:
					$('#record'+(i+1)).text("中专");
					break;
				case 3:
					$('#record'+(i+1)).text("高中");
					break;
				case 4:
					$('#record'+(i+1)).text("大专");
					break;
				case 5:
					$('#record'+(i+1)).text("本科");
					break;
				case 6:
					$('#record'+(i+1)).text("研究生");
					break;
				case 7:
					$('#record'+(i+1)).text("博士");
					break;
				case 8:
					$('#record'+(i+1)).text("博士后");
					break;
				}
			}
		});
	});
	$('.fa-heart').on("click", function(){
		var rgb = $(this).css("color");
		console.log(rgb);
		if(rgb=="rgb(255, 255, 255)"){
			var pos_id = getQueryString().pos_id;
			var action = "/MicroCV/person/addcollect.action";
			var data = {pos_id:pos_id};
			$.post(action, data, function(data) {
				if(data=="OK"){
					$(".fa-heart").css("color","rgb(246,5,5)");
					alert("成功收藏！");
				}else{
					alert("服务器错误");
				}
			});
		}else{
			var pos_id = getQueryString().pos_id;
			var action = "/MicroCV/person/deletecollect.action";
			var data = {pos_id:pos_id};
			$.post(action, data, function(data) {
				if(data=="OK"){
					$(".fa-heart").css("color","rgb(255,255,255)");
					alert("已取消收藏！");
				}else{
					alert("服务器错误");
				}
			});
		}
	});
	$("body").on("click",".position",function(){
		window.open("/MicroCV/web/html/posDetail_th.html?pos_id=" + $(this).data("pos_id"));
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
} ;
function logoerror(id){
	document.getElementById(id).src="/MicroCV/logo/default.png";
}