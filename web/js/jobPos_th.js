$(function(){
	$(".com-list li:nth-child(2)").addClass("nava-active");
	$("body").on("click",".dropdown-menu li a",function(event){
		event.preventDefault();
		$(this).parents(".dropdown").find(".chosen-item").text($(this).text());
	});
	
	/*性别选择*/
	$("body").on("click",".sex-d ul li a",function(){
		var $citem=$(this).parents(".dropdown").find(".chosen-item");
		$citem.text($(this).text());
		$citem.attr("data-sex_request",$(this).data("sex_request"));
	});
	/*职位类型选择*/
	$("body").on("click",".zwlx-d ul li a",function(){
		var $citem=$(this).parents(".dropdown").find(".chosen-item");
		$citem.text($(this).text());
		$citem.attr("data-pos_type",$(this).data("pos_type"));
	});
	/*持续时长选择*/
	$("body").on("click",".mon-d ul li a",function(){
		var $citem=$(this).parents(".dropdown").find(".chosen-item");
		$citem.text($(this).text());
		$citem.attr("data-lastmonth",$(this).data("lastmonth"));
	});
	/*学历选择*/
	$("body").on("click",".xl-d ul li a",function(){
		var $citem=$(this).parents(".dropdown").find(".chosen-item");
		$citem.text($(this).text());
		$citem.attr("data-record_request",$(this).data("record_request"));
	});
	
	
	
	$.get("/MicroCV/user/getlogo.action",function(data){
		console.log(data);
		if(data=="nologin"){
			window.location.href="/MicroCV/web/html/layout_th.html";
		}else if(data!=null){
			document.getElementById("com_logo").src=data;
		}
	});
	$.get("/MicroCV/user/getcomname.action",function(data){
		console.log(data);
		if(data=="nologin"){
			window.location.href="/MicroCV/web/html/layout_th.html";
		}else if(data!=null){
			console.log(data);
			$('#com_name').text(data.c_name);
		}
	});
	
	///MicroCV/company/createpos.action
	$('#fabu').on("click", function(){
		var pos_name= $('#pos_name').val();
		var salary = $('#salary').val();
		var sex = $('.sex-d .chosen-item').data("sex_request");
		var pos_type = $('.zwlx-d .chosen-item').data("pos_type");
		var pos_lastmonth = $('.mon-d .chosen-item').data("lastmonth");
		var record_request = $('.xl-d .chosen-item').data("record_request");
		var language_request = $('.l-d .chosen-item').text();
		var minAge = $('.minage .chosen-item').text();
		var maxAge = $('.maxage .chosen-item').text();
		var major = $('#major').val();
		var seniority = $('#seniority').val();
		var pos_detail = $('#pos_detail').val();
		pos_detail = pos_detail.replace(/\n|\r\n/g, "<br/>");
		
		var hr_email = $('#hr_email').val();
		var linkman = $('#linkman').val();
		var link_phone = $('#link_phone').val();
		var data = {
				pos_name:pos_name,
				pos_salary:salary,
				pos_lastmonth:pos_lastmonth,
				pos_detail:pos_detail,
				pos_type:pos_type,
				"posOther.hr_email":hr_email,
				"posOther.hr_name":linkman,
				"posOther.hr_phone":link_phone,
				"posRequest.working_seniority":seniority,
				"posRequest.language_request":language_request,
				"posRequest.major_request":major,
				"posRequest.record_request":record_request,
				"posRequest.minAge":minAge,
				"posRequest.maxAge":maxAge,
				"posRequest.sex_request":sex
		};
		var action = "/MicroCV/company/createpos.action";
		$.post(action, data, function(data){
			if(data=="OK"){
				alert("发布成功！");
			}else if(data=="ERROR"){
				alert("服务器出现问题，请稍后再试！");
			}else{//null
				
			}
		});
	});
});

//返回一个json
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